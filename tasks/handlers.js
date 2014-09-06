var util = require('gulp-util');

function onError(error) {
  util.beep();
  util.log(error);
}

module.exports = {
  onError: onError
};
