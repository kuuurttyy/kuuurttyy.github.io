// nav overlay
(function() {
  var toggleButton = $(".nav-toggle"),
    overlay = $("div.overlay-nav"),
    navLink = $(".nav-link");
  hexagon = $(".hexagon");

  function toggleNav() {
    overlay.toggleClass("open");
    toggleButton.toggleClass("active");
    hexagon.toggleClass("active");
  }

  navLink.click(function() {
    toggleNav();
  });

  toggleButton.click(function() {
    toggleNav();
    return false;
  });

  toggleButton.hover(
    function() {
      hexagon.addClass("hexagon-rotate");
    },
    function() {
      hexagon.removeClass("hexagon-rotate");
    }
  );
})();

// portfolio page
$(window).on("load", function() {
  const sidebar = document.querySelector(".project-left");
  const relative = document.querySelector(".project-right");

  if ($(window).width() > 992) {
    const floatSidebar = FloatSidebar({
      sidebar,
      relative,
      topSpacing: 20,
      bottomSpacing: 20
    });
  }
});

// script for the sections to work

!(function(t) {
  (t.section = function(e, n) {
    var o = (t.extend({}, t.fn.section.defaults, n), t(e)),
      i = t(".section-title", o),
      a = (t(".section-body", o),
      function() {
        r();
      }),
      r = function() {
        t(window).on("scroll", c), t(window).on("resize", c), c(null);
      },
      c = function() {
        var e = o.outerHeight(),
          n = o.offset().top,
          a = t(window).height(),
          r = t(window).scrollTop();
        if (r >= n && n + e - a >= r)
          i.addClass("section-title-fixed").css({
            top: 0
          });
        else {
          var c = r - n;
          (c = Math.max(0, c)),
            (c = Math.min(e - a, c)),
            i.removeClass("section-title-fixed").css({
              top: c
            });
        }
      };
    a();
  }),
    (t.fn.section = function(e) {
      return this.each(function() {
        if (void 0 === t(this).data("section")) {
          var n = new t.section(this, e);
          t(this).data("section", n);
        }
      });
    }),
    (t.fn.section.defaults = {
      option1: 1e3,
      option2: 760
    });
})(jQuery);

function ViewportUnits() {}

function Fullpage() {}

function Chapter() {}

function Main() {}

(ViewportUnits.prototype = {
  constructor: ViewportUnits,
  initListener: function() {
    $(window).on("resize", this.onWindowResize), this.onWindowResize(null);
  },
  onWindowResize: function() {
    $("[data-viewport-height]").each(function() {
      $(this).css({
        height: ($(this).data("viewportHeight") / 100) * $(window).height()
      });
    }),
      $("[data-viewport-min-height]").each(function() {
        $(this).css({
          minHeight:
            ($(this).data("viewportMinHeight") / 100) * $(window).height()
        });
      }),
      $("[data-viewport-width]").each(function() {
        $(this).css({
          width: ($(this).data("viewportWidth") / 100) * $(window).height()
        });
      }),
      $("[data-viewport-min-width]").each(function() {
        $(this).css({
          minWidth:
            ($(this).data("viewportMinWidth") / 100) * $(window).height()
        });
      });
  },
  init: function() {
    this.initListener();
  }
}),
  (Fullpage.prototype = {
    constructor: Fullpage,
    initListener: function() {},
    init: function() {
      this.initListener();
    }
  }),
  (Chapter.prototype = {
    constructor: Chapter,
    initPlugins: function() {
      $(".chapter").section();
    },
    init: function() {
      this.initPlugins();
    }
  }),
  (Main.prototype = {
    constructor: Main,
    initPlugins: function() {
      new ViewportUnits().init(), new Chapter().init();
    },

    init: function() {
      Main.initPlugins();
    }
  });
var Main = new Main();
$(Main.init);
