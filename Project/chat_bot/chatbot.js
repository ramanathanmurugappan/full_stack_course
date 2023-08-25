const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const imageInput = document.getElementById('image-input');
const triggerFileBtn = document.getElementById('trigger-file');
const colorInput = document.getElementById('color-input');
const submitColorBtn = document.getElementById('submit-color');
const toggleChatBtn = document.getElementById('toggle-chat');

function handleUserText(event) {
    if (event.key !== 'Enter') return;

    const userMessage = userInput.value.trim().toLowerCase();

    chatLog.innerHTML += `<div>User: ${userMessage}</div>`;
    chatLog.innerHTML += `<div>Bot: ${generateBotResponse(userMessage)}</div>`;

    userInput.value = '';
}

function generateBotResponse(message) {
    if (message === 'hi') return 'Hello, this is a bot speaking...';
    if (message === 'how are you') return 'Well, thank you. I am great.';
    if (message === 'what can you do') return 'Nothing...';
    if (message === 'bye') return 'Bye, have a nice day';
    if (message.includes("multiplication table of")) {
        const table_no = parseInt(message.match(/\d+/)[0]);
        let response = '';
        for (let i = 1; i <= 10; i++) {
            response += `<br>${i} * ${table_no} = ${table_no * i}`;
        }
        return response;
    }
    return 'Sorry not in my scope';
}

function handleImageUpload() {
    const file = imageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        chatLog.innerHTML += `<div>User: <img src="${e.target.result}" class="chat-image"></div>`;
        determineImageColor(e.target.result);
    };
    reader.readAsDataURL(file);
}

function determineImageColor(imgData) {
    const image = new Image();
    image.src = imgData;

    image.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const uniqueColors = new Set();

        for (let i = 0; i < imageData.length; i += 4) {
            const colorString = `${imageData[i]},${imageData[i+1]},${imageData[i+2]}`;
            uniqueColors.add(colorString);
            if (uniqueColors.size > 3) break;
        }

        const colorDescriptions = ["", "Monochrome", "Bicolor", "Tricolor", "Multicolor"];
        const colorDescription = colorDescriptions[uniqueColors.size];
        
        chatLog.innerHTML += `<div>Bot: This is a ${colorDescription} image.</div>`;
    };
}

function handleColorSubmission() {
    const chosenColor = colorInput.value; 
    chatLog.innerHTML += `<div>User: ${chosenColor}</div>`;
    chatLog.innerHTML += `<div>Bot: You chose the color ${chosenColor}</div>`;
}

function toggleChat() {
    const chatBox = document.getElementById('chat-container');
    if (chatBox.style.transform === 'translateY(90%)' || chatBox.style.transform === "") {
        chatBox.style.transform = 'translateY(0%)';
        toggleChatBtn.innerHTML = 'v';
    } else {
        chatBox.style.transform = 'translateY(90%)';
        toggleChatBtn.innerHTML = '^';
    }
}

userInput.addEventListener('keydown', handleUserText);
triggerFileBtn.addEventListener('click', () => imageInput.click());
imageInput.addEventListener('change', handleImageUpload);
submitColorBtn.addEventListener('click', handleColorSubmission);
toggleChatBtn.addEventListener('click', toggleChat);
