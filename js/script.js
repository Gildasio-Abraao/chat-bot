var form = document.querySelector('#form');
var userMsg = document.querySelector('#send-message');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var chatBox = document.querySelector('.chat-box');
    var msg = document.createElement('div');
    msg.classList.add('user', 'message');
    msg.innerText = userMsg.value;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
    userMsg.value = '';
})

function botTeste() {
    var msg = document.createElement('div');
    var chatBox = document.querySelector('.chat-box');
    var userName = document.querySelector('.user-name');

    msg.classList.add('bot', 'message');
    msg.innerText = `Olá ${userName.value}, tudo bem?`;
    chatBox.appendChild(msg);
}

setTimeout(function(){
    botTeste()
}, 10000)