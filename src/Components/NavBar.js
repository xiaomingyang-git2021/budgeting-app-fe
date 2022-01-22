import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Budget App</Link>
      </h1>
      <button>
        <Link to="transactions/new">NEW TRANSACTION</Link>
      </button>
    </nav>
  );
}