// Script để lấy chatID từ Telegram Bot
// Chạy: node get_chat_id.js

const BOT_TOKEN = '8477917299:AAEUmLezZvIt5fTJPbH2NENxnlDz70APfcU';

async function getChatId() {
  try {
    console.log('🔄 Đang lấy updates từ Telegram...');

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`
    );
    const data = await response.json();

    if (data.ok && data.result.length > 0) {
      console.log('\n📋 Danh sách chats:\n');

      data.result.forEach((update, index) => {
        if (update.message) {
          const chat = update.message.chat;
          console.log(`${index + 1}. ChatID: ${chat.id}`);
          console.log(`   Tên: ${chat.title || chat.first_name}`);
          console.log(`   Loại: ${chat.type}`);
          console.log('   ---');
        }
        if (update.my_chat_member) {
          const chat = update.my_chat_member.chat;
          console.log(`${index + 1}. ChatID: ${chat.id}`);
          console.log(`   Tên: ${chat.title || chat.first_name}`);
          console.log(`   Loại: ${chat.type} (bot vừa được thêm/xóa)`);
          console.log('   ---');
        }
      });

      console.log('\n✅ Hoàn thành! Copy ChatID bạn cần.');
    } else {
      console.log('❌ Không có updates. Hãy:');
      console.log('   1. Thêm bot vào nhóm cần lấy ID');
      console.log('   2. Gửi 1 tin nhắn trong nhóm');
      console.log('   3. Chạy lại script này');
    }
  } catch (error) {
    console.error('❌ Lỗi:', error.message);
  }
}

getChatId();
