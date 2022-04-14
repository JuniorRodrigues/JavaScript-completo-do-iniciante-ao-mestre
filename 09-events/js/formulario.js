// (()=>{
    'use strict';

    const form                = document.getElementById('shopping-add');
    const btn                 = document.getElementById('btn');
    const titulo              = document.getElementById('txtTitulo');
    const txtDescription      = document.getElementById('txtDescricao');
    const elContainerCounter  = document.getElementById('contador');
    const elCounter           = elContainerCounter.querySelector('span');
    const charLimit           = txtDescription.maxLength;
    const fbkMessage          = document.getElementById('feedbackMessage');
    const chkAceito           = document.getElementById('chkAceito');
    const fbkClose            = fbkMessage.getElementsByTagName('button')[0];

    const setCounter = function (numChars) {
        elCounter.textContent = numChars;
    }

    const showMessage = function (message, cb) {
        fbkMessage.classList.add('show');
        fbkClose.focus();
        const fbkContent = fbkMessage.getElementsByTagName('p')[0];
        fbkContent.textContent = message;

        const closeMessage = function () {
            fbkMessage.classList.remove('show');
            // quando for utilizado onclick=
            // fbkClose.onclick = null;
            document.removeEventListener('click', closeMessage);
            document.removeEventListener('keyup', pressedKeyboardOnBtn);

            if (typeof cb === 'function') cb();
        }

        const pressedKeyboardOnBtn = function (e) {
            if (e.keyCode !== 27) return;
            closeMessage();
        }

        fbkClose.addEventListener('click', closeMessage);
        fbkClose.addEventListener('keyup', pressedKeyboardOnBtn);
    }

    const inputFocus = function () {
        titulo.focus();
    }

    const updateLength = function () {
        elContainerCounter.style.display = txtDescription.value ? 'block' : 'none';
        const writtenChars  = this.value.length;
        const restChars     = charLimit - writtenChars;

        if (restChars < 0) return false;
        setCounter(restChars);
    }

    const validaForm = function (e) {
        if (!titulo.value) {
            e.preventDefault();
            showMessage('Preencha todos os campos', inputFocus);
        }
    };

    btn.disabled = !btn.disabled;
    setCounter(charLimit);

    chkAceito.onchange = e => btn.disabled = !e.currentTarget.checked;
    txtDescription.oninput = updateLength;
    form.onsubmit = validaForm;
// })();
