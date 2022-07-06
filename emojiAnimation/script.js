const emoji = document.getElementById('emoji');
let emojiArray = ['🌑', '🌒', '🌔', '🌕', '🌖', '🌗', '🌘'];

function loop(i) {
    let emojiLength = emojiArray.length;

    if (i == emojiLength) { i = 0 };

    setTimeout(() => {
        i++;
        i--;
        loop(i);
    }, 300);

    if (i != emojiLength) {i = 0};

    emoji.innerHTML = emojiArray[i];
};

loop(0);
loop(3);
