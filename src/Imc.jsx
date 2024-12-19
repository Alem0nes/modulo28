import React, { useState } from "react";

function CalculoIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const imcCalculado = (
        parseFloat(peso) /
        (parseFloat(altura) * parseFloat(altura))
      ).toFixed(2);
      setImc(imcCalculado);
    } else {
      alert("Por favor, preencha os campos!");
    }
  };

  return (
    <div>
      <h1 className="mt-5">Cálculo IMC</h1>

      {/* Campo para Peso */}
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingPeso"
          name="Peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <label htmlFor="floatingPeso">Peso (kg)</label>
      </div>

      {/* Campo para Altura */}
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          id="floatingAltura"
          name="Altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="floatingAltura">Altura (m)</label>
      </div>

      {/* Botão para Calcular IMC */}
      <div className="text-center">
        <button
          type="button"
          className="btn btn-outline-light mt-2 text-center w-100"
          onClick={calcularIMC}
        >
          Calcular
        </button>
      </div>

      {/* Exibe o IMC calculado, se estiver disponível */}
      {imc && (
        <div className="text-center mt-1">
          <p>Seu IMC é {imc}</p>
          <p>
            {imc < 18.5
              ? "Abaixo do peso"
              : imc < 24.9
              ? "Peso normal"
              : "Sobrepeso"}
          </p>
        </div>
      )}
    </div>
  );
}

export default CalculoIMC;
