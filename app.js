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
    <button onclick="pick('${key}') , computerSelect('${key}')">
      <img class="card-img-top w-100" src="${choice.img}" alt="${choice.says}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${choice.says}</h5>
      </div>
    </button>

  </div>`
  }
  document.getElementById('Cards').innerHTML = template
}

function drawcomputercard() {
  let template = ''
  for (let key in choices) {
    let choice = choices[key]
    template += `    <div class="card m-2 box-shadow-dark" style="width: 18rem;">
    <button onclick="computerSelect('${key}')">
      <img class="card-img-top w-100" src="${choice.img}" alt="${choice.says}">
      <div class="card-body">
        <h5 class="card-title d-flex justify-content-center">${choice.says}</h5>
      </div>
    </button>

  </div>`
  }
  document.getElementById('computer-img').innerHTML = template + Math.random()
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
  let choice = choices[Math.floor(Math.random() * choices.length)]
  console.log('computer', choice)
  return choice



}

function play(player, comp) {
  let battle = choices[player]
  console.log(battle)
  if (player == comp) {
    return 'You tied'
  } else if (battle[0] == comp) {
    computerscore++
    return 'You lost'
  }
  playerscore++
  return "Winner"
}

function computerSelect(compweapon) {
  let compchoice = choices[compweapon]
  console.log(compchoice)


  document.getElementById('computer-weapon').innerText = `Computer Choice ${compchoice.says}`

  document.getElementById('computer-img').innerHTML = `<div class="card m-2 box-shadow-dark " style="width: 25rem; height: 25rem;">
 
 <img class="card-img-top w-100" src="${compchoice.img}" alt="${compchoice.says}">
 <div class="card-body">
   <h5 class="card-title d-flex justify-content-center">${compchoice.says}</h5>
 </div>

</div>`
}