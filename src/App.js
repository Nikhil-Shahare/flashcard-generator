import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Group from "./Components/Group";
import Header from "./Components/Header/Header";
import CreateGroup from "./Components/CreateNewPage/CreateGroup/CreateGroup";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <CreateGroup />
    </div>
  );
}

export default App;
