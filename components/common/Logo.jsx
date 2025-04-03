export default function Logo({ logoSize }) {
  return (
    <div className={`logo logo--${logoSize}`}>
      <span className="logo__block">BLOCK</span>
      <span className="logo__recall">RECALL</span>
    </div>
  );
}
