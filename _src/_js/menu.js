var $ = require('jquery');

module.exports = {
  toggleMenu: function () {
    $(document).on('click', '.nav-toggle', function () {
      $('.site-nav').slideToggle();
    });
  }
};