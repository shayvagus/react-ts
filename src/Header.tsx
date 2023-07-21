interface HeaderProps {
  userName: string;
}

function Header({ userName }: HeaderProps) {
  return (
    <div>
      <h1>Hello to {userName}</h1>
      <div className="red">test color</div>
    </div>
  );
}

export default Header;
