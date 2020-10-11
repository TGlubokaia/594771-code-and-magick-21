'use strict';


const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55), rgb(0, 0, 0)'];
const EYES = ['black', 'red', 'blue', 'yellow', 'green'];
let numberOfPlayer = 4;
let players = [];

document.querySelector('.setup').classList.remove('hidden');

let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

let getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let getPlayers = function (name, surname, color, eyes) {
  for (let i = 0; i < numberOfPlayer; i++) {
    let player = {};
    player.name = name[getRandomNumber(0, name.length)];
    player.surname = surname[getRandomNumber(0, surname.length)];
    player.coatColor = color[getRandomNumber(0, color.length)];
    player.eyesColor = eyes[getRandomNumber(0, eyes.length)];
    players.push(player);
  }
  return players;
};
getPlayers(NAMES, SURNAMES, COLOR, EYES);

let renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  return wizardElement;
};

let fragment = document.createDocumentFragment();
for (let i = 0; i < players.length; i++) {
  fragment.appendChild(renderWizard(players[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
