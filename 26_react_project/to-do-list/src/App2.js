import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selCoin, setSelCoin] = useState([]);
  const [balance, setBalance] = useState(0);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(res=>res.json())
    .then(json=>{
      setCoins(json);
      setLoading(false);
    });
  }, [])

  const onChange = (e) => setBalance(e.target.value);
  const selectCoin = (e) => {
    setSelCoin(e.target.value.split(":"));
    console.log(e.target.value.split(":"));
  }
  return (
    <div>
      <h1>The coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      <select onChange={selectCoin}>
        {coins.map(coin=>{
          return <option key={coin.id}>{coin.name} ({coin.symbol}) :{coin.quotes.USD.price}</option>
        })}
      </select>}
      <br/>
      <span>Your money balance : </span>
      <input value={balance} onChange={onChange} type="number" placeholder="Enter your balance..."/>
      <span>$</span>
      {selCoin.length > 0 ? <h5>You can receive {selCoin[0]} {balance / Number(selCoin[1])}</h5> : null}
    </div>
  )
}
export default App;