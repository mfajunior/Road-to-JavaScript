function Evento() {
  function meuEvento() {
    alert("Evento ativadoooo!");
  }
  return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button onClick={meuEvento}>Disparar Evento</button>
    </div>
  );
}

export default Evento;
