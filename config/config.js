/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
    address: "localhost",
    port: 8080,
    basePath: "/",
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

    useHttps: false,
    httpsPrivateKey: "",
    httpsCertificate: "",

    language: "en",
    locale: "en-US",
    logLevel: ["INFO", "LOG", "WARN", "ERROR"],
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        // iCloud Calendar
        {
            module: "calendar",
            header: "Personal Calendar",
            position: "top_left",
            config: {
                calendars: [
                    {
                        symbol: "calendar",
                        url: "webcal://p135-caldav.icloud.com/published/2/MTcyNDE1Njk5NjUxNzI0MTsuePvzkkb_yBbZdOm23g4pEDk9P1mJ7MRDxVHcmDec"
                    }
                ],
                maximumEntries: 10,
                maximumNumberOfDays: 14,
                fade: false,
                dateFormat: "ddd, MMM D",
                timeFormat: "absolute",
                fullDayEventDateFormat: "ddd, MMM D",
                showLocation: true,
                getRelative: 0,
                urgency: 7,
                tableClass: "small",
                titleReplace: {
                    "Geburtstag von ": "",
                    "Birthday of ": ""
                }
            }
        },
        // Combined Government Holidays (Germany + NRW) using ICS feeds
        {
            module: "calendar",
            header: "Government Holidays (Germany & NRW)",
            position: "top_left",
            config: {
                calendars: [
                    {
                        symbol: "flag",
                        url: "https://www.ferienwiki.de/exports/feiertage/2025/de"
                    },
                    {
                        symbol: "calendar-star",
                        url: "https://www.ferienwiki.de/exports/feiertage/2025/de/nw"
                    }
                ],
                maximumEntries: 30,
                maximumNumberOfDays: 200, // Show next 30 days only
                fade: false,
                dateFormat: "ddd, MMM D",
                timeFormat: "absolute",
                fullDayEventDateFormat: "ddd, MMM D",
                tableClass: "small"
            }
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: "weather",
            position: "top_right",
            config: {
                weatherProvider: "openmeteo",
                type: "current",
                lat: 51.4781,
                lon: 6.8625
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                weatherProvider: "openmeteo",
                type: "forecast",
                lat: 51.4781,
                lon: 6.8625
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "DW News",
                        url: "https://rss.dw.com/xml/rss-en-all"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
