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
              <Symbols.Products size="30" /> Diagnostics Products
            </li>
            <li>
              <Symbols.Sales size="30" /> Sales
            </li>
            <li>
              <Symbols.Services size="30" /> Services
            </li>
            <li>
              <Symbols.Consults size="30" /> Consultants
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
