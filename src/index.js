const messages = [
    "Oscar",
    "Ana",
    "Nicolas",
    "Carlos",
    "Paulina"
    ];

const randomMsg =() => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};
