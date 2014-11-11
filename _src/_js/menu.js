var $ = require('jquery');

var ToggleMenu = function () {
  $(document).on('click', '.nav-toggle', function () {
    $('.site-nav').slideToggle();
  });
};

module.exports = ToggleMenu;