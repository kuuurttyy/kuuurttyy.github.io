$(document).ready(function () {
    $(".down").click(function () {
        $('html,body').animate({
                scrollTop: $(".form").offset().top
            },
            'slow');
        $(this).fadeOut();
    });
})

var globalModal = $('.global-modal')
    body = $('body');
$("#privacy").on("click", function (e) {
    e.preventDefault();
    $(globalModal).toggleClass('global-modal-show');
    $(body).toggleClass('fixed');
});
$(".overlay").on("click", function () {
    $(globalModal).toggleClass('global-modal-show');
    $(body).toggleClass('fixed');
});
$(".global-modal_close").on("click", function () {
    $(globalModal).toggleClass('global-modal-show');
    $(body).toggleClass('fixed');
});
$(".mobile-close").on("click", function () {
    $(globalModal).toggleClass('global-modal-show');
    $(body).toggleClass('fixed');
});


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

function next($this) {
    if (animating) return false;
    animating = true;

    current_fs = $this.parents("fieldset");
    next_fs = $this.parents("fieldset").next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({
                'left': left,
                'opacity': opacity
            });
        },
        duration: 500,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });


}

function previous($this) {
    if (animating) return false;
    animating = true;

    current_fs = $this.parents("fieldset");
    previous_fs = $this.parents("fieldset").prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({
        opacity: 0
    }, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'left': left
            });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 500,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
}

$(".next, .submit").click(function () {
    next($(this));
});


$(".previous").click(function () {
    previous($(this));
});

$(".submit").click(function () {
    return false;
})





// Stop the form from submitting too early if the user presses Enter
$('#mailchimp-signup').on('keyup keypress', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13 && $('.final').is(':hidden')) {
        e.preventDefault();
        return false;
    }
});


$(function () {
    $('.submit').click(function (e) {
        e.preventDefault();

        $('#mailchimp-success,#mailchimp-error,.result').hide()

        // Check email matches
        if ($('email-confirm').attr('value') == $('mailchimp-email').attr('value')) {
            // Check vault code matches
            if ($('#vault-code').val() == '4LRSTBDCX') {
                // THEN send off the form
                $.ajax({
                    url: $(this).attr('action'),
                    type: 'POST',
                    data: {
                        email: $('#mailchimp-email').val(),
                        first_name: $('#mailchimp-fname').val(),
                        last_name: $('#mailchimp-lname').val(),
                        youtube: $('#mailchimp-youtube').val(),
                        twitch: $('#mailchimp-twitch').val(),
                        mixer: $('#mailchimp-mixer').val(),
                        ncs_contact: $('#ncs-contact').val(),
                    },
                    dataType: 'json',
                    success: function (response) {

                        if (response.status == 'error') {
                            $('#mailchimp-error p').text('Error! Please provide your full name, email, platforms, and NCS contact.')
                            $('#mailchimp-error').show()
                        } else {
                            if (response.is_new) $('#mailchimp-success p').text('SUCCESS! Please, check your emails for the confirmation an email and click the link provided.')
                            else $('#mailchimp-success p').text("SUCCESS! Thanks for signing up! We'll be in touch soon with more information.")
                            $('#mailchimp-success').show()
                        }
                    },
                    error: function (error) {
                        $('.result').show();
                        $('#mailchimp-error p').text('Network error occurred. Please, try again.')
                        $('#mailchimp-error').show()
                    }
                });
            } // close vault_code check
            else {
                $('.result').show();
                $('#mailchimp-error p').text('The Vault Code provided is not valid. Please try again.')
                $('#mailchimp-error').show()
            }
        } // close email_confirm check
        else {
            $('.result').show();
            $('#mailchimp-error p').text('Email confirmation failed. Please check you have entered your email correctly.')
            $('#mailchimp-error').show()
        }
    });
});
