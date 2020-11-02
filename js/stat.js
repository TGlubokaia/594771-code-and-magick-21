'use strict';

(function () {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const GAP = 50;
  const SMALL_GAP = 10;
  const FONT_GAP = 16;
  const TEXT_HEIGHT = 30;
  const BAR_WIDTH = 40;
  const barHeight = 150;

  const renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  const getMaxElement = function (v) {
    let maxElement = v[0];
    for (let i = 1; i < v.length; i++) {
      if (v[i] > maxElement) {
        maxElement = v[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(
        ctx,
        CLOUD_X + SMALL_GAP, CLOUD_Y + SMALL_GAP,
        `rgba(0, 0, 0, 0.7)`
    );
    renderCloud(
        ctx,
        CLOUD_X,
        CLOUD_Y,
        `#fff`
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(`Ура, вы победили!`, CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT);
    ctx.fillText(`Список результатов:`, CLOUD_X + GAP, CLOUD_Y + TEXT_HEIGHT + FONT_GAP);

    const maxTime = getMaxElement(times);

    for (let i = 0; i < players.length; i++) {

      ctx.fillText(
          Math.round(times[i]),
          CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
          CLOUD_Y + TEXT_HEIGHT * 2 + FONT_GAP + (barHeight - (barHeight * times[i]) / maxTime)
      );

      const hslColor = window.util.getRandomNumber(0, 100);
      if (players[i] === `Вы`) {
        ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      } else {
        ctx.fillStyle = `hsl(240, ${hslColor}%, 50%)`;
      }
      ctx.fillRect(
          CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
          CLOUD_Y + TEXT_HEIGHT + FONT_GAP * 3 + (barHeight - (barHeight * times[i]) / maxTime),
          BAR_WIDTH,
          (barHeight * times[i]) / maxTime
      );
      ctx.fillStyle = `#000`;
      ctx.fillText(
          players[i],
          CLOUD_X + GAP + (BAR_WIDTH + GAP) * i,
          CLOUD_Y + TEXT_HEIGHT + FONT_GAP * 4 + barHeight
      );
    }
  };
}());


