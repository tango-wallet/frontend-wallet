export default function GenerateLinkComponent({ amount, wallet }) {
  return (
    <div>
      <div className="text-black">
        <h3>{amount}</h3>
        <h3>{wallet}</h3>
      </div>
    </div>
  );
}
