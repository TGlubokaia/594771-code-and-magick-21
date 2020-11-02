'use strict';

(function () {
  const NUMBER_OF_PLAYERS = 4;
  const similarListElement = document.querySelector('.setup-similar-list');
  const similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Создаем других персонажей
  const getPlayers = function (name, surname, color, eyes) {
    const players = [];
    for (let i = 0; i < NUMBER_OF_PLAYERS; i++) {
      const player = {};
      player.name = name[window.util.getRandomNumber(0, name.length)];
      player.surname = surname[window.util.getRandomNumber(0, surname.length - 1)];
      player.coatColor = color[window.util.getRandomNumber(0, color.length - 1)];
      player.eyesColor = eyes[window.util.getRandomNumber(0, eyes.length - 1)];
      players.push(player);
    }
    return players;
  };
  const boxOfPlayers = getPlayers(window.util.wizardNames, window.util.wizardSurnames, window.colorize.wizardCoatColors, window.colorize.wizardEyes);
  document.querySelector('.setup-similar').classList.remove('hidden');

  const renderWizard = function (wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  const wizardFragment = document.createDocumentFragment();
  for (let i = 0; i < boxOfPlayers.length; i++) {
    wizardFragment.appendChild(renderWizard(boxOfPlayers[i]));
  }
  similarListElement.appendChild(wizardFragment);
}());
