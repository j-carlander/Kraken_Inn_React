export function Order({ order }) {
  return (
    <div key={order.name} className="card">
      <h4>{order.name}</h4>
      <p>{order.details}</p>
    </div>
  );
}
