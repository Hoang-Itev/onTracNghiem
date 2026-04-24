const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json()); // Để đọc được JSON từ body request

// GET: Lấy danh sách câu hỏi
app.get('/api/questions', async (req, res) => {
  const questions = await prisma.question.findMany();
  res.json(questions);
});

// POST: Thêm câu hỏi mới
app.post('/api/questions', async (req, res) => {
  const newQuestion = await prisma.question.create({
    data: req.body
  });
  res.status(201).json(newQuestion);
});

// PUT: Cập nhật câu hỏi
app.put('/api/questions/:id', async (req, res) => {
  const updatedQuestion = await prisma.question.update({
    where: { id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(updatedQuestion);
});

// DELETE: Xóa câu hỏi
app.delete('/api/questions/:id', async (req, res) => {
  await prisma.question.delete({
    where: { id: parseInt(req.params.id) }
  });
  res.json({ message: 'Đã xóa thành công' });
});

app.listen(5000, () => {
  console.log('Server Backend đang chạy tại http://localhost:5000');
});