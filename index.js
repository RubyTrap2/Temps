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
const txtboxName = document.getElementById('txtboxName');
const txtboxLink = document.getElementById('txtboxLink');
const imageInput = document.getElementById('imageInput');

const mainEmpty = `<div class="mainEmpty"> <p class="quote">“The man who does not read has no advantage over the man who cannot read.”</p> <button class="newBookButtonEmpty" id="newBookButton" style="display:inline-block"> <img class="newBookPlusEmpty" src="assets/Plus.png"> <p class="newBookTextEmpty">New Book</p> </button> </div>`;



const mainFull = document.createElement("div");
contentDiv.append(mainFull);
mainFull.setAttribute("id", "mainFull");

const mainFullNode = document.getElementById('mainFull');
cancelButton.addEventListener("click", cancel)
function cancel(){
    txtboxName.value = "";
    txtboxLink.value = "";
    bookButtonClicked();
}

saveButton.addEventListener("click", save)
function save(){    
    console.log(imageInput.value)
    const title = txtboxName.value;
    const chapter = 0;
    const source = imageInput.value;
    const linkPlaceholder = txtboxLink.value;
    const book = `<a href="${linkPlaceholder}" target="_blank" class="book"><p class="title">${title}</p><p class="chapter">chapter ${chapter}</p><img class="image" src="${source}"></a>`;
    mainFullNode.innerHTML += book;
    bookButtonClicked()
}

newBookButton.addEventListener("click", bookButtonClicked)
function bookButtonClicked(){
    newBookPopup.classList.toggle("show");
    smokeBomb.classList.toggle("show");
}
