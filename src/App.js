import Navbar from "./components/Header/Navbar";
import SubNav from "./components/Header/SubNav";
import "./App.css";
import BagImg from "./components/Header/BagImg";
import MainFile from "./components/Body/MainFile";
import { jsonData } from "./components/Json/Jsondata";

function App() {
  return (
    <div className="appCon">
      <Navbar />
      <SubNav />
      <BagImg />
      <div className="bpCon">
        <div>
          <ul className="bagsCon">
            <li>Bags</li>
            <li className="style">Backpacks</li>
          </ul>
        </div>
        <div className="product">
          <p>12 Products</p>
        </div>
      </div>
      <div className="jsonDataCon">
        {jsonData.map((bagData) => (
          <MainFile key={bagData.id} Data={bagData} />
        ))}
      </div>
    </div>
  );
}

export default App;
