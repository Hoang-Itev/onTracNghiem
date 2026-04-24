import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #4db8ff', paddingBottom: '10px' }}>
        Về Hệ Thống Ôn Tập Trắc Nghiệm
      </h2>
      
      <p style={{ marginTop: '20px' }}>
        Chào mừng bạn đến với nền tảng ôn thi trực tuyến. Website được thiết kế nhằm giúp sinh viên 
        có một môi trường rèn luyện kiến thức hiệu quả, tiện lợi và nhanh chóng qua các bài trắc nghiệm thực tế.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: '#007bff' }}>Mục tiêu</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Củng cố kiến thức các môn học IT.</li>
            <li>Rèn luyện kỹ năng giải trắc nghiệm.</li>
            <li>Chuẩn bị tốt cho các kỳ thi học kỳ.</li>
          </ul>
        </div>

        <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h3 style={{ color: '#007bff' }}>Tính năng</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Ngân hàng câu hỏi đa dạng.</li>
            <li>Giao diện đơn giản, dễ sử dụng.</li>
            <li>Làm bài và xem kết quả tức thì.</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', color: '#888' }}>
        <p><strong>Công nghệ sử dụng:</strong></p>
        <p>Frontend (React + Vite) — Backend (Node.js + Express) — Database (MySQL + Prisma)</p>
      </div>
    </div>
  );
}