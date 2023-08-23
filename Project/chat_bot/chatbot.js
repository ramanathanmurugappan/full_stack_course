const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const imageInput = document.getElementById('image-input');
const triggerFileBtn = document.getElementById('trigger-file');

// Text input handling
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const userMessage = userInput.value.trim();
        const userMessageLower = userMessage.toLowerCase();

        chatLog.innerHTML += `<div>User: ${userMessage}</div>`;

        let botResponse = 'Sorry not in my scope';
        if (userMessageLower === 'hi') {
            botResponse = 'Hello, this is a bot speaking...';
        } else if (userMessageLower === 'how are you') {
            botResponse = 'Well, thank you. I am great.';
        } else if (userMessageLower === 'what can you do') {
            botResponse = 'Nothing...';
        } else if (userMessageLower === 'bye') {
            botResponse = 'Bye, have a nice day';
        }

        chatLog.innerHTML += `<div>Bot: ${botResponse}</div>`;
        userInput.value = '';
    }
});

// Function to send the image
function sendImage() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            chatLog.innerHTML += `<div>User: <img src="${e.target.result}" class="chat-image"></div>`;
            chatLog.innerHTML += `<div>Bot: This is the image you have uploaded</div>`;
            imageInput.value = ''; // Reset the input value
        }
        reader.readAsDataURL(file);
    }
}

// Triggering the file input and sending the image immediately after selecting
triggerFileBtn.addEventListener('click', function() {
    imageInput.click(); // Open the file picker
});

imageInput.addEventListener('change', function() {
    if (imageInput.files[0]) {
        sendImage();
    }
});
