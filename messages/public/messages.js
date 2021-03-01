const socket = new WebSocket(`ws://${location.hostname}:40001`);
debugger;
document.addEventListener('DOMContentLoaded', () => {

    socket.addEventListener('message', (event) => {
        let messages = [];
        try {
            messages = JSON.parse(event.data);
        }catch(e){
            debugger;
        }
        let ul = document.querySelector('.chat');
        messages.forEach(m => {
            let el = document.createElement('li');
            el.innerText = m;
            ul.appendChild(el);
        });
    });

    let btn = document.querySelector('button');
    btn.addEventListener('click', (event) => {
        let value = document.querySelector('#mytext').value;
        socket.send(value);
    });


});
