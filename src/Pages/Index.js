import Transactions from "../Components/Transactions";
import { useState } from 'react';

function Index() {
  const [totalAmount, setTotalAmount] = useState("");
  const getTotalAmount = total => {
    setTotalAmount(total)
  }
  return (
    <div className="Index">
      <h2 style={totalAmount > 1000? {color: "green"}: totalAmount > 0? {color:"grey"}: {color: "red"}}>Bank Account Total:  {totalAmount}</h2>
      <Transactions getTotalAmount={getTotalAmount} />
    </div>
  );
};

export default Index;