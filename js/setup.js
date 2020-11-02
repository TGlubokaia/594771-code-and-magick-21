'use strict';

(function () {
  const setupWizard = document.querySelector('.setup-wizard');
  const setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  const setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  const setupWizardFireball = document.querySelector('.setup-fireball-wrap');
  const coatInput = document.querySelector('input[name=coat-color]');
  const eyesInput = document.querySelector('input[name=eyes-color]');
  const fireballInput = document.querySelector('input[name=fireball-color]');
  const setup = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = setup.querySelector('.setup-close');
  const setupInput = setup.querySelector('.setup-user-name');
  const startX = setup.style.top;
  const startY = setup.style.left;

  // Работа с формой
  const onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      getSetupClose();
    }
  };

  const getSetupOpen = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setup.style.top = startY;
    setup.style.left = startX;
  };

  const getSetupClose = function () {
    if (document.activeElement !== setupInput) {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  setupOpen.addEventListener('click', function () {
    getSetupOpen();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      getSetupOpen();
    }
  });

  setupClose.addEventListener('click', function () {
    getSetupClose();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      getSetupClose();
    }
  });
  window.colorize.getColor(window.colorize.wizardFireballColors, setupWizardFireball, fireballInput);
  window.colorize.getColor(window.colorize.wizardCoatColors, setupWizardCoat, coatInput);
  window.colorize.getColor(window.colorize.wizardEyes, setupWizardEyes, eyesInput);

  window.setup = {
    setup: setup,
  };
}());
