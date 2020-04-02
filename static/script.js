'use strict';
let user = new Object();
user.id;
user.name = "something text";
user.password = "something password";
user.authorization = false; /* идентификатор авторизации пользователя */

let publish = new Object();
publish.id;
publish.userId = "user id"; /* поле для хранения связи пользователя (передаем поле id объекта user) с публикацией */
publish.title = "something text";
publish.description = "something text";
publish.dateTime;
publish.like = true;

let comment = new Object();
comment.id;
comment.text = "something text";
comment.publishId = "publish id";/* поле для хранения связи публикации (передаем поле id объекта publish) с комментарием */
comment.userId = "user id"; /* поле для хранения связи пользователя (передаем поле id объекта user) с комментарием */

let publishes = [publish, publish];

function addPublish(publish, publishes) {
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
