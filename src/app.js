// Progression 1: Add 2 methods - addTitle(), and addDescription()
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML = this.title;
    }

    addDescription() {
        var description_paragraph = document.createElement('p');
        description_paragraph.textContent = this.detail;
        document.getElementById('card-text').appendChild(description_paragraph);
    }
}
  


// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
    var popupFrame = document.getElementById('popup-frame');
    popupFrame.style.display = 'block';
}


function helperPost() {
    var enteredTitle = document.getElementById('title-input').value;
    var enteredDetail = document.getElementById('detail-input').value;
    newBlog.addTitle();
    newBlog.addDescription();
}
