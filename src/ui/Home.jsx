import CreateUser from "../features/user/CreateUser";
import "../index.css";

function Home() {
  return (
    <div className="my-8 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
