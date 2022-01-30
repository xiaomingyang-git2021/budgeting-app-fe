import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransactionEditForm() {
  let { index } = useParams();
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

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
      setTransaction(res.data);
    }).catch((err)=>{
      navigate("/not-found");
    })
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, transaction)
    .then((res)=>{
      navigate(`/transactions`);
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <div className="Edit">
      <form id="edit" onSubmit={handleSubmit}>
        <label htmlFor="date"><strong>Date</strong></label>
        <input 
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name"><strong>Name</strong></label>
        <input 
          id="name"
          type="text"
          value={transaction.name}
          onChange={handleTextChange}
          placeholder="name"
        />
        <label htmlFor="amount"><strong>Amount</strong></label>
        <input 
          id="amount"
          type="number"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="amount"
        />
        <label htmlFor="from"><strong>From</strong></label>
        <input 
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="from"
        />
        <label htmlFor="category"><strong>Category</strong></label>
        <input 
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="category"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  )

};

export default TransactionEditForm;