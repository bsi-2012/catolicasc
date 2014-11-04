/**
 * Blackbriar
 * Base JS
 */
var $ = require('jquery');

var Blackbriar = (function (window, document, undefined) {

  'use strict';

  /**
   * Blackbriar object
   */
  var Blackbriar = {};

  /**
   * Init Blackbriar program
   * Initialize other methods
   */
  Blackbriar.init = function () {
    this.toggleMenu();
  };

  /**
   * Toggle Menu when tablet && mobile
   * When click on menu button, show/hide the navigation menu
   */
  Blackbriar.toggleMenu = function () {
    $(document).on('click', '.nav-toggle', function () {
      $('.site-nav').slideToggle();
    });
  };

  /**
   * Detect if is mobile
   */
  Blackbriar.isMobile = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  };

  return Blackbriar.init();

})(window, document);