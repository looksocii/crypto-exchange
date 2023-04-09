import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Crypto Exchange
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/UserWallet" className="nav-link">
                Wallet
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/BuyCrypto" className="nav-link">
                Buy Crypto
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;