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
