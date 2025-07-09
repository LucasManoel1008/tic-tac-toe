export function getRow(index) {
    return Math.floor(index / 3);
}

export function getCol(index) {
    return index % 3;
}

export function gameAlert(messageTitle, messageContent) {
    const gameAlert = document.getElementById('gameAlert');
    const messageTitleElement = document.getElementById('messageTitle');
    const messageContentElement = document.getElementById('messageContent');
    messageTitleElement.textContent = messageTitle;
    messageContentElement.textContent = messageContent;
    gameAlert.style.display = 'block';
    setTimeout(() => {
        gameAlert.style.animation = 'fadeOutMessage 1s ease-in-out';
    }, 3000);
    setTimeout(() => {
        gameAlert.style.display = 'none';
        gameAlert.style.animation = '';
    }, 4000);
}