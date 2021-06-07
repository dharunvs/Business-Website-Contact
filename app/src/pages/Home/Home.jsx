import { Symbols } from "../../components";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="homeContainer">
        <div className="homeContent">
          <h1>Vibrant DX</h1>
          <ul>
            <li>
              <Symbols.Products size="22" /> Diagnostics Products
            </li>
            <li>
              <Symbols.Sales size="22" /> Sales
            </li>
            <li>
              <Symbols.Services size="22" /> Services
            </li>
            <li>
              <Symbols.Consults size="22" /> Consultants
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
