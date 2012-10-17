/* ==========================================
 * downup.js v0.0.1
 *
 * @author: liamondrop
 * ========================================== */

(function ($) {
  "use strict";

  /* basic constructor // add event listeners
   * ========================================== */

  var DownUp = function (el) {
        var $el = $(el);
        
        $el.on('click', this.realize)
           .on('annul', this.annul);

        // close any open dropdowns on click or 'esc'
        $('html').on('click keyup', function (e) {
          if ((e.type === 'keyup' && e.keyCode === 27) ||
               e.type === 'click') {
            $el.trigger('annul');
          }
        });
      };

  DownUp.prototype = {
    realize: function () {
      var $this = $(this),
          $all = $("." + $this.attr('class')),
          $others = $all.not($this),
          $parent = $this.parent();

      $parent.toggleClass('du-open');
      $others.trigger('annul');
      return false;
    },

    annul: function (e) {
      $(e.target).parent().removeClass('du-open');
    }
  };

  /* plugin definition
   * ========================================== */

  $.fn.downup = function () {
    var dds = this;

    return dds.each(function () {
      var $this = $(this),
          dd = $this.data('dd');

      if (!du) {
        $this.data('du', (du = new DownUp(this)));
      }
    });
  };

}(window.jQuery));
