import { Order } from "../Order/Order";

export function OrderHistory({ orders }) {
  return (
    <section>
      <h3>Order History</h3>
      {orders.map((order) => (
        <Order key={order.name} order={order} />
      ))}
    </section>
  );
}
