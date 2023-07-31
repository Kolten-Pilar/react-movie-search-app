import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
display: flex;
flex-direction: column;
justify-items: center;
box-shadow: 2px 1px 10px 5px; 
width: 50%;
background-color: #232323;
margin: auto;

`
const Button = styled.input`
color: #FFF;
background-color: #232323;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
box-shadow: 0 0 10px #49ff18;
width: 200px;
font-size: 1.5rem;
cursor: pointer;
border-radius: 30px;
&:hover { 
  color: red;
  box-shadow: 0 0 15px red;
}
`

const myForm = {
  height: '50px',
  fontSize: '2.5rem',
  textAlign: 'center',
  boxShadow: '0 0 20px #49ff18',
  borderRadius: '30px',
  backgroundColor: '#9c9c9c',
}


function Form({ movieSearch }) {

  const [form, setForm] = useState({
    searchTerm: ''
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      searchTerm: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(form.searchTerm);
  }

  return (
    <div>
      <Container onSubmit={handleSubmit}>
        <div style={{margin: 'auto', marginTop: 'auto', display: 'flex', flexDirection: 'row', }}>
          <input style={myForm} placeholder='Search for a Movie' type="text" value={form.searchTerm} onChange={handleChange} />
          <Button type="submit" value='Submit' /> 
          </div>  
      </Container>
    </div>
  )
}

export default Form