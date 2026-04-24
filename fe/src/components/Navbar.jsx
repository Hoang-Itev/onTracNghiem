import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Trang chủ</Link>
      <Link to="/quiz">Quản lý câu hỏi</Link>
      <Link to="/about-us">Giới thiệu</Link>
    </nav>
  );
}