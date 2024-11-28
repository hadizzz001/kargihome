var scrollToRecaptcha = function (response) {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS) {
        $("html, body").animate({ scrollTop: $("#re-captcha").offset().top - 100 }, "slow");
    }
};