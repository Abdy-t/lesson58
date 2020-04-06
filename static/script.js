'use strict';
let user = new Object();
user.id = 1;
user.name = "something name";
user.password = "something password";
user.authorization = false; /* идентификатор авторизации пользователя */

let publish = new Object();
publish.id = 1;
publish.userId = 1; /* поле для хранения связи пользователя (передаем поле id объекта user) с публикацией */
publish.title = "something title";
publish.imageURL = "http://placekitten.com/500/500";
publish.description = "something description";
publish.like = false;

// let comment = new Object();
// comment.id = 1;
// comment.text = "something text";
// comment.publishId = 1;/* поле для хранения связи публикации (передаем поле id объекта publish) с комментарием */
// comment.userId = 1; /* поле для хранения связи пользователя (передаем поле id объекта user) с комментарием */
let comment = {
    id : 1,
    text : "something text",
    publishId : 1,
    userId : 1
};
let publishes = [];

function addPublish(publish) {
    publishes.push(publish);
}

function changeAuthorizationStatus(user) {
    if(user.authorization === false){
        user.authorization = true;
    }
    else {
        user.authorization = false;
    }
}

function changePublishLike(publishes, idPublish) {
    for (const i in publishes){
        if (publishes[i].id === idPublish) {
            if(publishes[i].like === false){
                publishes[i].like = true;
            } else {
                publishes[i].like = false;
            }
        }
    }
}

function splashScreenHiddenTrue(){
    document.getElementById('page-splash').hidden = true;
    document.body.classList.remove('no-scroll');
}

function splashScreenHiddenFalse(){
    document.getElementById('page-splash').hidden = false;
    document.body.classList.add('no-scroll');
}
let commentElement = createCommentElement(comment);

function addComment(element) {
    document.getElementsByClassName('comment-block')[0].prepend(element);
}
function createCommentElement(comment) {
    let name = "User";
    if (comment.text == undefined || comment.text.trim().length == 0) {
        return;
    }
    let element = document.createElement('div');
    let att = document.createAttribute("class");
    att.value = "py-2 pl-3";
    element.setAttributeNode(att);
    element.classList.add('new-comment');
    element.innerHTML = `<a href="#" class="muted">${user.name}</a> <p> ${comment.text} </p>`;
    return element;
}

let postElement = createPostElement(publish);

function addPostElement(elem) {
    document.getElementsByClassName('col col-lg-7 posts-container')[0].prepend(elem);
}

function createPostElement(publish) {
    let element = document.createElement(`div`);
    element.innerHTML = `
          <!-- image block start -->
          <div>
             <img class="d-block w-100" src="${publish.imageURL}" alt="Post image">
          </div>
          <!-- image block end -->
          <div class="px-4 py-3">
            <!-- post reactions block start -->
            <div class="d-flex justify-content-around">
              <span class="h1 mx-2 text-danger">
                <i class="fas fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-comment"></i>
              </span>
              <span class="mx-auto"></span>
              <span class="h1 mx-2 muted">
                <i class="far fa-bookmark"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="fas fa-bookmark"></i>
              </span>
            </div>
            <!-- post reactions block end -->
            <hr>
            <!-- post section start -->
            <div>
                <p>${publish.description}</p>
              </div>
            <!-- post section end -->
            <hr>
            <!-- comments section start -->
            <div class="comment-block">
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
              <button class='comment-button' onclick="addComment(commentElement)">Add comment</button>
            </div>
            <!-- comments section end -->
          </div>`;
    let att = document.createAttribute("class");
    att.value = "card my-3";
    element.setAttributeNode(att);
    return element;
}

