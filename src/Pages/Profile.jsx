import { useEffect, useState } from "react";
import { AccountProfile } from "../Components/AccountProfile/AccountProfile";
import { BillingProfile } from "../Components/BillingProfile/BillingProfile";
import { OrderHistory } from "../Components/OrderHistory/OrderHistory";
import { Navigate } from "react-router-dom";
import { fetchProfile } from "../Service/Fetch/Fetch";

const testOrders = [
  { name: "Order 1", details: "...some food ordered" },
  { name: "Order 2", details: "...some food ordered" },
  { name: "Order 3", details: "...some food ordered" },
  { name: "Order 4", details: "...some food ordered" },
];

export function Profile() {
  const [debitCard, setDebitCard] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [orders, setOrders] = useState(testOrders);

  useEffect(() => {
    let ignore = false;

    if (localStorage.getItem("JWT_TOKEN")) {
      fetchProfile("get", "profile")
        .then((result) => result.json())
        .then((data) => {
          if (!ignore) {
            setDebitCard(data.debit_card);
            setAddress(data.address);
            setBalance(data.balance);
          }
        });
    }

    return () => (ignore = true);
  }, []);

  if (!localStorage.getItem("JWT_TOKEN")) {
    return <Navigate to="/login" />;
  }

  async function handleAddDebitCard(debitcard) {
    let result = await fetchProfile("PUT", "debitcard", { debitcard });
    // if (result.status === 200) setDebitCard(debitcard);
  }
  async function handleNewAddress(address) {
    let result = await fetchProfile("PUT", "address", { address });
    // if (result.status === 200) setAddress(address);
  }
  async function handleAddBalance() {
    let result = await fetchProfile("PATCH", "balance", { balance: 100 });
    if (result.status === 200) setBalance((prev) => prev + 100);
  }

  return (
    <article className="page-article place-start">
      <h2>Profile</h2>
      <AccountProfile />
      <BillingProfile
        debitCard={debitCard}
        setDebitCard={setDebitCard}
        address={address}
        setAddress={setAddress}
        balance={balance}
        handleAddDebitCard={handleAddDebitCard}
        handleNewAddress={handleNewAddress}
        handleAddBalance={handleAddBalance}
      />
      <OrderHistory orders={orders} />
    </article>
  );
}
