import React from 'react'


// Config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Componens

import BannerImage from './Banner/index'
import Grid from './Grid/index'
import Thumb from './Thumb/index'
import Spinner from './Spinner/index'
import SearchBar from './SearchBar/index'
import Button from './Button/index'

// Hook

import { useHomeFetch } from '../hooks/useHomeFetch'

// Image

import NoImage from '../images/no_image.jpg';

const Home = () => {

  const{state,loading,error, setSearchTerm,searchTerm, setIsLoading} = useHomeFetch();

  console.log(state);

  if (error) return <div> Algo está errado.</div>

    return (
      <div>
        {!searchTerm && state.results[0] ?
          <BannerImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          
          />
          : null
        }
        <SearchBar setSearchTerm={setSearchTerm} />
        <Grid header={ searchTerm ? 'Resultado da Busca' : " Filmes Polupares "}>
          {state.results.map(movie => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
              }
              movieId={movie.id}
            
            />  
          ))}
        </Grid>
            { loading && <Spinner /> }
        {
          state.page < state.total_pages && !loading && (
            <Button text="Carregar mais filmes" callback={() => setIsLoading(true)}/>
          )
        }
      </div>
    );
}

export default Home
