/**
 * Created by ShareUS on 2016/9/27.
 */
//一个重大问题，是module组件的问题，在此组件下，我自定义的指令不起作用，但是在其他组件下可以使用
angular.module('starter.directives', [])
  //.directive('ngFocus', function () {
  //  var FOCUS_CLASS = "ng-focused";
  //  return{
  //    restrict:'A',
  //    require:'ngModel',
  //    link: function (scope, element, attrs,ctrl) {
  //      ctrl.$focused = false;
  //      element.bind('focus', function (evt) {
  //        element.addClass(FOCUS_CLASS);
  //        scope.$apply(function () {
  //          ctrl.$focused = true;
  //        });
  //      }).bind('blur', function () {
  //        element.removeClass(FOCUS_CLASS);
  //        scope.$apply(function(){
  //          ctrl.$focused = false;
  //        })
  //      })
  //    }
  //  }
  //})
