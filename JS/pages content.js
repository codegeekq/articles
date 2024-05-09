import { articlesArray } from '../API.js'
let index = document.getElementById('index').innerHTML;
let category = document.getElementById('category');
let langName = document.getElementById('langName');
let lessonNumer = document.getElementById('lessonNumer');
let articleName = document.getElementById('articleName');
let article = document.getElementById('article');
let articleImage = document.querySelector('.content-img');
let roadMap = document.getElementById('roadMap')
category.innerHTML = articlesArray[index].category;
langName.innerHTML = articlesArray[index].langName;
lessonNumer.innerHTML = articlesArray[index].lessonNumer;
articleName.innerHTML = articlesArray[index].articleName;
article.innerHTML = articlesArray[index].article;
articleImage.src = articlesArray[index].articleImag;
roadMap.innerHTML = articlesArray[index].roadMap;


let translate = document.getElementById('translate')
translate.onclick = () => {
    article.innerHTML = articlesArray[index].arArticle;
}

translate.ondblclick = () => {
    article.innerHTML = articlesArray[index].article;
}

