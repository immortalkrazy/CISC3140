/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12, //24, done by faisal 12/13/19
	units: "metric", //"metric", done by faisal 12/13/19

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
			position: "center" // "top_left" done by faisal 12/13/19
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ff41bcc157cdd35de2be96b189f98ec7"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "ff41bcc157cdd35de2be96b189f98ec7"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
  			module: "MMM-AVStock",
  			position: "top_bar", //"bottom_bar" is better for `mode:ticker`
 			config: {
    				apiKey : "XS537TXIIQ3C4CND", // https://www.alphavantage.co/
    				timeFormat: "YYYY-MM-DD HH:mm:ss",
    				symbols : ["aapl", "GOOGL", "005930.KS", "AMZN", "UBER", "CSCO", "FB", "MSFT"],
    				alias: ["Apple", "Google", "Samsung", "Amazon", "Uber", "Cisco", "Facebook", "Microsoft"], //Easy name of each symbol. When you use `alias`, the number of symbols and alias should be the same. If value is null or "", symbol string will be used by default.
    				tickerDuration: 60, // Ticker will be cycled once per this second.
    				chartDays: 90, //For `mode:series`, how much daily data will be taken. (max. 90)
    				poolInterval : 1000*15, // (Changed in ver 1.1.0) - Only For Premium Account
    				mode : "ticker", // "table", "ticker", "series"
    				decimals: 3, // number o decimals for all values including decimals (prices, price changes, change%...)
    				candleSticks : false, //show candle sticks if mode is Series
    				coloredCandles : false, //colored bars: red and green for negative and positive candles
    				premiumAccount: false, // To change poolInterval, set this to true - Only For Premium Account
  			}
		},
		// added by faisal on 01/07/2020 for sensor
		{
			module: 'MMM-PIR-Sensor',
			config:	{
				sensorPin: 22,
				powerSaving: true,
				powerSavingDelay: 15,
			}
		},
		// added by faisal on 12/12/19
//		{
//			module: 'MMM-MyPrayerTimes',
//			position: 'top_left',
//			header: 'My Prayer Times',
//			config: {
//				mptLat: null,				// Replace with the latitude of your location
//				mptLon: null,				// Replace with the Longitude of your location
//				mptMethode: 3,			// Which calculation methode is used, see options below
//				mptOffset: "0,0,0,0,0,0,0,0,0"	// Time corrections for your location: Imsak, Fajr, Sunrise, Duhr, Asr, Sunset, Maghrib, Isha, Midnight
//				showSunrise: true,			// Display Sunrise, false if you want to hide
//				showSunset: true,			// Display Sunset, false if you want to hide
//				showMidnight: true,			// Display Midnight, false if you want to hide
//				showImsak: true,			// Display Imsak, false if you want to hide
//				show24Clock: true,			// Default display 24hour clock -> false is 12hour (AM/PM) clock
//			}
//		},

// 12/10/19 Remote control feature is not working with the followu=ing setup, so I am cancelling it

//    			module: 'MMM-Remote-Control'
//    			// uncomment the following line to show the URL of the remote control on the mirror
//    			position: 'bottom_left'
//    			// you can hide this module afterwards from the remote control itself
//    			config: {
//        			customCommand: {},  // Optional, See "Using Custom Commands" below
//        			customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
//        			showModuleApiMenu: true, // Optional, Enable the Module Controls menu
//        			apiKey: "",         // Optional, See API/README.md for details
//    			}
//		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
