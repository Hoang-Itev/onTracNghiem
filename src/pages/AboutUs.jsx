import React from 'react';

function AboutUs() {
  return (
    <div className="about-container" style={{ padding: '40px 20px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--accent)' }}>Về Chúng Tôi</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text)' }}>
          Nền tảng học tập và ôn thi trắc nghiệm hàng đầu dành cho sinh viên công nghệ.
        </p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2>🚀 Sứ mệnh của chúng tôi</h2>
        <p>
          Chúng tôi tin rằng việc ôn tập không nên là một gánh nặng. Mục tiêu của Quiz App là cung cấp một công cụ 
          thông minh, trực quan và dễ tiếp cận để mọi học viên có thể nắm vững kiến thức chuyên môn một cách tự tin nhất.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--code-bg)' }}>
          <h3>🎯 Tầm nhìn</h3>
          <p>Trở thành hệ thống ngân hàng câu hỏi lớn nhất và cập nhật nhất cho các chứng chỉ quốc tế.</p>
        </div>
        <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '8px', background: 'var(--code-bg)' }}>
          <h3>💎 Giá trị cốt lõi</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Chất lượng nội dung hàng đầu.</li>
            <li>Trải nghiệm người dùng mượt mà.</li>
            <li>Cập nhật liên tục theo xu hướng.</li>
          </ul>
        </div>
      </div>

      <section style={{ textAlign: 'center' }}>
        <h2>🤝 Đội ngũ sáng lập</h2>
        <p>Tập hợp bởi những kỹ sư tâm huyết với giáo dục công nghệ.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
          <div>
            <div style={{ width: '80px', height: '80px', background: '#ccc', borderRadius: '50%', margin: '0 auto' }}></div>
            <p><strong>Dev Team</strong></p>
          </div>
          <div>
            <div style={{ width: '80px', height: '80px', background: '#ccc', borderRadius: '50%', margin: '0 auto' }}></div>
            <p><strong>Content Team</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;