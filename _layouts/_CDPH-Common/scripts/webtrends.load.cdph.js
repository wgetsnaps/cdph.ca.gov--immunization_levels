// this file is ONLY for cdph.ca.gov
//wait until DOM Content is Fully Loaded
document.addEventListener('DOMContentLoaded', function() {

    var url = location.href;
    url = url.toLowerCase();

    //Look in the URL for the text "cdphinternet"
    if (url.indexOf("cdphinternet") >= 1) {
        // alert("is an authoring site so nothing goes here");
    } else {
        // WebTrends SmartSource Data Collector Tag v10.4.1
        // Copyright (c) 2014 Webtrends Inc.  All rights reserved.
        // Tag Builder Version: 4.1.3.2
        // Created: 2014.03.27
        window.webtrendsAsyncInit = function() {
            var dcs = new Webtrends.dcs().init({
                dcsid: "dcs2c1r8ejf1zldh1azj026vu_4c6p",
                domain: "analytics.cdph.ca.gov",
                timezone: -8,
                i18n: true,
                fpcdom: ".cdph.ca.gov",
                plugins: {
                    //hm:{src:"//s.webtrends.com/js/webtrends.hm.js"}
                }
            }).track();
        };
        (function() {
            var s = document.createElement("script");
            s.async = true;
            s.src = "/_layouts/_CDPH-Common/scripts/webtrends.min.js";
            var s2 = document.getElementsByTagName("script")[0];
            s2.parentNode.insertBefore(s, s2);
        }());

    }
});