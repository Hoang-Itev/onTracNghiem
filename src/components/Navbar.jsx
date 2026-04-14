import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Link về trang chủ */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Quiz</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Trang chủ</Link></li>
        <li><Link to="/about-us" style={{ color: 'white', textDecoration: 'none' }}>Giới thiệu</Link></li>
        <li><Link to="/library" style={{ color: 'white', textDecoration: 'none' }}>Thư viện đề</Link></li>
        <li><Link to="/history" style={{ color: 'white', textDecoration: 'none' }}>Lịch sử thi</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;