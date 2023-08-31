// Progression 1: Add 2 methods - addTitle(), and addDescription()
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        console.log(title_card)
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    addDescription() {
        var description_paragraph = document.createElement('p');
        description_paragraph.setAttribute("id", "blog-description");
        console.log(description_paragraph)
        document.getElementById('card-text').appendChild(description_paragraph);
        description_paragraph.innerHTML += this.detail;
    }
}
  


// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
    document.getElementById('popupContact').style.display = 'block';
}


function helperPost() {
    var enteredTitle = document.getElementById('title').value;
    var enteredDetail = document.getElementById('detail').value;
    newBlog = new Blog(enteredTitle, enteredDetail)
    newBlog.addTitle();
    newBlog.addDescription();
    document.getElementById('popupContact').style.display = 'none';
}
