'use strict';

const wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55), rgb(0, 0, 0)'];
const wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];
const NUMBER_OF_PLAYERS = 4;
const similarListElement = document.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = setup.querySelector('.setup-close');
const setupIcon = setup.querySelector('.setup-open-icon');
const setupInput = setup.querySelector('.setup-user-name');
const setupWizard = document.querySelector('.setup-wizard'); 
const setupWizardCoat = setupWizard.querySelector('.wizard-coat');
const setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
const setupWizardFireball = document.querySelector('.setup-fireball-wrap');
const wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const coatInput = document.querySelector('.coat-color');
const eyesInput = document.querySelector('.eyes-color');



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

const onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    getSetupClose();
  }
};

const getSetupOpen = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

};

const getSetupClose = function () {
  if (document.activeElement !== setupInput) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};




const getColor = function (color, element, box) {
  const colorElement = color[getRandomNumber(0, color.length)]
  element.style.fill = colorElement;
  box.value  = colorElement;
};


setupWizardCoat.addEventListener ('click', function () {
  getColor(wizardCoatColors, setupWizardCoat, coatInput);
});

setupWizardEyes.addEventListener ('click', function () {
  getColor(wizardEyes, setupWizardEyes, eyesInput);
});


const getBGColor = function (color, element) {
  element.style.background = color[getRandomNumber(0, color.length)];
};

setupWizardFireball.addEventListener ('click', function () {
  getBGColor(wizardFireballColors, setupWizardFireball);
});



setupOpen.addEventListener ('click', function () {
  getSetupOpen();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    getSetupOpen();
  }
});

setupClose.addEventListener ('click', function () {
  getSetupClose();
});

setupClose.addEventListener ('keydown', function (evt) {
  if (evt.key === 'Enter') {
    getSetupClose();
  }
});