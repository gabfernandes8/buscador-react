import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css'
import logo from "./img/logo.webp"
import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCEP] = useState({})

  const handleSearch = async() => {
    if(input === ''){
      alert('preencha algum cep!')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCEP(response.data)
      setInput('')

    } catch (error) {
      console.log(error);
      
      alert('ops! erro ao buscar')
      setInput('')
    }
  }

  <div>
    <img src={logo} alt=""className='logo' />
  </div>

  return (
    <div className="container">
      <img src=".;" alt="" />
      <h1 className="title">viaCep! - react.js</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />


        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>{cep.bairro}</span>
            <span>{cep.localidade}</span>
            <span>{cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
