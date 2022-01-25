import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 id="budgetapp">
        <Link to="/transactions">Budget App</Link>
      </h1>
      {/* <h2 id="bankAcountTotal" className={total>1000? "green":total>0? "grey":"red"}>Bank Account Total: ${total}</h2> */}
      <button>
        <Link to="transactions/new">NEW TRANSACTION</Link>
      </button>
    </nav>
  );
}