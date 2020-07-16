// ==UserScript==
// @name        SpeedGrader Printer
// @description SpeedGrader page extender and printer for quizzes.
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @include     https://*.instructure.com/courses/*/gradebook/speed_grader*
// @version     1
// @grant       none
// ==/UserScript==
(function() {
  'use strict';
  var assocRegex = new RegExp('^/(course|account)s/([0-9]+)/gradebook/speed_grader$');

  if (assocRegex.test(window.location.pathname)) {
    add_button();
  }

  function add_button() {
    var parent = document.querySelector('div#speedgrader-icons');
    if (parent) {
      var el = parent.querySelector('#SG_Print');
      var el1 = parent.querySelector('#SG_Print1');
      var el2 = parent.querySelector('#SG_Print2');

      if (!el) {
        el = document.createElement('a');
        el.classList.add('Button', 'Button--icon-action');
        el.id = 'SG_Print';
        var icon = document.createElement('i');
        icon.classList.add('icon-add');
        el.appendChild(icon);
        var txt = document.createTextNode(' Add till Scrollbar Disappear');
        el.appendChild(txt);
        el.addEventListener('click', print_frame);
        parent.appendChild(el);
      }

      if (!el1) {
        el1 = document.createElement('a');
        el1.classList.add('Button', 'Button--icon-action');
        el1.id = 'SG_Print1';
        var icon1 = document.createElement('i');
        icon1.classList.add('icon-printer');
        el1.appendChild(icon1);
        var txt1 = document.createTextNode(' Print New Quiz');
        el1.appendChild(txt1);
        el1.addEventListener('click', print_frame1);
        parent.appendChild(el1);
      }

      if (!el2) {
        el2 = document.createElement('a');
        el2.classList.add('Button', 'Button--icon-action');
        el2.id = 'SG_Print2';
        var icon2 = document.createElement('i');
        icon2.classList.add('icon-printer');
        el2.appendChild(icon2);
        var txt2 = document.createTextNode(' Print Old Quiz');
        el2.appendChild(txt2);
        el2.addEventListener('click', print_frame2);
        parent.appendChild(el2);
      }
    }
  }

    function print_frame() {

        var PrintFrame = document.getElementById('full_width_container');
        var HFrame = document.getElementById('full_width_container').clientHeight;
        PrintFrame.style.height = HFrame + 5000 + 'px';
        }

     function print_frame1() {
        window.print();
    }

    function print_frame2() {
        var PrintFrame = document.getElementById('full_width_container');
        var HFrame = document.getElementById('speedgrader_iframe').contentWindow.document.body.scrollHeight;
        PrintFrame.style.height = HFrame + 550 + 'px';
        window.print();
    }
})();
