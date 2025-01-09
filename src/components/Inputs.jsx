/* eslint-disable react/prop-types */

const Inputs = ({ amount, setAmount, setCurrency, currency, currencies }) => {
  const currencyList = [
    'ngn', // Nigeria
    'ghs', // Ghana
    'usd', // United States
    'eur', // European Union
    'gbp', // United Kingdom
    'jpy', // Japan
    'aud', // Australia
    'cad', // Canada
    'zar', // South Africa
    'kes'  // Kenya
  ];

  return (
    <span className="w-fit relative px-2">
      <input
        type="number"
        className="border border-black w-[24rem] p-5 font-semibold text-black text-2xl rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="absolute right-5 bg-transparent p-5 font-semibold text-black text-2xl rounded-lg uppercase"
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Inputs;
