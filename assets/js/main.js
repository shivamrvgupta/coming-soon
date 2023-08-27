$(function() {
  'use strict';

  /*
  ---------------------------------------------
  Init
  ---------------------------------------------
   */
  var initAnim, initContactForm, initCounter, initLightbox, initMap, initNav, initParticles, initSlideshow, initSubscribeForm, initTeamCarousel, initTrianglify, initVideoBg, initWorksCarousel, isMobile, testMobile;
  $(document).ready(function() {
    if (typeof testMobile !== "undefined" && testMobile !== null) {
      $('.animateIt').addClass('animated');
    }
    initParticles();
    initSlideshow();
    initTrianglify();
    initVideoBg();
    initWorksCarousel();
    initTeamCarousel();
    initCounter();
    initSubscribeForm();
    initContactForm();
    initMap();
    initNav();
    initLightbox();
  });

  /*
  ---------------------------------------------
  Preloader
  ---------------------------------------------
   */
  $(window).load(function() {
    $('#page-loader').addClass('loader-hidden');
    initAnim();
  });

  /*
  ---------------------------------------------
  Test Device
  ---------------------------------------------
   */
  isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
  testMobile = isMobile.any();

  /*
  ---------------------------------------------
  Animations
  ---------------------------------------------
   */
  $.fn.animateIt = function(type, delay, effect) {
    if (testMobile === null) {
      $(this).each(function(i, e) {
        var a, b, c, d;
        if (effect != null) {
          a = effect.split('-');
        } else {
          a = $(e).data('effect').split('-');
        }
        b = typeof a[1] !== 'undefined' ? a[1] : '';
        if (delay != null) {
          c = delay;
        } else {
          c = $(e).data('delay');
        }
        if (c) {
          d = 'animated ' + a[0] + type + b.charAt(0).toUpperCase() + b.slice(1) + ' delay' + c / 100;
        } else {
          d = 'animated ' + a[0] + type + b.charAt(0).toUpperCase() + b.slice(1) + ' delay0';
        }
        $(e).addClass(d);
      });
    }
  };
  $.fn.removeAnimate = function() {
    if (testMobile === null) {
      $(this).each(function(i, e) {
        var a, b, c;
        a = $(e).attr('class');
        b = a.match(/animated(.*?)(delay[0-9]+)/g);
        if (b != null) {
          c = b.join('');
          $(e).removeClass(c);
        }
      });
    }
  };

  /*
  ---------------------------------------------
  Lightbox
  ---------------------------------------------
   */
  initLightbox = function() {
    if ($.fn.simpleLightbox) {
      $('.lightbox').simpleLightbox({
        navText: ['&lsaquo;', '&rsaquo;'],
        showCounter: false,
        loop: false,
        disableScroll: false
      });
    }
  };

  /*
  ---------------------------------------------
  Works Carousel
  ---------------------------------------------
   */
  initWorksCarousel = function() {
    if ($('#portfolio-list').length && $('#portfolio-list').hasClass('owl-carousel') && $.fn.owlCarousel) {
      $('#portfolio-list').owlCarousel({
        margin: 30,
        stagePadding: 15,
        nav: true,
        dots: false,
        mouseDrag: false,
        navText: ['<i class="material-icons">&#xE5CB;</i>', '<i class="material-icons">&#xE5CC;</i>'],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          732: {
            items: 2
          },
          1024: {
            items: 3
          }
        }
      });
    }
  };

  /*
  ---------------------------------------------
  Team Carousel
  ---------------------------------------------
   */
  initTeamCarousel = function() {
    if ($('#team .team-list').length && $('#team .team-list').hasClass('owl-carousel') && $.fn.owlCarousel) {
      $('#team .team-list').owlCarousel({
        margin: 30,
        nav: true,
        dots: false,
        mouseDrag: false,
        navText: ['<i class="material-icons">&#xE5CB;</i>', '<i class="material-icons">&#xE5CC;</i>'],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          732: {
            items: 2
          },
          1024: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
      });
    }
  };

  /*
  ---------------------------------------------
  Particles Background
  ---------------------------------------------
   */
  initParticles = function() {
    var config, image, style;
    if ($('#home.particles').length && (typeof particlesJS !== "undefined" && particlesJS !== null)) {
      image = $('#home.particles').data('image');
      if (image != null) {
        $('#home.particles').css('background-image', 'url(' + image + ')');
      }
      style = $('#home.particles').data('style');
      config = {};
      switch (style) {
        case 'snow':
          config = {
            'particles': {
              'number': {
                'value': 200
              },
              'color': {
                'value': '#fff'
              },
              'shape': {
                'type': 'circle'
              },
              'opacity': {
                'value': 1
              },
              'size': {
                'value': 2,
                'random': true
              },
              'line_linked': {
                'enable': false
              },
              'move': {
                'enable': true,
                'speed': 3,
                'direction': 'bottom'
              }
            },
            'interactivity': {
              'events': {
                'onhover': {
                  'enable': false
                },
                'onclick': {
                  'enable': false
                },
                'resize': false
              }
            },
            'retina_detect': true
          };
          break;
        case 'bubbles':
          config = {
            'particles': {
              'number': {
                'value': 150
              },
              'color': {
                'value': '#fff'
              },
              'shape': {
                'type': 'circle',
                'stroke': {
                  'width': 1,
                  'color': 'rgba(255,255,255,.15)'
                }
              },
              'opacity': {
                'value': 0.07
              },
              'size': {
                'value': 7,
                'random': true
              },
              'line_linked': {
                'enable': false
              },
              'move': {
                'enable': true,
                'speed': 1,
                'random': true,
                'straight': true,
                'direction': 'top'
              }
            },
            'interactivity': {
              'events': {
                'onhover': {
                  'enable': false
                },
                'onclick': {
                  'enable': false
                },
                'resize': false
              }
            },
            'retina_detect': true
          };
          break;
        default:
          config = {
            'particles': {
              'number': {
                'value': 150
              },
              'color': {
                'value': '#fff'
              },
              'shape': {
                'type': 'circle'
              },
              'opacity': {
                'value': 1,
                'random': true,
                'anim': {
                  'enable': true,
                  'speed': 2,
                  'opacity_min': 0.5
                }
              },
              'size': {
                'value': 2.5,
                'random': true
              },
              'line_linked': {
                'opacity': 0.15
              },
              'move': {
                'enable': true,
                'speed': 0.2
              }
            },
            'interactivity': {
              'events': {
                'onhover': {
                  'enable': false
                },
                'onclick': {
                  'enable': false
                },
                'resize': false
              }
            },
            'retina_detect': true
          };
      }
      particlesJS('home', config);
    }
  };

  /*
  ---------------------------------------------
  Slideshow Background
  ---------------------------------------------
   */
  initSlideshow = function() {
    var i, list, selector, slides;
    if ($('#home.slideshow').length && $.fn.backstretch) {
      selector = $('#home.slideshow');
      if (selector.data('slides' != null)) {
        slides = selector.data('slides').split(',');
        if (slides.length > 1) {
          list = new Array;
          i = 0;
          while (i < slides.length) {
            list.push(slides[i]);
            ++i;
          }
          selector.backstretch(list, {
            duration: selector.data('delay') != null ? selector.data('delay') : 3000,
            fade: 750
          });
        } else {
          selector.backstretch(slides);
        }
      }
    }
  };

  /*
  ---------------------------------------------
  Triangle Background
  ---------------------------------------------
   */
  initTrianglify = function() {
    var selector, t;
    if ($('#home.triangle').length && (typeof Trianglify !== "undefined" && Trianglify !== null)) {
      selector = $('#home.triangle');
      t = new Trianglify({
        width: window.innerWidth,
        height: window.innerHeight,
        cell_size: 90,
        variance: 1,
        x_colors: selector.data('colors') != null ? selector.data('colors') : 'random'
      });
      selector.css({
        'background-image': 'url(' + t.png() + ')'
      });
    }
  };

  /*
  ---------------------------------------------
  Video Background
  ---------------------------------------------
   */
  initVideoBg = function() {
    var selector;
    if ($('#home.video').length && $.fn.YTPlayer) {
      selector = $('#home.video');
      if (testMobile != null) {
        selector.css('background-image', 'url(' + selector.data('image') + ')');
      } else {
        selector.YTPlayer({
          videoURL: selector.data('video'),
          containment: 'self',
          loop: true,
          vol: 100,
          showControls: false,
          showYTLogo: false,
          addRaster: true,
          stopMovieOnBlur: false,
          gaTrack: false
        });
        $('.video-controls a', selector).on('click', function(e) {
          e.preventDefault();
          if ($(this).hasClass('play-btn')) {
            if ($(this).hasClass('pause-on')) {
              selector.YTPPlay();
              $(this).toggleClass('pause-on');
              $('i', this).attr('class', 'ti-control-pause');
            } else {
              selector.YTPPause();
              $(this).toggleClass('pause-on');
              $('i', this).attr('class', 'ti-control-play');
            }
          }
          if ($(this).hasClass('mute-btn')) {
            if ($(this).hasClass('sound-off')) {
              selector.YTPUnmute();
              $(this).toggleClass('sound-off');
            } else {
              selector.YTPMute();
              $(this).toggleClass('sound-off');
            }
          }
        });
      }
    }
  };

  /*
  ---------------------------------------------
  Counter
  ---------------------------------------------
   */
  initCounter = function() {
    if ($('#counter').length && $.fn.countdown) {
      $('#counter').countdown($('#counter').data('date')).on('update.countdown', function(event) {
        var $this;
        $this = $(this).html(event.strftime("<span id=\"counter-days\">%D <span>Days</span></span>\n<span id=\"counter-hours\">%H <span>Hours</span></span>\n<span id=\"counter-minutes\">%M <span>Minutes</span></span>\n<span id=\"counter-seconds\">%S <span>Seconds</span></span>"));
      });
    }
  };

  /*
  ---------------------------------------------
  Subscribe Form
  ---------------------------------------------
   */
  initSubscribeForm = function() {
    var email, form, message;
    form = $('#subscribe-form');
    message = $('.subscribe-form-info');
    email = $('#subscribe-form-email');
    form.on('submit', function(e) {
      var action, post_data, validateEmail;
      e.preventDefault();
      action = $(this).attr('action');
      validateEmail = function(email) {
        var exp;
        exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return exp.test(email);
      };
      if (!validateEmail(email.val())) {
        email.parent().addClass('has-error');
      }
      if (!email.parent().hasClass('has-error')) {
        post_data = {
          'userEmail': email.val()
        };
        $.post(action, post_data, (function(data) {
          var output;
          if (data.type === 'error') {
            output = '<p class="bg-danger"><i class="material-icons">&#xE811;</i> ' + data.text + '</p>';
          } else {
            output = '<p class="bg-success"><i class="material-icons">&#xE813;</i> ' + data.text + '</p>';
            email.val('');
          }
          message.html(output).fadeIn(200);
        }), 'json');
      }
    });
    email.keyup(function() {
      $(this).parent().removeClass('has-error');
      message.fadeOut(200);
    });
  };

  /*
  ---------------------------------------------
  Contact Form
  ---------------------------------------------
   */
  initContactForm = function() {
    var email, form, info, message, name;
    form = $('#contact-form');
    info = $('.contact-form-info');
    name = $('#contact-form-name');
    email = $('#contact-form-email');
    message = $('#contact-form-message');
    form.on('submit', function(e) {
      var action, post_data, validateEmail;
      e.preventDefault();
      action = $(this).attr('action');
      validateEmail = function(email) {
        var exp;
        exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return exp.test(email);
      };
      if (!validateEmail(email.val())) {
        email.parent().addClass('has-error');
      }
      if (name.val() === '') {
        name.parent().addClass('has-error');
      }
      if (message.val() === '') {
        message.parent().addClass('has-error');
      }
      if (!email.parent().hasClass('has-error') && !name.parent().hasClass('has-error') && !message.parent().hasClass('has-error')) {
        post_data = {
          'userName': name.val(),
          'userEmail': email.val(),
          'userMessage': message.val()
        };
        $.post(action, post_data, (function(data) {
          var output;
          if (data.type === 'error') {
            output = '<p class="bg-danger"><i class="material-icons">&#xE811;</i> ' + data.text + '</p>';
          } else {
            output = '<p class="bg-success"><i class="material-icons">&#xE813;</i> ' + data.text + '</p>';
            email.val('');
            name.val('');
            message.val('');
          }
          info.html(output).fadeIn(200);
        }), 'json');
      }
    });
    $('input,textarea', form).keyup(function() {
      $(this).parent().removeClass('has-error');
      if (!$('input, textarea', form).parent().hasClass('has-error')) {
        info.fadeOut(200);
      }
    });
  };

  /*
  ---------------------------------------------
  Google Maps
  ---------------------------------------------
   */
  initMap = function() {
    var coords, map, mapContainer, marker, myLatLng;
    if ($('#googlemaps').length && (google.maps != null)) {
      if ($('#googlemaps').data('coordinates')) {
        coords = $('#googlemaps').data('coordinates').split(',');
        myLatLng = {
          lat: parseFloat(coords[0]),
          lng: parseFloat(coords[1])
        };
      } else {
        myLatLng = {
          lat: -34.397,
          lng: 150.644
        };
      }
      mapContainer = $('#googlemaps');
      map = new google.maps.Map(mapContainer[0], {
        zoom: mapContainer.data('zoom') != null ? mapContainer.data('zoom') : 17,
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
      });
      marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });
    }
  };

  /*
  ---------------------------------------------
  Site Navigation
  ---------------------------------------------
   */
  initNav = function() {
    if ($('#main-nav').length) {
      $.fn.scrollSpy = function(parent) {
        var menuItems, p, scrollItems;
        if (parent != null) {
          p = parent;
        } else {
          p = $(this).parent();
        }
        menuItems = $(this).find('a[href^="#"]');
        scrollItems = menuItems.map(function() {
          var item;
          item = $($(this).attr('href'));
          if (item.length) {
            return item;
          }
        });
        $(window).on('scroll', function() {
          var cur, fromTop, id, lastId;
          fromTop = $(this).scrollTop() + $(p).outerHeight();
          cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) {
              return this;
            }
          });
          cur = cur[cur.length - 1];
          id = cur && cur.length ? cur[0].id : '';
          if (lastId !== id) {
            lastId = id;
            menuItems.parent().removeClass('nav-current').end().filter('[href="#' + id + '"]').parent().addClass('nav-current');
          }
        });
      };
      $.fn.showNav = function(container) {
        var c, header;
        if (container != null) {
          c = container;
        } else {
          c = $(this).parent();
        }
        header = $(this);
        $(window).on('scroll', function() {
          var x, y, z;
          y = $(this).scrollTop();
          x = header.outerHeight();
          z = $(c).outerHeight();
          if (testMobile != null) {
            if (y >= 1) {
              $(header).addClass('fixed-nav');
            } else {
              $(header).removeClass('fixed-nav');
            }
          } else {
            if (y >= x) {
              if (y >= (z - x) / 2) {
                $(header).css({
                  'position': 'fixed',
                  'top': -x
                });
              } else {
                $(header).css({
                  'position': 'absolute',
                  'top': -x
                });
              }
            } else {
              $(header).css({
                'position': 'absolute',
                'top': 0
              });
            }
            if (y >= z - x) {
              $(header).addClass('fixed-nav');
            } else {
              $(header).removeClass('fixed-nav');
            }
          }
        });
      };
      $.fn.scrollTo = function(offset) {
        var o;
        if (offset != null) {
          o = offset;
        } else {
          o = 0;
        }
        $(this).on('click', function(e) {
          var target;
          e.preventDefault();
          target = $(this).attr('href');
          if (target !== '#') {
            $('html,body').stop().animate({
              scrollTop: $(target).offset().top - o + 1
            }, 500);
          }
        });
      };
      $('#header').showNav('#home');
      $('#main-nav').scrollSpy('#header');
      $('#footer-nav').scrollSpy('#header');
      $('a[href^="#"]').scrollTo($('#header').outerHeight());
      $('#logo img', header).before('<img src="./images/logo_dark.png" class="dark-logo" alt="">');
      if ($('#mobile-nav').length) {
        $('#mobile-nav').on('click touchend', function(e) {
          e.preventDefault();
          $('body').toggleClass('nav-on');
        });
        $('body').on('click touchend', function(e) {
          var $body, $target;
          $body = $(this);
          $target = $(e.target);
          if (($body.hasClass('nav-on')) && $target.closest('#main-nav').length === 0 && $target.closest('#mobile-nav').length === 0) {
            e.preventDefault();
            $body.removeClass('nav-on');
          }
        });
      }
    }
  };

  /*
  ---------------------------------------------
  Animations Init
  ---------------------------------------------
   */
  initAnim = function() {
    if ($.fn.waypoint) {
      $('.animateIt').waypoint((function() {
        if (!$(this.element).hasClass('animated')) {
          $(this.element).animateIt('In');
        }
      }), {
        offset: '95%'
      });
    }
  };
});
