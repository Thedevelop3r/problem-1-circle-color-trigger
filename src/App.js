import './App.css';
import ToggleCircle from './components/ToggleCircle';

function App() {
  return (
    <div className="App">
      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: "50px"
      }}>
        <h2 style={{
          margin: "12px 0"
        }}>
          Press ctrl+r to reload again and again....
        </h2>
        <ToggleCircle />
      </main>
    </div>
  );
}

export default App;
