import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Price() {
    const [coin, setCoin] = useState(null);


    const apiKey = process.env.REACT_APP_COINAPI_KEY;
    const Params = useParams();
    const {symbol} = Params;
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    const fetchCoin = async ()=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setCoin(data)
        } catch (error) {
            console.log(error);
        }
       
    }
    useEffect(()=>{
        fetchCoin();
    },[])

   
    const loaded = () => {
        return (
          <div>
            <h1>
              {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
          </div>
        );
      };

      const loading = () => {
        return <h1>Loading...</h1>;
      };
      return coin && coin.rate ? loaded() : loading();
}

export default Price;