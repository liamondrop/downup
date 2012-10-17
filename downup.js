/* ==========================================
 * downup.js v0.0.1
 *
 * @author: liamondrop
 *    ^oo1^                               
 *  ++o1^+o111111+^
 * 1+^^^ oo^1NNNooo+^+^
 * o^^^^^^01+100+^o0110o+
 * ooo^^^^100oooo1o000NMM1
 * 11^^^^^+00000000000NMMMN1
 * ^1+^^^^^^100000MM0NMN0NMMM01^
 *  oMo^^^^^ +11+1o0MMNNMMN00NMMM0^
 *   1Mo+^^+^^^^^^^^+0M00MMMMMMNNNM0
 *    oMMN1+^^^^^^+1oNMMNNMMMMMMMMNNM+
 *    ^MN^ ^^^^^^^^^100NNM0NMMMMMMMMNM1
 *    NM^^^^^^^^^^^^^^^^10M+^+1oNMMMNMM
 *    0+^^^^^^^^^^^^^^^^^+oo     +oMM0^
 *    ^^^^^^^^^^^^^^^^^^^^+o       1NM^
 *   1^^^^^^^^^^^^^^^^^^^^^++        +
 *  ^o^^^^^^^^^^^^^^^^^^^^^^^
 *   o^^^^^^^^^^^^^^^^^^^^^^
 *   NN^^^^^^^^^^^^^ ^^^^^^^^
 *  ^MN^^^^^^ ^^^^^ ^^^^^^^^1+
 *  1M+^^^^^^^^^^^^^^^^^^ ++oo+
 *  0+^^^^^^^^^^^^^^^^^^+10000o
 * 0+^^^^^^^^^^^^ ^^^+1o0000000o
 *0o^^^^^^^^^^^^^^+1o000000000000^
 1Mo^^^o0+^++^^^+o000oo00000o0000o^
 oM0++1o1MNMo^+1o00000000000000000o
 0M0001^ 0MMo1000000000000o000ooo001
 * o1+   1MM00000000000000o000000000^
 *       ^MMN000000000000000000000001
 *        oMMN000000000000000000o0000
 *        ^MMMMMN000000o0000000000000
 *         NMMMN000oo000000000oo000oo
 *        +MMMNN00000oo00000000000o0o
 *        0MMMMN000000000000oo000000o
 *        MMMMM00000000000000000NMMM^
 *        MMMMMN00000000000o00MMMMM01^^
 *        oMMMMMMN00o000000000MMMNo^^^+^
 *      ^^^^+1NMMMN00000000000MMM0+^^^^11
 * ^1+^^^+o00o0MMMM000000oo00NNMNNo0++^1o
 * ^+^++^+^^      ^+1o000o001+^
 *            ^^^^^^^oo00o0+
 *          +01111+++1+++^^
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
