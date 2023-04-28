import { useState } from "react";

export function BillingProfile({
  debitCard,
  setDebitCard,
  handleAddDebitCard,
  address,
  setAddress,
  handleNewAddress,
  balance,
  handleAddBalance,
}) {
  const [newDebitCard, setNewDebitCard] = useState("");
  const [newAddress, setNewAddress] = useState("");

  return (
    <section className="profile-section">
      <h3>Billing</h3>
      <div>
        <p>Debit Card: </p>
        {/* <BillingField
          displayValue={debitCard}
          fieldValue={newDebitCard}
          setFieldValue={setNewDebitCard}
          handleAddValue={handleAddDebitCard}
          type="number"
        /> */}
        <PtagToInput
          value={debitCard}
          setValue={setDebitCard}
          handleAddValue={handleAddDebitCard}
          type="text"
        />
      </div>
      <div>
        <p>Address: </p>
        {/* <BillingField
          displayValue={address}
          fieldValue={newAddress}
          setFieldValue={setNewAddress}
          handleAddValue={handleNewAddress}
          type="text"
        /> */}
        <PtagToInput
          value={address}
          setValue={setAddress}
          handleAddValue={handleNewAddress}
          type="text"
        />
      </div>
      <p>Balance: {balance}</p>
      <button onClick={handleAddBalance}>Add Balance</button>
    </section>
  );
}

function PtagToInput({ value, setValue, type, handleAddValue }) {
  const [isPTag, setIsPTag] = useState(true);
  // const [value, setValue] = useState(displayValue);

  return (
    <>
      {isPTag ? (
        <p className="ptag-input" onClick={() => setIsPTag(false)}>
          {value}
        </p>
      ) : (
        <p>
          <input
            autoFocus
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              handleAddValue(value);
              setIsPTag(true);
            }}
          />
        </p>
      )}
    </>
  );
}

// function BillingField({
//   displayValue,
//   fieldValue,
//   setFieldValue,
//   handleAddValue,
//   type,
// }) {
//   if (displayValue) return <span>{displayValue}</span>;
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handleAddValue(fieldValue);
//       }}>
//       <input
//         id="debitCard"
//         type={type}
//         value={fieldValue}
//         onChange={(e) => setFieldValue(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }
