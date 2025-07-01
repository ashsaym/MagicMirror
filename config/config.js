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
    
    // Refresh all modules every 15 minutes (900000 milliseconds)
    updateInterval: 900000,

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
        {
            module: "calendar",
            header: "🇩🇪 German Holidays",
            position: "top_left",
            config: {
                calendars: [
                    {
                        symbol: "flag",
                        url: "https://www.ferienwiki.de/exports/feiertage/2025/de"
                    }
                ],
                maximumEntries: 8,
                maximumNumberOfDays: 180,
                fade: false,
                dateFormat: "ddd, MMM D",
                timeFormat: "absolute",
                fullDayEventDateFormat: "ddd, MMM D",
                tableClass: "small"
            }
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
            module: "prayertime", 
            header: "🕌 Prayer Times (Islamic Center Aachen)",
            position: "top_right",
            config: {
                apiVersion: "1",
                calculationMethod: 2, // Islamic Society of North America (ISNA) - commonly used in Europe
                latitudeAdjustmentMethod: 1, // Angle Based Method
                school: 0, // Shafi
                midnightMode: 0, // Standard
                lat: 51.4781, // Aachen coordinates for more accurate local times
                lon: 6.8625,  // Aachen coordinates
                timezone: "Europe/Berlin",
                locationName: "Oberhausen, Germany",
                // Manual adjustments for more accurate times (in minutes)
                tune: "0,0,0,0,0,0,0", // Fajr, Sunrise, Dhuhr, Asr, Sunset, Maghrib, Isha
                showSunrise: true,
                showSunset: true,
                showMidnight: false,
                showImsak: true, // Show Imsak time
                show24Clock: true,
                showDate: false,
                showLocationName: true,
                updateInterval: 60000 * 30, // Update every 30 minutes for accuracy
                animationSpeed: 2500,
                colored: true,
                timeFormat: 24
            }
        },
        {
            module: "newsfeed",
            header: "📰 World News",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "BBC News",
                        url: "http://feeds.bbci.co.uk/news/rss.xml"
                    },
                    {
                        title: "DW News",
                        url: "https://rss.dw.com/xml/rss-en-all"
                    },
                    {
                        title: "CNN Top Stories",
                        url: "http://rss.cnn.com/rss/cnn_topstories.rss"
                    },
                    {
                        title: "Al Jazeera",
                        url: "https://www.aljazeera.com/xml/rss/all.xml"
                    },
                    {
                        title: "Google News",
                        url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                showDescription: true,
                wrapTitle: true,
                wrapDescription: true,
                truncDescription: true,
                lengthDescription: 200,
                hideLoading: false,
                reloadInterval: 300000, // 5 minutes
                updateInterval: 12000, // 12 seconds for smooth transitions
                animationSpeed: 2000,
                maxNewsItems: 0, // Show all items
                ignoreOldItems: false,
                ignoreOlderThan: 24 * 60 * 60 * 1000, // 24 hours
                removeStartTags: ['video', 'audio'],
                removeEndTags: ['video', 'audio'],
                prohibitedWords: [],
                scrollLength: 500,
                logFeedWarnings: false,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
