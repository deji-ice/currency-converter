const Inputs = () => {
  return (
    <span className=" w-fit relative px-2">
      <input
        type="number"
        className="border border-black w-[24rem] p-5 font-semibold text-black text-2xl rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="0"
      />

      <select className="absolute right-5 bg-transparent p-5 font-semibold text-black text-2xl rounded-lg">
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>
      </select>
    </span>
  );
};

export default Inputs;
