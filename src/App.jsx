import './App.css';
import Header from "./components/header";

function App() {
  const name = 'Ashish';
  const lastName = 'Sharma';

  return (
    // JSX
    // this is not HTML
    <h1 className="App">
      <div>
        <Header />
      </div>
      { name + lastName }
    </h1>
  );
}

export default App;
