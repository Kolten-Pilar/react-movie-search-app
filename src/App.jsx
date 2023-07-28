import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`

function App() {
  const apiKey = '307567c1'
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      setMovie(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getMovie('Kung Pow');
  }, [])
  

  return (
    <Container>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </Container>
  )
}

export default App
