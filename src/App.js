import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
