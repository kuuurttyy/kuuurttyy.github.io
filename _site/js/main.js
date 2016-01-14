// nav overlay


(function () {
    var toggleButton = $(".nav-toggle"),
        overlay = $("div.overlay-nav"),
        navLink = $(".nav-link");

    //    function toggleOverlay() {
    //        if (overlay.hasClass("open")) {
    //            overlay.removeClass("open")
    //                .addClass("close");
    //        } else if (overlay.hasClass("close")) {
    //                overlay.addClass("open");
    //            }
    //        else {
    //            jQuery.noop();
    //        }
    //            
    //    };

    navLink.click(function () {
        overlay.toggleClass("open");
        toggleButton.toggleClass('active');
    });

    toggleButton.click(function () {
        overlay.toggleClass("open");
        toggleButton.toggleClass('active');
        return false;
    });

})();

//$(document).ready(function () {
//    var hamburger = $('#hamburger-icon');
//    hamburger.click(function () {
//        hamburger.toggleClass('active');
//        return false;
//    });
//});
//
//(function () {
//    var triggerBttn = document.getElementById('trigger-overlay'),
//        overlay = document.querySelector('div.overlay-nav'),
//        closeBttn = overlay.querySelector('button.overlay-close');
//    //		transEndEventNames = {
//    //			'WebkitTransition': 'webkitTransitionEnd',
//    //			'MozTransition': 'transitionend',
//    //			'OTransition': 'oTransitionEnd',
//    //			'msTransition': 'MSTransitionEnd',
//    //			'transition': 'transitionend'
//    //		},
//    //		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
//    //		support = { transitions : Modernizr.csstransitions };
//
//    function toggleOverlay() {
//        if (classie.has(overlay, 'open')) {
//            classie.remove(overlay, 'open');
//            classie.add(overlay, 'close');
//            var onEndTransitionFn = function (ev) {
//                //				if( support.transitions ) {
//                //					if( ev.propertyName !== 'visibility' ) return;
//                //					this.removeEventListener( transEndEventName, onEndTransitionFn );
//                //				}
//                classie.remove(overlay, 'close');
//            };
//            //			if( support.transitions ) {
//            //				overlay.addEventListener( transEndEventName, onEndTransitionFn );
//            //			}
//            //			else {
//            //				onEndTransitionFn();
//            //			}
//        } else if (!classie.has(overlay, 'close')) {
//            classie.add(overlay, 'open');
//        }
//    }
//
//    triggerBttn.addEventListener('click', toggleOverlay);
//    closeBttn.addEventListener('click', toggleOverlay);
//})();


// script for the sections to work

! function (t) {
    t.section = function (e, n) {
        var o = (t.extend({}, t.fn.section.defaults, n), t(e)),
            i = t(".section-title", o),
            a = (t(".section-body", o), function () {
                r()
            }),
            r = function () {
                t(window).on("scroll", c), t(window).on("resize", c), c(null)
            },
            c = function () {
                var e = o.outerHeight(),
                    n = o.offset().top,
                    a = t(window).height(),
                    r = t(window).scrollTop();
                if (r >= n && n + e - a >= r) i.addClass("section-title-fixed").css({
                    top: 0
                });
                else {
                    var c = r - n;
                    c = Math.max(0, c), c = Math.min(e - a, c), i.removeClass("section-title-fixed").css({
                        top: c
                    })
                }
            };
        a()
    }, t.fn.section = function (e) {
        return this.each(function () {
            if (void 0 === t(this).data("section")) {
                var n = new t.section(this, e);
                t(this).data("section", n)
            }
        })
    }, t.fn.section.defaults = {
        option1: 1e3,
        option2: 760
    }
}(jQuery);

function ViewportUnits() {}

function Fullpage() {}

function Chapter() {}

function Main() {}
ViewportUnits.prototype = {
    constructor: ViewportUnits,
    initListener: function () {
        $(window).on("resize", this.onWindowResize), this.onWindowResize(null)
    },
    onWindowResize: function () {
        $("[data-viewport-height]").each(function () {
            $(this).css({
                height: $(this).data("viewportHeight") / 100 * $(window).height()
            })
        }), $("[data-viewport-min-height]").each(function () {
            $(this).css({
                minHeight: $(this).data("viewportMinHeight") / 100 * $(window).height()
            })
        }), $("[data-viewport-width]").each(function () {
            $(this).css({
                width: $(this).data("viewportWidth") / 100 * $(window).height()
            })
        }), $("[data-viewport-min-width]").each(function () {
            $(this).css({
                minWidth: $(this).data("viewportMinWidth") / 100 * $(window).height()
            })
        })
    },
    init: function () {
        this.initListener()
    }
}, Fullpage.prototype = {
    constructor: Fullpage,
    initListener: function () {},
    init: function () {
        this.initListener()
    }
}, Chapter.prototype = {
    constructor: Chapter,
    initPlugins: function () {
        $(".chapter").section()
    },
    init: function () {
        this.initPlugins()
    }
}, Main.prototype = {
    constructor: Main,
    initPlugins: function () {
        (new ViewportUnits).init(), (new Chapter).init(), $('a[href^="#"]').on("click", this.onAnchorClicked)
    },
    onAnchorClicked: function () {
        var e = $(this).attr("href").substr(1);
        if ("" != e) {
            var t = $("[data-id=" + e + "]");
            if (t.length) {
                var o = 800;
                return $("html,body").animate({
                    scrollTop: t.offset().top
                }, o, "easeInOutQuart"), !1
            }
        }
    },
    init: function () {
        Main.initPlugins()
    }
};
var Main = new Main;
$(Main.init);