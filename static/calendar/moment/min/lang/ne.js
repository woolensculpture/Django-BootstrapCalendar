// moment.js language configuration
// language : nepali/nepalese
// author : suvash : https://github.com/suvash
(function () {
    function e(e) {
        var t = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096a",
            5: "\u096b",
            6: "\u096c",
            7: "\u096d",
            8: "\u096e",
            9: "\u096f",
            0: "\u0966"
        }, n = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096a": "4",
            "\u096b": "5",
            "\u096c": "6",
            "\u096d": "7",
            "\u096e": "8",
            "\u096f": "9",
            "\u0966": "0"
        };
        e.lang("ne", {
            months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),
            monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),
            weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),
            weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),
            weekdaysMin: "\u0906\u0907._\u0938\u094b._\u092e\u0919\u094d_\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),
            longDateFormat: {
                LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            preparse: function (e) {
                return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiem: function (e, t, n) {
                return e < 3 ? "\u0930\u093e\u0924\u0940" : e < 10 ? "\u092c\u093f\u0939\u093e\u0928" : e < 15 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 18 ? "\u092c\u0947\u0932\u0941\u0915\u093e" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u0940"
            },
            calendar: {
                sameDay: "[\u0906\u091c] LT",
                nextDay: "[\u092d\u094b\u0932\u0940] LT",
                nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
                lastDay: "[\u0939\u093f\u091c\u094b] LT",
                lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u092e\u093e",
                past: "%s \u0905\u0917\u093e\u0921\u0940",
                s: "\u0915\u0947\u0939\u0940 \u0938\u092e\u092f",
                m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
                mm: "%d \u092e\u093f\u0928\u0947\u091f",
                h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
                hh: "%d \u0918\u0923\u094d\u091f\u093e",
                d: "\u090f\u0915 \u0926\u093f\u0928",
                dd: "%d \u0926\u093f\u0928",
                M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
                MM: "%d \u092e\u0939\u093f\u0928\u093e",
                y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
                yy: "%d \u092c\u0930\u094d\u0937"
            },
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();