import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-between border-b-8 border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-[.25rem]">
        PizzaNow
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
