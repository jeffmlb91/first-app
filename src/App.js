
import './App.css';

function App() {

  const name = "Jeff";
  const isMale = true;

  function getGreeting(user) {
    if(user) {
      return <h1>Hello, {user} </h1>
    } return <h1>Hello, Stranger</h1>
  }
  return (
    <div className="app">
      {getGreeting(name)}
      <h1>Hello {name} </h1>
      <h2>You are a {isMale ? 'Male' : 'Female'}</h2>
   
    </div>
  );
}

export default App;
