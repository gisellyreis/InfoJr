// ESTADO INICIAL DA FILA
var queue  = [
  {
    name: "Antonio figueiredo",
    amount: 3,
  },
  {
    name: "Maria Carolina",
    amount: 1,
  },
  {
    name: "Jão Vitor",
    amount: 2,
  },
  {
    name: "Andressa Silva",
    amount: 27,
  },
  
];

const button = document.getElementById('button');

let i;
let fila = document.getElementById('fila');
let div, strong, p, text;

enQueue();

// RETIRA PRIMEIRO ELEMENTO DA FILA 
let inter = setInterval(aFilaAnda, 10000)

function aFilaAnda() {
  if(queue.length === 0) {
    clearInterval(inter);
  }
  queue.shift()
  enQueue();
}

// ADICIONA PEDIDO NA FILA
button.addEventListener('click', function() {
  let client = {
    name: '',
    amount: 0,
  }
  client.name = document.getElementById('name').value;
  client.amount = Number(document.getElementById('amount').value);
  
  queue.push(client);
  document.getElementById('name').value = '';
  document.getElementById('amount').value = '';
  
  console.log(client.amount)
  enjuriamento(client.amount);
  enQueue();
})
//console.log(queue)

// VERIFICA SE A QUANTIDADE É 71, SE SIM RETIRA 
// OS PEDIDOS DE QUANTIDADE PAR
function enjuriamento(number) {
  if(number === 71) {
    for(i = 0; i< queue.length ; i++) {
      if((queue[i].amount % 2) === 0) {
        queue.splice(i, 1);
      }
    }
  }
}

// MOSTRA OS ELEMENTOS DA FILA NA TELA
function enQueue() {
  let t = queue.length;
  let divTmp = document.getElementById('fila')
  divTmp.innerHTML = '';
  //console.log(queue)
  
  for(i = 0; i< t ; i++) {
    div = document.createElement('div');
    div.classList.add(i);
    strong = document.createElement('strong');
    strong.classList.add(i);
    text = document.createTextNode(queue[i].name)
    strong.appendChild(text);
    p = document.createElement('p');
    p.classList.add(i);
    text = document.createTextNode('Quantidade: '+ queue[i].amount);
    p.appendChild(text);
    
    
    fila.appendChild(div);
    div.appendChild(strong);
    div.appendChild(p);
  }
}