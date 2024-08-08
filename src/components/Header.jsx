import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-2 items-center w-full bg-red-600">
      <h2 className="font-semibold text-2xl">TODO</h2>
      <FaMoon className="text-xl" />
    </div>
  );
};

export default Header;
