const GridMapPse = (check) => {

    //switch statement based on check name
    //column array filled with object
    //rows array filled with object

    let columns = [];
    let rows = [];

    // Check 1
    if (check.name === '1: Check to see if pubfig loads in the network tab') {

        rows =
            [{
                pubfigEngine: check.data.pubfigEngine,
                pubfigMessaging: check.data.pubfigMessaging,
                pubfigMin: check.data.pubfigMin,
                id: 1
            }];


        columns = [{ field: 'pubfigMin', headerName: 'Pubfig', width: 400 },
        { field: 'pubfigEngine', headerName: 'Pubfig Engine', width: 400 },
        { field: 'pubfigMessaging', headerName: 'Pubfig Messaging', width: 400 }
        ]

    };

    // Check 2

    if (check.name === '2: Check which DFP Network ID is present on the page. Verify that there is only one ID.') {
        console.log(check.data.uniqueGamIds);

        rows = [{
            uniqueGamIds: check.data.uniqueGamIds,
            id: 1
        }];

        columns = [{ field: 'uniqueGamIds', headerName: 'Unique GAM IDs', width: 270 }]
    };

    // Check 3

    if (check.name === '3: Check for warnings in Google Publisher Console') {

        console.log('fffff', check.data);

        rows = [
            { info: "Big String" },
            { id: 1 }
        ];

        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 4

    if (check.name === '4: Check the fetch count; if higher than 1, check for rebid') {

        console.log('fffff', check.data);

        rows = [{
            info: "Big String",
            id: 1
        }];
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 5

    if (check.name === '5: Check for multiple instances of the same DIV/slot ID') {

        var placementNames = check.data; 
        

        for (const key in placementNames){
            console.log("check5key", key); 
            console.log("check5343" , placementNames[key]);
            var duplicate = placementNames[key][0]; 
            
            
            var newObject = {
                placementName: duplicate.placementName, 
                slotId: duplicate.slotId, 
                timesFound: placementNames[key].length,
                id: duplicate.placementName
            }
            console.log("placementNameskey", placementNames[key].length); 

            rows.push(newObject); 

            }

        console.log(placementNames);
        console.log('check5', check.data);



        columns = [
            { field: 'placementName', headerName: 'Placement Name', width: 270 },
            { field: 'slotId', headerName: 'Slot ID', width: 270 }, 
            { field: 'timesFound', headerName: '# of Times Found', width: 270 }
        ]
    };

    // Check 6

    if (check.name === '6: Key values: check for setTargeting() function on page; if present, verify key/values in GAM console') {

        console.log('Check 6', check.data);

        rows = [{
            scripts: check.data.scripts,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'scripts', headerName: 'Scripts', width: 500 }]
    };

    // Check 7

    if (check.name === '7: Check to make sure the ad quality vendor is present on both desktop and mobile') {

        console.log('fffff', check.data.confiantExists);

        rows = [{
            confiantScripts: check.data.confiantExists,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'confiantScripts', headerName: 'Confiant Scripts', width: 900 }]
    };
    // Check 8

    if (check.name === '8: Check the head code; verify the Pubfig and CLS links, as well as the head script') {

        console.log('fffff', check.data);

        rows = [{
            pubfig: check.data.pubfig,
            cls: check.data.cls,
            headCode: check.data.headCode,
            id: 1
        }];
        
        console.log(rows);
        columns = [
        { field: 'pubfig', headerName: 'Pubfig', width: 270 },
        { field: 'cls', headerName: 'CLS', width: 270 },
        { field: 'headCode', headerName: 'Head Code', width: 500 }
    ]
    };
    // Check 9

    if (check.name === '9: Check the version of Pubfig') {

        console.log('fffff', check.data);

        rows = [{
            pubfigVersion: check.data.pubfigVersion,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'pubfigVersion', headerName: 'Pubfig Version', width: 500 }]
    };
    // Check 10

    if (check.name === '10: Verify integration type: default, React Component, or newAdSlots') {

        console.log('fffff', check.data);

        rows = [{
            integrationType: check.data.integrationType,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'integrationType', headerName: 'Pubfig Integration Type', width: 500 }]
    };

    // Check 11

    if (check.name === '11: Check for any Pubfig-related Javascript errors that might be coming from us') {

        console.log('fffff', check.data);

        rows = [{
            info: "Big String",
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 12

    if (check.name === '12: Check fsprebid.adUnits to make sure demand exists') {

        
        var biddersArray = check.data.uniqueBidders; 
        console.log('biddersArray', biddersArray);

        
        rows = [{
            uniqueBidders: check.data.uniqueBidders,
            id: check.data.uniqueBidders
        }];
        
        console.log(rows);
        columns = [{ field: 'uniqueBidders', headerName: 'Bidder Name', width: 500 }]
    };

    // Check 13

    if (check.name === '13: Check the GDPR consent string') {

        console.log('fffff', check.data);

        rows = [{
            consentString: check.data.consentString,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'consentString', headerName: 'Consent String', width: 500 }]
    };
    // Check 14

    if (check.name === '14: Check if the ads display correctly') {

        console.log('fffff', check.data);

        rows = [{
            info: "Big String",
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 15

    if (check.name === '15: Check if the Freestar products work (sticky footer, sidewalls, dynamic ads, etc)') {

        console.log('fffff', check.data);

        rows = [{
            info: "Big String",
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 16

    if (check.name === '16: Pub-Owned GAM - Determine if an existing Prebid installation exists') {

        console.log('check16', check.data.pbjsVersion);

        rows = [{
            info: check.data.pbjsVersion,
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };

    // Check 17

    if (check.name === '17: Pub-Owned GAM - Check that channel variables are properly mapped on page') {

        
        rows = [{
            info: "Big String",
            id: 1
        }];
        
        console.log(rows);
        columns = [{ field: 'info', headerName: 'Instructions', width: 500 }]
    };


    return {
        columns: columns,
        rows: rows
    }
}


export default GridMapPse;