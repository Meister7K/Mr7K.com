// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartOptions,
  ChartData,
  LineController
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Filler,
  Legend
);

type FrequencyMultiplier = {
  [key: string]: number;
  annual: number;
  'semi-annual': number;
  quarterly: number;
  monthly: number;
  weekly: number;
};

interface TableRow {
  year: number;
  principal: number;
  annualDividendYield: number;
  yieldOnCost: number;
  yearlyDividends: number;
  beforeDripValue: number;
  afterDripValue: number;
  principalIncrease: number;
  annualContribution: number;
  newBalance: number;
  cumulativeDividends: number;
}

interface ChartDataset {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
  pointRadius: number;
  order: number;
}

const frequencyMultiplier: FrequencyMultiplier = {
  annual: 1,
  'semi-annual': 2,
  quarterly: 4,
  monthly: 12,
  weekly: 52
};

const InvestmentCalculator: React.FC = () => {
  const [startingCapital, setStartingCapital] = useState<string>("100");
  const [distributionFrequency, setDistributionFrequency] = useState<keyof FrequencyMultiplier>("annual");
  const [drip, setDrip] = useState<boolean>(true);
  const [contributions, setContributions] = useState<string>("100");
  const [initialDividendYield, setInitialDividendYield] = useState<string>("2");
  const [dividendPercentIncrease, setDividendPercentIncrease] = useState<string>("0");
  const [annualPriceAppreciation, setAnnualPriceAppreciation] = useState<string>("10");
  const [years, setYears] = useState<string>("10");
  const [chartData, setChartData] = useState<ChartData<"line">>({ labels: [], datasets: [] });
  const [tableData, setTableData] = useState<TableRow[]>([]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatPercentage = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value / 100);
  };

  const calculateReturns = (): void => {
    const yearLabels = Array.from({ length: Number(years) + 1 }, (_, i) => `Year ${i}`);
    let currentCapital = Number(startingCapital);
    let totalContributions = 0;
    let totalDividends = 0;
    let totalAppreciation = 0;
    let cumulativeDividends = 0;

    const input: number[] = [Number(startingCapital)];
    const dividends: number[] = [];
    const appreciation: number[] = [];
    const newTableData: TableRow[] = [];

    for (let year = 0; year <= Number(years); year++) {
      const yearlyDividendYield = Number(initialDividendYield) * 
        Math.pow(1 + Number(dividendPercentIncrease) / 100, year) / 100;
      
      const yearlyDividends = currentCapital * yearlyDividendYield;
      const yearlyAppreciation = currentCapital * (Number(annualPriceAppreciation) / 100);
      const yieldOnCost = year === 0 ? yearlyDividendYield : (yearlyDividends / (Number(startingCapital) + totalContributions)) * 100;
      
      cumulativeDividends += yearlyDividends;
      
      const beforeDripValue = currentCapital;
      if (drip) {
        currentCapital += yearlyDividends;
      }
      
      currentCapital += yearlyAppreciation + Number(contributions);
      totalContributions += Number(contributions);
      totalDividends = yearlyDividends;
      totalAppreciation += yearlyAppreciation;

      newTableData.push({
        year,
        principal: Number(startingCapital) + totalContributions - Number(contributions),
        annualDividendYield: yearlyDividendYield * 100,
        yieldOnCost,
        yearlyDividends,
        beforeDripValue,
        afterDripValue: drip ? beforeDripValue + yearlyDividends : beforeDripValue,
        principalIncrease: yearlyAppreciation,
        annualContribution: Number(contributions),
        newBalance: currentCapital,
        cumulativeDividends
      });
      
      input.push(Number(startingCapital) + totalContributions);
      dividends.push(totalDividends);
      appreciation.push(totalAppreciation);
    }
    
    setTableData(newTableData);
    setChartData({
      labels: yearLabels,
      datasets: [
        {
          label: 'Dividends',
          data: dividends,
          fill: true,
          backgroundColor: 'rgba(225,0,68, 0.6)',
          borderColor: 'rgba(225,0,68, 1)',
          pointRadius: 0,
          order: 3
        },{
          label: 'Price Appreciation',
          data: appreciation,
          fill: true,
          backgroundColor: 'rgba(167,0,76, 0.6)',
          borderColor: 'rgba(167,0,76, 1)',
          pointRadius: 0,
          order: 2
        },
        {
          label: 'Starting Capital + Contributions',
          data: input,
          fill: true,
          backgroundColor: 'rgba(90,29,87, 0.6)',
          borderColor: 'rgba(90,29,87, 1)',
          pointRadius: 0,
          order: 1
        }
        
        
      ]
    });
  };

  useEffect(() => {
    calculateReturns();
  }, []);

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        reverse:true,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            const value = context.raw;
            const formattedValue = formatCurrency(value);

            const dataIndex = context.dataIndex;
            const principal = chartData.datasets[0].data[dataIndex] as number;
            const dividends = chartData.datasets[1].data[dataIndex] as number;
            const appreciation = chartData.datasets[2].data[dataIndex] as number;
            const total = principal + dividends + appreciation;
            const percentage = ((value / total) * 100).toFixed(1);

            return `${label}${formattedValue} (${percentage}%)`;
          },
          footer: function(tooltipItems: any[]) {
            let total = 0;
            tooltipItems.forEach(item => {
              total += item.raw as number;
            });
            return `Total: ${formatCurrency(total)}`;
          }
        }
      },
      legend: {
        position: 'top',
        reverse: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Portfolio Value ($)'
        },
        ticks: {
          callback: function(value: number) {
            return formatCurrency(value);
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'nearest',
      axis: 'x'
    }
  };

  return (
    <div className="p-6 max-w-6xl my-10 mx-auto rounded-lg shadow-lg backdrop-blur-lg bg-background/60 ">
      <h1 className="text-2xl font-bold mb-6">Investment Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Starting Capital ($)
          </label>
          <input
            type="number"
            value={startingCapital}
            onChange={(e) => setStartingCapital(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Distribution Frequency
          </label>
          <select
            value={distributionFrequency}
            onChange={(e) => setDistributionFrequency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            {Object.keys(frequencyMultiplier).map((freq) => (
              <option key={freq} value={freq}>
                {freq.charAt(0).toUpperCase() + freq.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Dividend Reinvestment (DRIP)
          </label>
          <button
            onClick={() => setDrip(!drip)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              drip ? 'bg-rose-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4  transform rounded-full transition-transform ${
                drip ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="ml-2 text-sm text-primary">
            {drip ? 'Enabled' : 'Disabled'}
          </span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Annual Contributions ($)
          </label>
          <input
            type="number"
            value={contributions}
            onChange={(e) => setContributions(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Initial Dividend Yield (%)
          </label>
          <input
            type="number"
            value={initialDividendYield}
            onChange={(e) => setInitialDividendYield(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Dividend Increase/Year (%)
          </label>
          <input
            type="number"
            value={dividendPercentIncrease}
            onChange={(e) => setDividendPercentIncrease(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Annual Price Appreciation (%)
          </label>
          <input
            type="number"
            value={annualPriceAppreciation}
            onChange={(e) => setAnnualPriceAppreciation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-primary mb-1">
            Investment Period (years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <Button 
          onClick={calculateReturns}
          className="bg-rose-600 hover:bg-rose-700 text-white px-6"
        >
          Calculate
        </Button>
      </div>

      <div className="w-full h-96 p-4 rounded-lg shadow mb-8">
        <Chart type='line' data={chartData} options={chartOptions} />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="">
            <tr>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Contribution</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Dividend Yield</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Yield on Cost</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dividend</th>
              {drip && (
                <>
                  <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Before DRIP</th>
                  <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">After DRIP</th>
                </>
              )}
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Principal Increase</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Contribution</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">New Balance</th>
              <th className="px-2 text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Cumulative Dividends</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row) => (
                 <tr key={row.year}>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{row.year}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.principal)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatPercentage(row.annualDividendYield)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatPercentage(row.yieldOnCost)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.yearlyDividends)}</td>
                 {drip && (
                   <>
                     <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.beforeDripValue)}</td>
                     <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.afterDripValue)}</td>
                   </>
                 )}
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.principalIncrease)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.annualContribution)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.newBalance)}</td>
                 <td className="px-2 text-center py-4 whitespace-nowrap">{formatCurrency(row.cumulativeDividends)}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   );
 };
 
 export default InvestmentCalculator;