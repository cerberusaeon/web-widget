(function() {
    var jQuery;
    var materialDesign;

    /******** Load jQuery if not present *********/
    //TODO: probably have to change this to HTTPS otherwise it'll break ssl
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.1.3') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    scriptLoadHandler();
                }
            };
        } else {
            script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }


    /////////////////////////////////////////material design////////////////////////
    //https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js
    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);

        jQuery(document).ready(function()
        {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://storage.googleapis.com/code.getmdl.io/1.0.5/material.min.js";
            // Use any selector
            jQuery("head").append(s);
            jQuery('#crowdtrust-widget-container').load('../html/widget.template.html');
        });
        main();
    }

    /***
     * fetching css locally but will hit crowdtrust server
     */
    function main() {
        jQuery(document).ready(function($) {
            /******* Load CSS *******/
            var crowdtrustLink = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "../css/crowdtrust.css"
            });
            var materialDesignLink = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://storage.googleapis.com/code.getmdl.io/1.0.5/material.blue_grey-indigo.min.css"
            });
            var materialDesignIconsLink = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            });
            crowdtrustLink.appendTo('head');
            materialDesignLink.appendTo('head');
            materialDesignIconsLink.appendTo('head');

        });
    }

})(); // We call our anonymous function immediately