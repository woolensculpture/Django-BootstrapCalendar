// moment.js language configuration
// language : japanese (ja)
// author : LI Long : https://github.com/baryon
(function () {
    function e(e) {
        e.lang("ja", {
            months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
            weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
            weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
            weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
            longDateFormat: {
                LT: "Ah\u6642m\u5206",
                L: "YYYY/MM/DD",
                LL: "YYYY\u5e74M\u6708D\u65e5",
                LLL: "YYYY\u5e74M\u6708D\u65e5LT",
                LLLL: "YYYY\u5e74M\u6708D\u65e5LT dddd"
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
            },
            calendar: {
                sameDay: "[\u4eca\u65e5] LT",
                nextDay: "[\u660e\u65e5] LT",
                nextWeek: "[\u6765\u9031]dddd LT",
                lastDay: "[\u6628\u65e5] LT",
                lastWeek: "[\u524d\u9031]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s\u5f8c",
                past: "%s\u524d",
                s: "\u6570\u79d2",
                m: "1\u5206",
                mm: "%d\u5206",
                h: "1\u6642\u9593",
                hh: "%d\u6642\u9593",
                d: "1\u65e5",
                dd: "%d\u65e5",
                M: "1\u30f6\u6708",
                MM: "%d\u30f6\u6708",
                y: "1\u5e74",
                yy: "%d\u5e74"
            }
        })
    }

    typeof define == "function" && define.amd && define(["moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();