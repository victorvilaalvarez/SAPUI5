//@ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */
QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function () {
    "use strict";
    sap.ui.require([
        "C23C249/invoices/test/Integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});