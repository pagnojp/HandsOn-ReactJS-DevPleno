import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Entrada, Rodando, Fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(1);
    setMax(301);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Start</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  let restantes = [];
  for (let index = min; index < max; index++) {
    restantes.push(index);
  }

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertou o número {palpite} com {numPalpites} tentativas!
        </p>
        <button onClick={iniciarJogo}>Restart</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu número é? {palpite}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
      <ul>
        {restantes.map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
