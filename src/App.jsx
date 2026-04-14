import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
// import Library from './pages/Library';
// import History from './pages/History';

import './App.css';

function App() {
  return (
    // BrowserRouter bọc toàn bộ ứng dụng để bật tính năng routing
    <BrowserRouter>
      <div className="quiz-app">
        {/* Navbar đặt ngoài Routes để luôn hiển thị ở mọi trang */}
        <Navbar />

        <main className="main-content">
          {/* Routes sẽ quyết định render Component nào dựa trên URL */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            
            {/* Bạn có thể tạo thêm các trang này và mở comment */}
            {/* <Route path="/library" element={<Library />} /> */}
            {/* <Route path="/history" element={<History />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;