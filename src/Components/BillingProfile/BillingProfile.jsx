import { useState } from "react";

export function BillingProfile({
  debitCard,
  handleNewDebitCard,
  address,
  handleNewAddress,
  balance,
  handleAddBalance,
}) {
  const [newDebitCard, setNewDebitCard] = useState();
  const [newAddress, setNewAddress] = useState();

  return (
    <section>
      <h3>Billing</h3>
      <div>
        <label htmlFor="debitCard">Debit Card: </label>

        {debitCard ? (
          <span>{debitCard}</span>
        ) : (
          <input
            id="debitCard"
            type="number"
            value={newDebitCard}
            onChange={(e) => setNewDebitCard(e.target.value)}
            onBlur={handleNewDebitCard}
          />
        )}
      </div>
      <div>
        <label htmlFor="address">Address: </label>
        {address ? (
          <span>{address}</span>
        ) : (
          <input
            id="address"
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            onBlur={handleNewAddress}
          />
        )}
      </div>
      <p>Balance: {balance}</p>
      <button onClick={handleAddBalance}>Add Balance</button>
    </section>
  );
}
