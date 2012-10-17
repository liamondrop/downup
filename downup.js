/* ==========================================
 * downup.js v0.0.1
 *
 * @author: liamondrop
 *                          +MM0^
 *                          +MMMM1
 *                          0MMNMM+
 *                          +MMMNNN
 *             ^^++++^^      1MMM0N1++^
 *        +1o00000o00000oooo1+oMM000MM00o^
 *      10000o000000000oo000oo00MNNMMMM000+
 *    o000oo0o00o0000o0000000o0000MMMMN0000+
 *  +0000000000000000oo000000000000NNN0000N0
 * +000000NMMMMMNN00000000000000NN00000000o^
 * 0000MMMMMMMMMMMMMN00000000000MMNNMo1+^^
 * 0000MMMMMN000000NNNo000000000NMM1+
 * 100000000000000000NN00ooo000001^
 *1o0000o00000000000000N000000N+
NMMMM0o00000000000000000000MM0
+o0MMMoo000000000000000000NNMNo1^
 *     ^o000000000o000ooooo0000NM0
 * ========================================== */

(function ($) {
  "use strict";


  /* basic constructor // add event listeners
   * ========================================== */

  var DownUp = function (el) {
        var $el = $(el);
        
        $el.on('click', this.actuate)
           .on('du.reveal', this.reveal)
           .on('du.conceal', this.conceal);

        // close any open dropdowns on click or 'esc'
        $('html').on('click keyup', function (e) {
          if ((e.type === 'keyup' && e.keyCode === 27) ||
               e.type === 'click') {
            $el.trigger('du.conceal');
          }
        });
      };

  DownUp.prototype = {
    actuate: function () {
      var $this = $(this),
          $others = $("." + $this.attr('class')).not($this),
          duEvent = $this.parent().hasClass('du-reveal') ? 'du.conceal' : 'du.reveal';

      $this.trigger(duEvent);
      $others.trigger('du.conceal');
      return false;
    },

    reveal: function (e) {
      $(e.target).parent().addClass('du-reveal');
    },

    conceal: function (e) {
      $(e.target).parent().removeClass('du-reveal');
    }
  };

  /* plugin definition
   * ========================================== */

  $.fn.downup = function () {
    var dus = this;

    return dus.each(function () {
      var $this = $(this),
          du = $this.data('du');

      if (!du) {
        $this.data('du', new DownUp(this));
      }
    });
  };

}(window.jQuery));
