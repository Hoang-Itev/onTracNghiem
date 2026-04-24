import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    content: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: 'A'
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  // 1. GET: Lấy danh sách
  const fetchQuestions = async () => {
    const res = await axios.get('http://localhost:5000/api/questions');
    setQuestions(res.data);
  };

  // 2. POST & PUT: Thêm hoặc Cập nhật
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/api/questions/${editingId}`, formData);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/api/questions', formData);
    }
    setFormData({ content: '', optionA: '', optionB: '', optionC: '', optionD: '', correctAnswer: 'A' });
    fetchQuestions();
  };

  // 3. DELETE: Xóa
  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa câu hỏi này?')) {
      await axios.delete(`http://localhost:5000/api/questions/${id}`);
      fetchQuestions();
    }
  };

  const handleEdit = (q) => {
    setEditingId(q.id);
    setFormData(q);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Quản lý Ngân hàng Câu hỏi</h2>
      
      {/* Form Thêm/Sửa */}
      <form onSubmit={handleSubmit} style={{ background: '#f4f4f4', padding: '1rem', marginBottom: '2rem', borderRadius: '8px' }}>
        <h3>{editingId ? 'Sửa câu hỏi' : 'Thêm câu hỏi mới'}</h3>
        <input style={{ width: '100%', marginBottom: '10px' }} placeholder="Nội dung câu hỏi" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input placeholder="Đáp án A" value={formData.optionA} onChange={e => setFormData({...formData, optionA: e.target.value})} required />
          <input placeholder="Đáp án B" value={formData.optionB} onChange={e => setFormData({...formData, optionB: e.target.value})} required />
          <input placeholder="Đáp án C" value={formData.optionC} onChange={e => setFormData({...formData, optionC: e.target.value})} required />
          <input placeholder="Đáp án D" value={formData.optionD} onChange={e => setFormData({...formData, optionD: e.target.value})} required />
        </div>
        <div style={{ marginTop: '10px' }}>
          Đáp án đúng: 
          <select value={formData.correctAnswer} onChange={e => setFormData({...formData, correctAnswer: e.target.value})}>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option>
          </select>
        </div>
        <button type="submit" style={{ marginTop: '10px', background: '#28a745', color: '#fff', border: 'none', padding: '8px 15px', cursor: 'pointer' }}>
          {editingId ? 'Cập nhật' : 'Lưu câu hỏi'}
        </button>
        {editingId && <button onClick={() => setEditingId(null)} style={{ marginLeft: '10px' }}>Hủy</button>}
      </form>

      {/* Danh sách hiển thị */}
      <h3>Danh sách câu hỏi hiện có</h3>
      {questions.map((q) => (
        <div key={q.id} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <p><strong>{q.content}</strong></p>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>A: {q.optionA} | B: {q.optionB} | C: {q.optionC} | D: {q.optionD}</div>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Đúng: {q.correctAnswer}</p>
          <button onClick={() => handleEdit(q)} style={{ marginRight: '10px', color: 'blue' }}>Sửa</button>
          <button onClick={() => handleDelete(q.id)} style={{ color: 'red' }}>Xóa</button>
        </div>
      ))}
    </div>
  );
}