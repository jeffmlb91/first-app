import "./App.css";

function App() {
  const name = "Jeff";
  const isMale = true;

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {user} </h1>;
    }
    return <h1>Hello, Stranger</h1>;
  }
  return (
    <div className="app">
      {getGreeting()}
      <h1 className="app__title">Hello {name} </h1>
      <h2>You are a {isMale ? "Male" : "Female"}</h2>
      <h1 className='app__title app__title--large'>This is a LARGE title</h1>
      <h1 className='app__title app__title--small'>This is a SMALL title</h1>
    </div>
  );
}

export default App;
