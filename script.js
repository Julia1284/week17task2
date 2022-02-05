document.querySelector ('button').addEventListener ('click', function (){
    let message = document.querySelector('#message').value;//получаем textarea
    message = message.replace (/viagra|xxx/gi, '***');//заменяем слова звездочками в всем документе и независимо от регистра
    let commentContainer = document.querySelector ('.container')// получаем контейнер
    let sp = document.createElement ('span');// создаем спан
    let comment = commentContainer.appendChild (sp);// добавляем спан в контейнер
    comment.classList.add ('comment');// добавляем класс
    comment.innerHTML = message + '<hr>';// помещаем сообщение в спан
    document.querySelector ('#message').value = " "// очищаем поле ввода
})