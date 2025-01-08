import Inputs from "./Inputs";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const Converter = () => {
  return (
    <div className="bg-white h-[20rem] flex flex-col gap-5 justify-center items-center rounded-xl">
      <Inputs />
      <CgArrowsExchangeAltV className="text-5xl text-black" />
      <Inputs />

      <button className="rounded-lg px-5 font-semibold py-2 text-[#163300] bg-[#9fe870] hover:bg-[#8cd360] transition-all duration-300 ease-in-out ">
        Convert
      </button>
    </div>
  );
};

export default Converter;
