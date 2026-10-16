import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  const [nomeHabito, setNomeHabito] = useState('');
  const aumentar = () => {
    setContador((prev) => prev + 1);
  }
  const diminuir = () => {
    setContador((prev) => {
      if (prev > 0) {
        return prev -1
      }
      return prev;
    })
  }

  return (
    <>
      <h1>Contador de Hábitos</h1>
      <div>
        <label htmlFor = "habito-input" style={{ display: 'block', marginBottom: '8px'}}>
          Nome Hábito:
        </label>
        <input
          id="habito-input"
          type="text"
          value={nomeHabito}
          onChange={(e) => setNomeHabito(e.target.value)}
          placeholder = "Ex: Beber água"
        />
      </div>

      {nomeHabito && <h2>Hábito: {nomeHabito}</h2>}
      <div>
        <button onClick={diminuir}>-</button>
        <span>{contador}</span>
        <button onClick={aumentar}>+</button>
      </div>
    </>
  )
}

export default App
