import "./App.css";
import Frase from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  const name = "Visitante";

  const url =
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhdG9zfGVufDB8fDB8fHww";

  return (
    <div className="App">
      <Frase />
      <Evento />
      <Form />
    </div>
  );
}

export default App;
