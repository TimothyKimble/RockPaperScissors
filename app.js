let choices = {
  rock: {
    says: 'Rock',
    img: 'images/Rock.jpg',
    btnClass: 'btn-danger'
  },
  paper: {
    says: 'Paper',
    img: 'images/Paper.jpg',
    btnClass: 'btn-primary'
  },
  Scissors: {
    says: 'Scissors',
    img: 'images/Scissors.jpg',
    btnClass: 'btn-success'
  }
}

function drawCards() {
  let template = ''
  for (let key in choices) {
    let choice = choices[key]
    template += `    <div class="card m-2 box-shadow-dark" style="width: 18rem;">
    <button onclick="pick('${key}')" "computerChoice('${key}')">
      <img class="card-img-top w-100" src="${choice.img}" alt="${choice.says}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${choice.says}</h5>
      </div>
    </button>

  </div>`
  }
  document.getElementById('Cards').innerHTML = template
}

function pick(weapon) {
  let choice = choices[weapon]
  console.log(choice)


  document.getElementById('weapon-choice').innerText = `You Chose ${choice.says}`
  document.getElementById('weapon-img').innerHTML = `        <div class="card m-2 box-shadow-dark " style="width: 25rem; height: 25rem;">
 
    <img class="card-img-top w-100" src="${choice.img}" alt="${choice.says}">
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-center">${choice.says}</h5>
    </div>

</div>`
}

drawCards()

function computerChoice() {
  let choice = Object.keys(choices)
  let randindex = Math.floor(Math.random() * (choice.length))
  pick(choice[randindex])
}