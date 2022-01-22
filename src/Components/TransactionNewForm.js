import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/transactions`, transaction)
    .then((res)=>{
      navigate("/transactions");
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input 
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name</label>
        <input 
          id="name"
          type="text"
          value={transaction.name}
          onChange={handleTextChange}
          placeholder="name"
        />
        <label htmlFor="amount">Amount</label>
        <input 
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="amount"
        />
        <label htmlFor="from">From</label>
        <input 
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
        />
        <br />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </div>
  );
};

export default TransactionNewForm;