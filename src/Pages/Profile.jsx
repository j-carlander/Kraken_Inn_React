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
  const [debitCard, setDebitCard] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(200);
  const [orders, setOrders] = useState(testOrders);

  function handleAddDebitCard(card) {
    setDebitCard(card);
  }
  function handleNewAddress(address) {
    setAddress(address);
  }
  function handleAddBalance() {
    setBalance((prev) => prev + 100);
  }

  return (
    <article className="page-article place-start">
      <h2>Profile</h2>
      <AccountProfile />
      <BillingProfile
        debitCard={debitCard}
        address={address}
        balance={balance}
        handleAddDebitCard={handleAddDebitCard}
        handleNewAddress={handleNewAddress}
        handleAddBalance={handleAddBalance}
      />
      <OrderHistory orders={orders} />
    </article>
  );
}
