//@ts-nocheck
sap.ui.define([
	"C23C249/invoices/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"
],
	/**
	* @param {typeof sap.ui.test.opaQunit} opaQunit
	*/
	function (mockserver, opaQunit) {
		QUnit.module("Navigation");
		opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

			mockserver.init();

			//Arrangements
			Given.iStartMyUIComponent({
				componentConfig: {
					name: "C23C249.invoices"
				}
			});
			//Actions
			When.onTheAppPage.iSayHelloDialogButton();
			//Assertions
			Then.onTheAppPage.iSeeTheHelloDialog();

			Then.iTeardownMyApp();

		});
	});