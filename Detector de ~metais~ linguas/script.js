
const send = document.querySelector('button');
var text = '';

send.addEventListener('click', async function() {
  text = document.getElementById('text').value;
  console.log(text);
  var data;
  document.getElementById('text').value = 'Pesquisando ...';
  await fetch(
    `http://api.languagelayer.com/detect?access_key=874cba772deae01f3ae67d82a2d3575d&query=${text}`)
    .then((res) => res.json())
    .then((res) => {
      data = res;
      const msg = `This is the request response for:${text}`;
      console.log(msg);
      console.log(res);
    });
    document.getElementById('text').value = '';
    teste(text, data.results[0].language_name);
})

let div = document.getElementById('content');
let nDiv = document.createElement('div');
let strong = document.createElement('strong');
let p = document.createElement('p');
let pMsg;

function teste(inputText, language) {
  nDiv = document.createElement('div');
  div.appendChild(nDiv);
  nDiv.classList.add('show')
  strong = document.createElement('strong');
  p = document.createElement('p');
  nDiv.appendChild(strong);
  nDiv.appendChild(p);
  pMsg = document.createTextNode(inputText);
  strong.appendChild(pMsg);
  pMsg =  document.createTextNode(language);
  p.appendChild(pMsg)
}