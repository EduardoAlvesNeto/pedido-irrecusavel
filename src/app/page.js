'use client'

import './styles.css';
import { Scroll } from 'lucide-react'

export default function Home() {

  const handleClick = (event) => {
    const button = event.target;

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get button dimensions
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate available space
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Position button randomly within the available space
    button.style.position = 'absolute';
    button.style.top = Math.random() * maxY + 'px';
    button.style.left = Math.random() * maxX + 'px';

    console.log('Não clickado')
  };

  const handleAlert = () => {
    alert('Está marcado!')
    console.log('Sim clickado')

  }

  return (
    <>
      <main className="main">
        <div className="title">
          <h1><strong>Cuzin</strong> quando eu for em patu?</h1>
          <h3>Ps: Se sair do site a resposta vai ser <strong className="afirmation">SIM</strong></h3>
        </div>
        <div className="buttons">
          <button onClick={handleAlert} id="btn-sim">SIM</button>
          <button onClick={handleClick} id="btn-nao">NÃO</button>
        </div>
      </main>
      <footer>
        <p>Developed by <strong>Eduardo Alves</strong> 🍁</p>
      </footer>
    </>
  );
}
