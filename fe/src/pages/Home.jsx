import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      {/* Phần Hero - Chào mừng */}
      <section className="hero-section">
        <h1>Hệ Thống Ôn Tập Trắc Nghiệm IT</h1>
        <p>Nền tảng giúp bạn củng cố kiến thức lập trình thông qua các bộ câu hỏi thực tế.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate('/quiz')} className="btn-primary">Quản lý ngân hàng đề</button>          
          <button onClick={() => navigate('/about-us')} className="btn-secondary">Tìm hiểu thêm</button>
        </div>
      </section>

      {/* Phần Thống kê nhanh */}
      <section className="info-cards">
        <div className="info-card">
          <h3>+100</h3>
          <p>Câu hỏi chất lượng</p>
        </div>
        <div className="info-card">
          <h3>Miễn phí</h3>
          <p>Cho mọi sinh viên</p>
        </div>
        <div className="info-card">
          <h3>24/7</h3>
          <p>Truy cập mọi lúc</p>
        </div>
      </section>
    </div>
  );
}