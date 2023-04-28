export function Order({ order }) {
  return (
    <div className="card">
      <h4>{order.name}</h4>
      <p>{order.details}</p>
    </div>
  );
}
