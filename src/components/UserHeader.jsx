// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserHeader = () => {
  return (
    <div><div className="d-flex justify-content-between align-items-center">
    <div>
      <span className="d-block">Welcome, Huynh Hoàng An (DH52005663)</span>
      <span className="d-block"><a href="">Change password</a>  | <a href="">Logout</a></span>
    </div>
    {/* Add other user-related components here */}
  </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        </div>
        <div>
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link" href="/">TRANG CHỦ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">ĐĂNG KÝ MÔN HỌC</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">XEM TKB</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">XEM HỌC PHÍ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">XEM ĐIỂM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">KẾT QUẢ ĐIỂM DANH</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">KẾT QUẢ ĐIỂM DANH ONLINE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">XEM MÔN TQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">SỬA TT CÁ NHÂN</a>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default UserHeader;
