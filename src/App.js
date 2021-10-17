import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import SideSection from "./components/Side/SideSection";

function App() {
  return (
    <div className="App">
      <SideSection className="side" />
      <MainSection className="main" />
    </div>
  );
}

export default App;
