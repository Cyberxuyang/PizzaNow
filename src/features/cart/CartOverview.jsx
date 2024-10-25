import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-stone200 flex items-center justify-between bg-stone-800 px-4 py-4 sm:px-6">
      <p className="space-x-4 font-semibold uppercase text-stone-300 sm:space-x-10">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </div>
  );
}

export default CartOverview;
