'use strict';

const wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55), rgb(0, 0, 0)'];
const wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];
const NUMBER_OF_PLAYERS = 4;

document.querySelector('.setup').classList.remove('hidden');

const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const getPlayers = function (name, surname, color, eyes) {
  const players = [];
  for (let i = 0; i < NUMBER_OF_PLAYERS; i++) {
    const player = {};
    player.name = name[getRandomNumber(0, name.length)];
    player.surname = surname[getRandomNumber(0, surname.length)];
    player.coatColor = color[getRandomNumber(0, color.length)];
    player.eyesColor = eyes[getRandomNumber(0, eyes.length)];
    players.push(player);
  }
  return players;
};
const boxOfPlayers = getPlayers(wizardNames, wizardSurnames, wizardCoatColors, wizardEyes);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < boxOfPlayers.length; i++) {
  fragment.appendChild(renderWizard(boxOfPlayers[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
