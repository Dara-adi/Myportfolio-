function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatBox = document.getElementById("chat-box");

    if (userInput === "") {
        return; // Prevent empty messages
    }

    // Display user's message
    appendMessage(userInput, "user-message");

    // Clear input field
    document.getElementById("user-input").value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage(botResponse, "bot-message");
    }, 500); // Shorter delay for a more dynamic experience
}

function appendMessage(message, className) {
    const chatBox = document.getElementById("chat-box");

    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "how are you?": "I'm doing great, thanks for asking!",
        "what is your name?": "I’m your friendly chatbot!",
        "bye": "Goodbye! Have a great day!"
    };

    return responses[input.toLowerCase()] || "dara is yes i know";
}

// Send message on 'Enter' key press
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
