import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const searchFrom=document.querySelector('.submit');
const input=document.getElementById('sal');
const newsList=document.querySelector('.news-list');

searchFrom.addEventListener('click',retrieve)

function retrieve(e){

  e.preventDefault()
  const apiKey='066029d94c0447cfaa68a4ba601b985c'
  let topic=input.value;
  let url=`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

  fetch(url).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data)
    data.articles.forEach(article=>{
      let li= document.createElement('li');
      let a=document.createElement('a');
      a.setAttribute('href',article.url);
      a.setAttribute('target','_blank');
      a.textContent=article.title;
      li.appendChild(a);
      newsList.appendChild(li);
    })
  })
  console.log(topic);
}
