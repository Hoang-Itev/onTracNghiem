function Home() {
  return (
    <>
      <header className="hero">
        <h1>Ôn Thi Trắc Nghiệm Online</h1>
        <p>Luyện tập kiến thức mỗi ngày với kho đề thi đa dạng.</p>
        <button className="btn-start">Bắt đầu thi ngay</button>
      </header>

      <section className="subject-list">
        <h2>Các môn học phổ biến</h2>
        <div className="card-container">
          <div className="subject-card">
            <h3>Lập trình Java</h3>
            <p>40 câu hỏi - 60 phút</p>
            <button>Vào thi</button>
          </div>
          <div className="subject-card">
            <h3>Mạng máy tính</h3>
            <p>30 câu hỏi - 45 phút</p>
            <button>Vào thi</button>
          </div>
          <div className="subject-card">
            <h3>Cơ sở dữ liệu</h3>
            <p>25 câu hỏi - 30 phút</p>
            <button>Vào thi</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;