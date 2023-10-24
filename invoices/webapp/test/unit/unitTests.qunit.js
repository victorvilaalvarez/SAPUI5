//@ts-nocheck 
/*eslint-disable no-undef */ 
QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require(["C23C249/invoices/test/AllTests"]
        , function () {
            QUnit.start();
        })
});