import { API_BASE_URL } from '../utils/constants';
import type { PokemonListResponse, PokemonDetailResponse } from './types';
import type { Pokemon, PokemonDetail } from '../types/pokemon';

export async function fetchPokemonList(
  offset: number,
  limit: number
): Promise<{ pokemon: Pokemon[]; total: number }> {
  const response = await fetch(
    `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }

  const data: PokemonListResponse = await response.json();

  const pokemon: Pokemon[] = data.results.map((item) => {
    const id = parseInt(item.url.split('/').filter(Boolean).pop() || '0');
    return {
      id,
      name: item.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });

  return {
    pokemon,
    total: data.count,
  };
}

export async function fetchPokemonDetail(id: string | number): Promise<PokemonDetail> {
  const response = await fetch(`${API_BASE_URL}/pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon details for ID: ${id}`);
  }

  const data: PokemonDetailResponse = await response.json();

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    imageUrl:
      data.sprites.other?.['official-artwork']?.front_default ||
      data.sprites.front_default ||
      '',
    types: data.types.map((t) => t.type.name),
    stats: {
      hp: data.stats.find((s) => s.stat.name === 'hp')?.base_stat || 0,
      attack: data.stats.find((s) => s.stat.name === 'attack')?.base_stat || 0,
      defense: data.stats.find((s) => s.stat.name === 'defense')?.base_stat || 0,
      specialAttack:
        data.stats.find((s) => s.stat.name === 'special-attack')?.base_stat || 0,
      specialDefense:
        data.stats.find((s) => s.stat.name === 'special-defense')?.base_stat || 0,
      speed: data.stats.find((s) => s.stat.name === 'speed')?.base_stat || 0,
    },
    abilities: data.abilities.map((a) => ({
      name: a.ability.name,
      isHidden: a.is_hidden,
    })),
    baseExperience: data.base_experience,
  };
}
