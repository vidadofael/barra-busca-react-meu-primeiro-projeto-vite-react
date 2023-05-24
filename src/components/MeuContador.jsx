import { useState } from 'react';
import '../components/MeuComponent.css'

export default function MeuContador() {
  const [contador, setContador] = useState(0);
  const valorTV = 5649.99;
  const precoTotal = (valorTV * contador).toFixed(2);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className='card'>
        <img src='../../public/image/tvlg-removebg-preview.png'></img>
        <h1>Meu Carrinho</h1>
        <h2>SmartTV LG C2 65 4K 120Hz...</h2>
        <div className='card-counter'>
          <button onClick={diminuir}>-</button>
          <h3>{contador}</h3>
          <button onClick={aumentar}>+</button>
          <div className='card-price'>
            <p>R$ {precoTotal}</p>
          </div>
        </div>
        <button className='button-buy'>Comprar</button>
      </div>
    
  );
}