import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Product Details</h1>
      <p>Details for product id: {id ?? "unknown"} (placeholder).</p>
    </main>
  );
}
