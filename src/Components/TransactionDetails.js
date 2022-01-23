import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
      setTransaction(res.data);
    }).catch(()=>{
      navigate("/not-founnd")
    });

    // fetch(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    // .then((res)=>res.json())
    // .then((data)=>{
    //   setTransaction(data);
    // }).catch(()=>{
    //   navigate("/not-found")
    // });

  }, [index])
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res)=>{
      navigate("/transactions");
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <article>
      <h3>
        {/* {transaction.date} */}
      </h3>
      <br  />
      <h4>
        <span>
          {transaction.date}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {transaction.name}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {transaction.amount}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {transaction.from}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {transaction.category}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h4>
      <br />
      <h5></h5>
      <h6></h6>
      <p></p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;