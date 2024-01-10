// Récupérer les éléments du chat

var chatButton = document.getElementById('chatButton');
var chatBox = document.getElementById('chatBox');
var closeChat = document.getElementById('closeChat');
var messageInput = document.getElementById('messageInput');
var sendMessageButton = document.getElementById('sendMessage');
var chatMessages = document.getElementById('chatMessages');

// Afficher ou masquer la fenêtre de chat
chatButton.addEventListener('click', toggleChat);
closeChat.addEventListener('click', toggleChat);

function toggleChat() {
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

// Envoyer un message
sendMessageButton.addEventListener('click', sendMessage);

function sendMessage() {
    var message = messageInput.value.trim();
    if (message !== '') {
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
    }
}

console.log("Hello, world!");
