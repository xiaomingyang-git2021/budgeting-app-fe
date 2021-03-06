import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
    category: "",
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
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="date" id="Date"><strong>Date</strong></label>
        <input 
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name" id="Name"><strong>Name</strong></label>
        <input 
          id="name"
          type="text"
          value={transaction.name}
          onChange={handleTextChange}
          placeholder="name"
        />
        <label htmlFor="amount" id="Amount"><strong>Amount</strong></label>
        <input 
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="amount"
        />
        <label htmlFor="from" id="From"><strong>From</strong></label>
        <input 
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
        />
        <label htmlFor="category" id="Category"><strong>Category</strong></label>
        <input 
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="category"
        />
        <br />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </div>
  );
};

export default TransactionNewForm;