//update
const $btn = document.querySelector('#btn-kick');
console.log($btn);

const character = {
  name: 'Pikachu',
  defaultHp: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-character'),
  elProgressbar: document.querySelector('#progressbar-character'),
};

const enemy = {
  name: 'Charmander',
  defaultHp: 100,
  damageHP: 100,
  elHP: document.querySelector('#health-enemy'),
  elProgressbar: document.querySelector('#progressbar-enemy'),
};

$btn.addEventListener('click', function () {
  console.log('Kick');
  changeHP(random(10), character);
  changeHP(random(10), enemy);
});

function init() {
  console.log('Start Game!');
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHpLife(person);
  renderProgressbarHP(person);
}

function renderHpLife(person) {
  person.elHP.innerText = person.damageHP + '/' + person.defaultHp;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедный ' + person.name + ' проиграл');
    $btn.disabled = true;
  } else {
    person.damageHP -= count;
  }

  renderHP(person);
}

function random(num) {
  return Math.ceil(Math.random() * num);
}
init();
