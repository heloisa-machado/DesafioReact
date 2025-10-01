const Calculo = ({ a, b }) => {
  const handleSomar = () => {
    alert(a + b);
  };
  const handleMultiplicar = () => {
    alert(a * b);
  };
  const handleDividir = () => {
    alert(a / b);
  };
  const handleSubtrair = () => {
    alert(a - b);
  };

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={handleSomar}>Somar!</button>
      <button onClick={handleSubtrair}>Subtrair!</button>
      <button onClick={handleMultiplicar}>Multiplicar!</button>
      <button onClick={handleDividir}>Dividir!</button>
    </div>
  );
};

export default Calculo;
