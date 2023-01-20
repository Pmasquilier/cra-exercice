export type Pokemon = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    sprites: string;
    id: string;
    abilities: PokemonAbility[];
  };

  type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: {
        name: string;
        url:string;
    };
  }