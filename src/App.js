import { useEffect, useState } from "react";
import styles from "./App.module.css";
import styles_btn from "./Button.module.css";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        // console.log(json);
        // return;
      });
  }, []);

  return (
    <div>
      <h1>Coins ({coins.length}) </h1>
      {loading ? <strong>Loading ...</strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}:) ${coin.quotes.USD.price}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
