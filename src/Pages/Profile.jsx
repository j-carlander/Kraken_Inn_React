import { useState } from "react";
import { AccountProfile } from "../Components/AccountProfile/AccountProfile";
import { BillingProfile } from "../Components/BillingProfile/BillingProfile";
import { OrderHistory } from "../Components/OrderHistory/OrderHistory";

const testOrders = [
  { name: "Order 1", details: "...some food ordered" },
  { name: "Order 2", details: "...some food ordered" },
  { name: "Order 3", details: "...some food ordered" },
  { name: "Order 4", details: "...some food ordered" },
];

export function Profile() {
  const [debitCard, setDebitCard] = useState();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState(200);
  const [orders, setOrders] = useState(testOrders);

  function handleNewDebitCard(e) {
    let cardNo = e.target.value;
    setDebitCard(cardNo);
  }
  function handleNewAddress(e) {
    let address = e.target.value;
    setAddress(address);
  }
  function handleAddBalance(e) {
    let newBalance = e.target.value;
    setBalance((prev) => prev + newBalance);
  }

  return (
    <article className="page-article place-start">
      <h2>Profile</h2>
      <AccountProfile />
      <BillingProfile
        debitCard={debitCard}
        address={address}
        balance={balance}
        handleNewDebitCard={handleNewDebitCard}
        handleNewAddress={handleNewAddress}
        handleAddBalance={handleAddBalance}
      />
      <OrderHistory orders={orders} />
    </article>
  );
}
