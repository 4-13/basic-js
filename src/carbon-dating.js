const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' ||
    !/^[-+]?[0-9]*[.]?[0-9]+$/.test(sampleActivity)
  )
    return false;
  let value = Number(sampleActivity);
  if (value <= 0 || value > 15) return false;
  let num = Math.ceil(
    Math.log(MODERN_ACTIVITY / value) / (Math.log(2) / HALF_LIFE_PERIOD)
  );
  return num;
}

module.exports = {
  dateSample,
};
