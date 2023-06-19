import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">Home</li>
        <li className="navbar__list-item">Collection</li>
        <li className="navbar__list-item">Sale</li>
        <li className="navbar__list-item">Accessories</li>
        <li className="navbar__list-item">Purses</li>
        <li className="navbar__list-item">More</li>
      </ul>
    </div>
  );
}

export default Navbar;
