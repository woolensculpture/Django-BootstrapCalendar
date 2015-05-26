// moment.js language configuration
// language : chuvash (cv)
// author : Anatoly Mironov : https://github.com/mirontoli
(function () {
    function e(e) {
        e.lang("cv", {
            months: "\u043a\u0103\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u0103\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u00e7\u0115\u0440\u0442\u043c\u0435_\u0443\u0442\u0103_\u00e7\u0443\u0440\u043b\u0430_\u0430\u0432\u0103\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
            monthsShort: "\u043a\u0103\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u00e7\u0115\u0440_\u0443\u0442\u0103_\u00e7\u0443\u0440_\u0430\u0432_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
            weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u0115\u00e7\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u0103\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
            weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u0115\u00e7_\u044d\u0440\u043d_\u0448\u0103\u043c".split("_"),
            weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u00e7_\u044d\u0440_\u0448\u043c".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                L: "DD-MM-YYYY",
                LL: "YYYY [\u00e7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115]",
                LLL: "YYYY [\u00e7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115], LT",
                LLLL: "dddd, YYYY [\u00e7\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u0103\u0445\u0115\u043d] D[-\u043c\u0115\u0448\u0115], LT"
            },
            calendar: {
                sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                lastDay: "[\u0114\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                nextWeek: "[\u00c7\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                lastWeek: "[\u0418\u0440\u0442\u043d\u0115] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    var t = /\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u00e7\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d";
                    return e + t
                },
                past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
                s: "\u043f\u0115\u0440-\u0438\u043a \u00e7\u0435\u043a\u043a\u0443\u043d\u0442",
                m: "\u043f\u0115\u0440 \u043c\u0438\u043d\u0443\u0442",
                mm: "%d \u043c\u0438\u043d\u0443\u0442",
                h: "\u043f\u0115\u0440 \u0441\u0435\u0445\u0435\u0442",
                hh: "%d \u0441\u0435\u0445\u0435\u0442",
                d: "\u043f\u0115\u0440 \u043a\u0443\u043d",
                dd: "%d \u043a\u0443\u043d",
                M: "\u043f\u0115\u0440 \u0443\u0439\u0103\u0445",
                MM: "%d \u0443\u0439\u0103\u0445",
                y: "\u043f\u0115\u0440 \u00e7\u0443\u043b",
                yy: "%d \u00e7\u0443\u043b"
            },
            ordinal: "%d-\u043c\u0115\u0448",
            week: {dow: 1, doy: 7}
        })
    }

    typeof define == "function" && define.amd && define(["moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();