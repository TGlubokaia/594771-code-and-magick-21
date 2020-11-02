'use strict';

(function () {
  const wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  const wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55), rgb(0, 0, 0)'];
  const wizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

  const getColor = function (colors, element, box) {
    element.addEventListener('click', function () {
      const colorElement = colors[window.util.getRandomNumber(0, colors.length - 1)];
      box.value = colorElement;
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = colorElement;
      } else {
        element.style.fill = colorElement;
      }
    });
  };

  window.colorize = {
    getColor: getColor,
    wizardFireballColors: wizardFireballColors,
    wizardCoatColors: wizardCoatColors,
    wizardEyes: wizardEyes,
  };
}());
