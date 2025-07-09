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
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', closeGameAlert);
    gameAlert.addEventListener('click', (event) => {
        if (event.target === gameAlert) {
            closeGameAlert();
        }
    });
}
export function closeGameAlert() {
    const gameAlert = document.getElementById('gameAlert');
    gameAlert.style.display = 'none';
}