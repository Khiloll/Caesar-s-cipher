document.getElementById('in').oninput = function () {
    // шифруем
    const offset = 3; // ключ шифра

    // из кода в шифр 
    let str = this.value;
    let out = '';

    // из символа в код
    for (let i = 0; i < str.length; i++) { 
        let code = str.charCodeAt(i); 
        code = code + offset; 
        out += String.fromCharCode(code); 
    }

    document.getElementById('out').innerHTML = out;
}

document.getElementById("in-cipher").oninput = function () {
    const offset = 3; // ключ расшифровки
    let str = this.value;
    let out = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code  - offset;
        out  += String.fromCharCode(code);
}
document.getElementById('text-out').innerHTML = out;
}