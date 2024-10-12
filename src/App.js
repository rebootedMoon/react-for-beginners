import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoney(event.target.value);
    setResult("");
  };
  const onSelectedCoin = (event) => {
    console.log(event.target.value);
    const selectedCoinId = event.target.value;
    const selectedCoin = coins.find(
      (item) => item.id === selectedCoinId
    );
    setSelectedCoinPrice(selectedCoin.quotes.USD.price);
    setResult("");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setResult(money / selectedCoinPrice);
  };
  return (
    <div>
      <h1>Coins ({coins.length}) </h1>
      {loading ? <strong>Loading ...</strong> : null}
      <form onSubmit={onSubmit}>
        <input
          type="number"
          onChange={onChange}
          value={money}
          placeholder="Input the change the money"
        />
        <select onChange={onSelectedCoin}>
          <option value="">Selected a coin</option>
          {coins.map((coin, index) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}:) ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
        <button>Change</button>
      </form>
      <h1>
        {selectedCoinPrice} / {money}/ {result} 주
      </h1>
    </div>
  );
}
export default App;
