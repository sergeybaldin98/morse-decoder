const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr){
    let arr = [];
    let brr = [];
    let crr = [];
    let count = 0;
    for (let i = 0; i < expr.length; i++){
        arr.push(expr[i]);
        count++;
        if (count == 10 || i == expr.length - 1){
            brr.push(arr.join(''));
            arr = [];
            count = 0;
        }
    }
    for (let i = 0; i < brr.length; i++){
        if(brr[i].length == 10){
            crr.push(morse(brr[i]));
        }else if(brr[i].length < 10){
            crr.push(morse('0'.repeat(10 - brr[i].length) + brr[i]));
        }
    }
    let string = '';
    for (let i = 0 ; i < crr.length; i++){
        for(let key in MORSE_TABLE){
            if(crr[i] == key){
                string += MORSE_TABLE[key];
            }
        }
    }
    return string;
}

function morse(str){
    if (str == '**********') return ' ';
    let arr = [];
    let brr = [];
    let res = '';
    let count = 0;
    for (let i = 0; i < str.length; i++){
        arr.push(str[i]);
        count++;
        if (count == 2){
            let s = arr.join('');
            if (s == '00'){
                res += '';
            }else if (s == '10'){
                res += '.';
            }else{
                res += '-';
            }
            brr.push(res);
            res = '';
            count = 0;
            arr = [];
        }
    }
    return brr.join('');
}

module.exports = {
    decode
}