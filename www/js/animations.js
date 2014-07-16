var premiereAnimations = angular.module('premiereAnimations', ['ngAnimate']);

premiereAnimations.animation('.team', function() {

  var animateIn = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
      /*position: 'absolute',*/
        /*top: 500,*/
        opacity: 0,
        left: 0,
        display: 'block'
    });

    jQuery(element).animate({
      opacity: 1
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  var animateOut = function(element, className, done) {
    if(className != 'active') {
      return;
    }
    element.css({
        /*position: 'absolute',*/
        left: 0,
        opacity: 1,
        top: 0,
        display: 'none'
    });

    jQuery(element).animate({
      opacity: 0
    }, done);

    return function(cancel) {
      if(cancel) {
        element.stop();
      }
    };
  }

  return {
    addClass: animateIn,
    removeClass: animateOut
  };
});
