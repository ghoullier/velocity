var util = require('gulp-util');

function onError(error) {
  util.beep();
  console.log(error);
}

module.exports = {
  onError: onError
};
