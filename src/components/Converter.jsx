import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import axios from "axios";

const Converter = () => {
  const [currency, setCurrency] = useState("usd");
  const [convertedCurrency, setConvertedCurrency] = useState("ngn");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);

  const handleConvert = async () => {
    const res = await axios.get(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    );
    console.log(res.data[currency][convertedCurrency] * amount);
    setCurrencies(Object.keys(res.data));
    setConvertedAmount(res.data[currency][convertedCurrency] * amount);
  };

  useEffect(() => {
    handleConvert();
  }, []);

  const handleSwap = () => {
    const tempCurrency = currency;
    const tempAmount = amount;
    setCurrency(convertedCurrency);
    setConvertedCurrency(tempCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  return (
    <div className="bg-white h-[20rem] flex flex-col gap-5 justify-center items-center rounded-xl">
      <Inputs
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        currencies={currencies}
        setCurrency={setCurrency}
      />
      <CgArrowsExchangeAltV
        onClick={handleSwap}
        className="text-5xl text-black"
      />
      <Inputs
        currency={convertedCurrency}
        setCurrency={setConvertedCurrency}
        amount={convertedAmount}
        setCurrencies={setCurrencies}
        setAmount={setConvertedAmount}
      />

      <button
        onClick={handleConvert}
        className="rounded-lg px-5 font-semibold py-2 text-[#163300] bg-[#9fe870] hover:bg-[#8cd360] transition-all duration-300 ease-in-out "
      >
        Convert
      </button>
    </div>
  );
};

export default Converter;
