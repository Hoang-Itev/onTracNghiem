const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Đang bắt đầu tạo dữ liệu mẫu...');

  // Xóa dữ liệu cũ (nếu muốn làm sạch database trước khi seed)
  // await prisma.question.deleteMany();

  // Tạo nhiều câu hỏi cùng lúc
  await prisma.question.createMany({
    data: [
      {
        content: 'ReactJS là gì?',
        optionA: 'Một ngôn ngữ lập trình',
        optionB: 'Một thư viện JavaScript',
        optionC: 'Một hệ quản trị cơ sở dữ liệu',
        optionD: 'Một hệ điều hành',
        correctAnswer: 'B'
      },
      {
        content: 'Node.js dùng để làm gì?',
        optionA: 'Thiết kế giao diện',
        optionB: 'Chạy JavaScript ở Backend',
        optionC: 'Truy vấn database',
        optionD: 'Tạo hiệu ứng ảnh',
        correctAnswer: 'B'
      },
      {
        content: 'Lệnh nào dùng để khởi tạo package.json?',
        optionA: 'npm start',
        optionB: 'npm install',
        optionC: 'npm init',
        optionD: 'npm run dev',
        correctAnswer: 'C'
      }
    ]
  });

  console.log('Thêm dữ liệu mẫu thành công!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });