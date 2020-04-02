'use strict';
let user = new Object();
user.id = 1;
user.name = "something text";
user.password = "something password";
user.authorization = false; /* идентификатор авторизации пользователя */

console.log(user);

let publish = new Object();
publish.id = 1;
publish.userId = 1; /* поле для хранения связи пользователя (передаем поле id объекта user) с публикацией */
publish.title = "something text";
publish.description = "something text";
publish.like = false;

console.log(publish);


let comment = new Object();
comment.id = 1;
comment.text = "something text";
comment.publishId = 1;/* поле для хранения связи публикации (передаем поле id объекта publish) с комментарием */
comment.userId = 1; /* поле для хранения связи пользователя (передаем поле id объекта user) с комментарием */

console.log(comment);


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


