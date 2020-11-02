'use strict';

(function () {
  const wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


  const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  window.util = {
    getRandomNumber: getRandomNumber,
    wizardNames: wizardNames,
    wizardSurnames: wizardSurnames,
  };
}());
