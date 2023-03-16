export const data = [
    {
        "pass": "success",
        "data": {
            "pubfigMin": [
                "https://a.pub.network/bradsdeals-com/pubfig.min.js"
            ],
            "pubfigEngine": [
                "https://a.pub.network/core/pubfig/1d27a639f02ac06bc218bbc6f428f5a8bd083174/pubfig.engine.js"
            ],
            "pubfigMessaging": [
                "https://a.pub.network/core/pubfig/1d27a639f02ac06bc218bbc6f428f5a8bd083174/pubfig.messaging.js"
            ]
        },
        "name": "1: Check to see if pubfig loads in the network tab"
    },
    {
        "pass": "success",
        "data": {
            "uniqueGamIds": [
                "15184186,1053034"
            ]
        },
        "name": "2: Check which DFP Network ID is present on the page. Verify that there is only one ID."
    },
    {
        "pass": null,
        "data": null,
        "name": "3: Check for warnings in Google Publisher Console"
    },
    {
        "pass": null,
        "data": null,
        "name": "4: Check the fetch count; if higher than 1, check for rebid"
    },
    {
        "pass": "success",
        "data": {
            "bradsdeals_rail_right_hp_1": [
                {
                    "placementName": "bradsdeals_rail_right_hp_1",
                    "slotId": "bradsdeals_rail_right_hp_1"
                },
                {
                    "placementName": "bradsdeals_rail_right_hp_1",
                    "slotId": "bradsdeals_rail_right_hp_1"
                },
                {
                    "placementName": "bradsdeals_rail_right_hp_1",
                    "slotId": "bradsdeals_rail_right_hp_1"
                }
            ],
            "bradsdeals_rail_right_hp_2": [
                {
                    "placementName": "bradsdeals_rail_right_hp_2",
                    "slotId": "bradsdeals_rail_right_hp_2"
                },
                {
                    "placementName": "bradsdeals_rail_right_hp_2",
                    "slotId": "bradsdeals_rail_right_hp_2"
                }
            ],
            "bradsdeals_rail_right_hp_3": [
                {
                    "placementName": "bradsdeals_rail_right_hp_3",
                    "slotId": "bradsdeals_rail_right_hp_3"
                },
                {
                    "placementName": "bradsdeals_rail_right_hp_3",
                    "slotId": "bradsdeals_rail_right_hp_3"
                }
            ]
        },
        "name": "5: Check for multiple instances of the same DIV/slot ID"
    },
    {
        "pass": "success",
        "data": {
            "scripts": [
                "freestar.queue.push(function() {\n    googletag.pubads().setTargeting('key1', 'value'); googletag.pubads().setTargeting('key2', 'value'); googletag.pubads().setTargeting('key3', 'value');\n}); "
            ]
        },
        "name": "6: Key values: check for setTargeting() function on page; if present, verify key/values in GAM console"
    },
    {
        "pass": "success",
        "data": {
            "confiantExists": [
                "https://cdn.confiant-integrations.net/gptprebidnative/202212211045/wrap.js",
                "https://cdn.confiant-integrations.net/qaKtxuL1KR_2Tfmz0NmPaAudsBc/gpt_and_prebid/config.js"
            ]
        },
        "name": "7: Check to make sure the ad quality vendor is present on both desktop and mobile"
    },
    {
        "pass": "success",
        "data": {
            "pubfig": [
                "https://a.pub.network/bradsdeals-com/pubfig.min.js"
            ],
            "cls": [
                "https://a.pub.network/core/pubfig/cls.css"
            ],
            "headCode": [
                "\n  var freestar = freestar || {};\n  freestar.hitTime = Date.now();\n  freestar.queue = freestar.queue || [];\n  freestar.config = freestar.config || {};\n  freestar.debug = window.location.search.indexOf('fsdebug') === -1 ? false : true;\n  // Tag IDs set here, must match Tags served in the Body for proper setup\n  freestar.config.enabled_slots = [];\n  !function(a,b){var c=b.getElementsByTagName(\"script\")[0],d=b.createElement(\"script\"),e=\"https://a.pub.network/bradsdeals-com\";e+=freestar.debug?\"/qa/pubfig.min.js\":\"/pubfig.min.js\",d.async=!0,d.src=e,c.parentNode.insertBefore(d,c)}(window,document);\n  freestar.initCallback = function () { (freestar.config.enabled_slots.length === 0) ? freestar.initCallbackCalled = false : freestar.newAdSlots(freestar.config.enabled_slots) }\n"
            ]
        },
        "name": "8: Check the head code; verify the Pubfig and CLS links, as well as the head script"
    },
    {
        "pass": "success",
        "data": {
            "pubfigVersion": "4.40.1"
        },
        "name": "9: Check the version of Pubfig"
    },
    {
        "pass": "success",
        "data": {
            "integrationType": "Default"
        },
        "name": "10: Verify integration type: default, React Component, or newAdSlots"
    },
    {
        "data": {},
        "name": "11: Check for any Pubfig-related Javascript errors that might be coming from us"
    },
    {
        "pass": "success",
        "data": {
            "uniqueBidders": [
                "appnexus",
                "colossusssp",
                "criteo",
                "ix",
                "grid",
                "pubmatic",
                "rubicon",
                "sharethrough",
                "sovrn",
                "triplelift",
                "onemobile",
                "yahoossp",
                "fsxs2s"
            ]
        },
        "name": "12: Check fsprebid.adUnits to make sure demand exists"
    },
    {
        "pass": "success",
        "data": {
            "consentString": "Not in GDPR region\""
        },
        "name": "13: Check the GDPR consent string"
    },
    {
        "pass": null,
        "data": null,
        "name": "14: Check if the ads display correctly"
    },
    {
        "pass": null,
        "data": null,
        "name": "15: Check if the Freestar products work (sticky footer, sidewalls, dynamic ads, etc)"
    },
    {
        "pass": "success",
        "data": {},
        "name": "16: Pub-Owned GAM - Determine if an existing Prebid installation exists"
    },
    {
        "pass": "success",
        "data": null,
        "name": "17: Pub-Owned GAM - Check that channel variables are properly mapped on page"
    }
]