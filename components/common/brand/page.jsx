import Logo from "../Logo";

export default function UseLogo({ logoSize }) {
  return (
    <div className="container_logo">
      <div className="logo-showcase">
        <Logo logoSize={logoSize} />
      </div>
    </div>
  );
}
