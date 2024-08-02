'use client';

import { useEffect, useState } from 'react';
import styles from '../../app/page.module.css'

interface PokemonSprite {
  id: number;
  url: string;
  position: number;
}

export default function PokeRain() {
  const [pokemonSprites, setPokemonSprites] = useState<PokemonSprite[]>([]);

  useEffect(() => {
    const fetchNewPokemon = async () => {
      const response = await fetch('/api/pokeapi');
      const data = await response.json();
      return data.gifUrls[0];
    };

    const addNewSprite = async () => {
      const newSpriteUrl = await fetchNewPokemon();
      setPokemonSprites(prevSprites => {
        const newSprites = [...prevSprites];
        if (newSprites.length >= 3) {
          newSprites.shift();
        }
        newSprites.push({
          id: Date.now(),
          url: newSpriteUrl,
          position: Math.random() * 80 + 5 // Random horizontal position between 5% and 85%
        });
        return newSprites;
      });
    };

    // Initial population of sprites
    Promise.all(Array(3).fill(null).map(() => addNewSprite()));

    // Add new sprite every 3 seconds
    const interval = setInterval(addNewSprite, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      {pokemonSprites.map((sprite) => (
        <div
          key={sprite.id}
          className={styles.sprite}
          style={{ left: `${sprite.position}%` }}
        >
          <img src={sprite.url} alt="Pokemon" className='w-full h-auto' />
        </div>
      ))}
    </div>
  );
}

