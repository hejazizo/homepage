(function ($) {
    "use strict";

    jQuery(document).ready(function () {


    });

    jQuery(window).load(function () {
        
        $('.menu a').anchorjump();

        $("h2, h3").scrollagent(function (cid, pid, currentElement, previousElement) {
            if (pid) {
                $("[href='#" + pid + "']").removeClass('active');
            }
            if (cid) {
                $("[href='#" + cid + "']").addClass('active');
            }
        });

    });

})(jQuery);


