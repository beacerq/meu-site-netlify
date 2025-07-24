	var updateData = {
	    "visitorLoginState": "No",
	    "visitorId": "118g0f3veko516ukekalp3cc59",
	    "visitorSessionID": "118g0f3veko516ukekalp3cc59",
	    "visitorType": "new customer",
	    "visitorLifetimeValue": 0
	};

	window.onload = function() {
	    var eventObj = {
	        "event": "tray.updateGTM"
	    };
	    updateData = jQuery.extend(updateData, {
	        "siteSearchFrom": document.referrer
	    });
	    dataLayer.push(jQuery.extend(eventObj, updateData));

	    console.info('[DataLayer] UpdateGTM executed.')
	};