import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import { Table } from "react-bootstrap";

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const API_URL=process.env.REACT_APP_API_URL;
  useEffect(()=>{
    axios.get(API_URL + "/transactions")
    .then((res)=>{
      setTransactions(res.data);
    }).catch((err)=>{
      throw err;
    })

    //  fetch(API_URL + "/transactions")
    //    .then((res)=>{
    //      return res.json();
    //    }).then((data)=>{
    //      setTransactions(data);
    //    }).catch((err)=>{
    //      throw err
    //    })
  }, []);

  return (
    <div className="Transactions">
      <section>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} />
            })}
          </tbody>
        </Table>
      </section>
    </div>
  )
}

export default Transactions;