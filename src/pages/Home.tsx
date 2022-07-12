import { Header } from "../components/Header";
import { PokeCard, 
  // PokemonProps, 
  // PokemonTypeProps 
} from "../components/PokeCard";
import { useQuery, gql } from '@apollo/client';
import { client } from '../libs/apollo';

client.query({
  query: gql`
  query getPokemonCardsList {
  pokemon_v2_pokemon_aggregate(order_by: {id: asc}, limit: 12, offset: 0) {
    nodes {
      id
      name
      # pokemon_v2_pokemontypes {
      #   pokemon_v2_type {
      #     name
      #   }
      # }
      # pokemon_species_id
    }
  }
}
  `,
}).then((result) => {return result});

 const GET_POKEMONS_LIST = gql`
  query getPokemonCardsList {
    pokemon_v2_pokemon_aggregate(order_by: { id: asc }, limit: 12, offset: 0) {
      nodes {
        id
        name
        # pokemon_v2_pokemontypes {
        #   pokemon_v2_type {
        #     name
        #   }
        # }
        # pokemon_species_id
      }
    }
  }
`;


export function Home() {
  
  const { 
    loading, 
    error, 
    data 
  } = useQuery(GET_POKEMONS_LIST);

  

  return (
    <>
      <Header />

      <div className="mt-8 flex justify-center">
        <ul>
          <li className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* {data?.nodes.map((
              // props: PokemonProps
              ) => {
              return(
                <PokeCard 
                  // key={props.id}
                  // id={props.id}
                  // name={props.name}
                  // // pokemonElement={props.pokemonElement.pokemon_v2_type.name}
                  // // pokemon_species_id={pokemon.pokemon_species_id}              
                  />
              )
            }
            )} */}
            <PokeCard />
          </li>
        </ul>
      </div>
    </>
  );
}
