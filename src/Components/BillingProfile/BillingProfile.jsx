import { useState } from "react";

export function BillingProfile({
  debitCard,
  handleAddDebitCard,
  address,
  handleNewAddress,
  balance,
  handleAddBalance,
}) {
  const [newDebitCard, setNewDebitCard] = useState("");
  const [newAddress, setNewAddress] = useState("");

  return (
    <section>
      <h3>Billing</h3>
      <div>
        <p>Debit Card: </p>
        <BillingField
          displayValue={debitCard}
          fieldValue={newDebitCard}
          setFieldValue={setNewDebitCard}
          handleAddValue={handleAddDebitCard}
          type="number"
        />
      </div>
      <div>
        <p>Address: </p>
        <BillingField
          displayValue={address}
          fieldValue={newAddress}
          setFieldValue={setNewAddress}
          handleAddValue={handleNewAddress}
          type="text"
        />
      </div>
      <p>Balance: {balance}</p>
      <button onClick={handleAddBalance}>Add Balance</button>
    </section>
  );
}

function BillingField({
  displayValue,
  fieldValue,
  setFieldValue,
  handleAddValue,
  type,
}) {
  if (displayValue) return <span>{displayValue}</span>;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddValue(fieldValue);
      }}>
      <input
        id="debitCard"
        type={type}
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
