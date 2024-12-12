const hamburger = document.getElementById('hamburger');
const titlediv = document.getElementById('titlediv');
const newBookButton = document.getElementById('newBookButton');
const smokeBomb = document.getElementById('smokeBomb');
const contentDiv = document.getElementById('contentDiv');
const newBookPopup = document.getElementById('newBookPopup');
const imageButton = document.getElementById('imageButton');
const mangaButton = document.getElementById('mangaButton');
const cancelButton = document.getElementById('cancelButton');
const saveButton = document.getElementById('saveButton');

const mainEmpty = `<div class="mainEmpty"> <p class="quote">“The man who does not read has no advantage over the man who cannot read.”</p> <button class="newBookButtonEmpty" id="newBookButton" style="display:inline-block"> <img class="newBookPlusEmpty" src="assets/Plus.png"> <p class="newBookTextEmpty">New Book</p> </button> </div>`;

const title = "haha";
const chapter = "420";
const source = "https://cdn.discordapp.com/attachments/1297993131714674758/1311903296063012955/465620225_8664012096967377_3289167414939794449_n.png?ex=675bb027&is=675a5ea7&hm=42fa2036fcf69814ffa41d5bf709930b25f9ae0b09cf26df7af23f02d5ae5bbf&";
const link = "https://mangadex.org/chapter/c6d3925f-4f24-4339-878f-f5f460b665ba/1"
const mainFull = '<div id="mainFull"></div>';
const book = `<a href="${link}" target="_blank" class="book"><p class="title">${title}</p><p class="chapter">chapter ${chapter}</p><img class="image" src="${source}"></a>`;

contentDiv.innerHTML += mainFull;



const mainFullNode = document.getElementById('mainFull');
for (let i=0; i<4*10; i++) {
    mainFullNode.innerHTML += book;
}

newBookButton.addEventListener("click", bookButtonClicked)
function bookButtonClicked(){
    newBookPopup.classList.toggle("show")
    requestAnimationFrame(() => {
        let reflow = newBookPopup.offsetHeight;
        console.log(newBookPopup.classList)
    })

    let reflow = newBookPopup.offsetHeight;
    console.log(reflow)
}
