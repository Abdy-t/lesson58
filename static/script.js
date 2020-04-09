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

function addComment(){
    document.getElementById("comments").insertAdjacentElement("afterend", createCommentElement(comment));
}
function createCommentElement(comment){
    let content = '<a href="#" class="muted">' + user.name + '</a>' + '<p>'+ comment.text + '</p>';
    let element = document.createElement('div');
    element.innerHTML = content;
    element.className = "py-2 pl-3";
    return element;
}

function addPostElement() {
    document.getElementsByClassName('col col-lg-7 posts-container')[0].prepend(createPostElement(publish));
}
function createPostElement(publish) {
    let element = document.createElement(`div`);
    element.innerHTML = `
          <!-- image block start -->
          <div>
             <img class="d-block w-100 img" src="${publish.imageURL}" alt="Post image">
          </div>
          <!-- image block end -->
          <div class="px-4 py-3">
            <!-- post reactions block start -->
            <div class="d-flex justify-content-around">
              <span class="h1 mx-2 muted" id="dbl-like">
                <i class="far fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted" id="like-1">
                <i class="far fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-comment"></i>
              </span>
              <span class="mx-auto"></span>
              <span class="h1 mx-2 muted" id="bookmark-1">
                <i class="far fa-bookmark"></i>
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
            <div class="comment-block" id="comments">
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
    att.value = "card my-3 img";
    element.setAttributeNode(att);
    return element;
}
window.addEventListener('load', function () {
    // h1 mx-2 muted
    let l = 0;
    let like = document.getElementById('like-1');
    like.addEventListener('click', function (event) {
        if (l === 0) {
            event.currentTarget.innerHTML = "<span class=\"h1 mx-2 text-danger\">\n" +
                "\n" +
                "  <i class=\"fas fa-heart\"></i>\n" +
                "\n" +
                "</span>";
            l = 1;
        } else {
            event.currentTarget.innerHTML = "<span class=\"h1 mx-2 muted\">\n" +
                "\n" +
                "  <i class=\"far fa-heart\"></i>\n" +
                "\n" +
                "</span>";
            l = 0;
        }
        console.log('like clicked');
    });
    let dblLike = document.getElementById('dbl-like');
    dblLike.addEventListener('dblclick', function (event) {
        let something = dblLike.children[0];
        something.classList.add("text-danger","fas");
        setTimeout( function(){
            something.classList.remove("text-danger","fas");
            console.log('wait');
        }, 500 );
        console.log('double like clicked');
    });
    let b = 0;
    const bookmark = document.getElementsByClassName('bookmark');
    for (let i = 0; i < bookmark.length; i ++) {
        bookmark[i].addEventListener('click', function (event) {
            if (b === 0) {
                event.currentTarget.innerHTML = "<span class=\"h1 mx-2 muted\">\n" +
                    "\n" +
                    "  <i class=\"far fa-bookmark\"></i>\n" +
                    "\n" +
                    "</span>";
                b = 1;
            } else {
                event.currentTarget.innerHTML = "<span class=\"h1 mx-2 muted\">\n" +
                    "\n" +
                    "  <i class=\"fas fa-bookmark\"></i>\n" +
                    "\n" +
                    "</span>";
                b = 0;
            }
            console.log('bookmark clicked');
        });
    }
});

