import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css'

function App() {

  const [input, setInput] = useState('')

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />


        <button className="buttonSearch">
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      <main className='main'>
          <h2>CEP: 06440260</h2>

          <span>Rua Bonita</span>
          <span>Complemento: apto 184</span>
          <span>Aldeia</span>
          <span>Barueri - SP</span>
      </main>
    </div>
  );
}

export default App;
