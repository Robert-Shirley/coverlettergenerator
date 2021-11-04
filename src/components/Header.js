const Header = (props) => {
  const { firstName, lastName, title } = props;
  return (
    <header style={{ position: "absolute" }}>
      <h2 className="white-text headd">
        {firstName} {lastName}
      </h2>
      <h4 className="white-text titles">{title}</h4>
    </header>
  );
};

export default Header;
