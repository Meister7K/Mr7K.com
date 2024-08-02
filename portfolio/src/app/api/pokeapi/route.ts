import { NextResponse } from 'next/server';

export async function GET() {
  const randomNumber = Math.floor(Math.random() * 945) + 1;
  
  const pokemonUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${randomNumber}.gif`;

  const response = await fetch(pokemonUrl);
  const gifUrl = response.url;

  return NextResponse.json({ gifUrls: [gifUrl] });
}