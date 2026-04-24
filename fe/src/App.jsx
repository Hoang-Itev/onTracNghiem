import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz'; // Đã sửa tên biến từ About thành Quiz

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Đã thêm đường dẫn hiển thị cho trang bài test */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;