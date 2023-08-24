const wordToHex = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#FF00FF",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightgreen: "#90EE90",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#FF0000",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FFFF00",
    yellowgreen: "#9ACD32",
};

const hexToWord = Object.fromEntries(Object.entries(wordToHex).map(([k, v]) => [v, k]));

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
        else if (userMessageLower.includes("multiplication table of")){ 
            var table_no = parseInt(userMessageLower.match(/\d+/)[0]);
            botResponse = ''; 
            for (let i = 1; i <= 10; i++){
                botResponse += ("<br>"+i + " * " + table_no + " = " + (table_no * i) );
            }
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
            countUniqueColors(e.target.result);
            imageInput.value = ''; // Reset the input value
        }
        reader.readAsDataURL(file);
    }
}

// Function to send the image
function sendImage() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            chatLog.innerHTML += `<div>User: <img src="${e.target.result}" class="chat-image"></div>`;
            countUniqueColorNames(e.target.result);
            imageInput.value = ''; // Reset the input value
        }
        reader.readAsDataURL(file);
    }
}

// Function to determine closest named color from HEX
function closestNamedColorFromHex(hex) {
    let minDistance = Infinity;
    let closestColorHex = 'unknown';

    for (const name in wordToHex) {
        const namedHex = wordToHex[name];
        const [nr, ng, nb] = hexToRgb(namedHex);
        const [r, g, b] = hexToRgb(hex);
        const distance = Math.sqrt((r - nr)**2 + (g - ng)**2 + (b - nb)**2);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestColorHex = namedHex;
        }
    }

    return hexToWord[closestColorHex];
}

function countUniqueColorNames(imgSrc) {
    const img = new Image();
    img.src = imgSrc;

    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const colorNames = new Set();

        for (let i = 0; i < imageData.length; i += 4) {
            const r = imageData[i];
            const g = imageData[i + 1];
            const b = imageData[i + 2];
            const hexValue = rgbToHex(r, g, b);
            const name = closestNamedColorFromHex(hexValue);
            colorNames.add(name);
        }

        // chatLog.innerHTML += `<div>Bot: The image contains these colors: ${Array.from(colorNames).join(', ')}</div>`;
        let colorDescription;
                switch (colorNames.size) {
                    case 1:
                        colorDescription = "Monochrome";
                        break;
                    case 2:
                        colorDescription = "Bicolor";
                        break;
                    case 3:
                        colorDescription = "Tricolor";
                        break;
                    default:
                        colorDescription = "Multicolor";
                        break;
                }

                chatLog.innerHTML += `<div>Bot: This is a ${colorDescription} image.</div>`;
        
    };
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
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


const colorInput = document.getElementById('color-input');
const submitColorBtn = document.getElementById('submit-color');

submitColorBtn.addEventListener('click', function() {
    const chosenColor = colorInput.value; 
    chatLog.innerHTML += `<div>Bot: You chose the color ${chosenColor}</div>`;
});