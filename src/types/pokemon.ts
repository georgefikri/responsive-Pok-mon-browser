export interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  imageUrl: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: {
    name: string;
    isHidden: boolean;
  }[];
  baseExperience: number;
}
