/*import { useState } from "react";
import FieldsIMC from "./Imc";

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
      <FieldsIMC
        peso={peso}
        setPeso={setPeso}
        altura={altura}
        setAltura={setAltura}
        calcularIMC={calcularIMC}
      />
      {imc && (
        <div className="text-center mt-3">
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
