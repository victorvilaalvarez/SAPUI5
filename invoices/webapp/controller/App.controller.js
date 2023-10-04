sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller

 * 
 */
    function (Controller) {
        "use strict";

        return Controller.extend("C23C249.invoices.controller.App",
            {
                onInit: function () {
        
                },


                onShowHello: function () {

                    var oBundle = this.getView().getModel("i18n").getResourceBundle();
                    var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                    var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                    sap.m.MessageToast.show(sMsg, {
                        duration: 3000,                  // default
                        width: "15em",                   // default
                        my: "center bottom",             // default
                        at: "center bottom",             // default
                        of: window,                      // default
                        offset: "0 0",                   // default
                        collision: "fit fit",            // default
                        onClose: null,                   // default
                        autoClose: true,                 // default
                        animationTimingFunction: "ease", // default
                        animationDuration: 1000,         // default
                        closeOnBrowserNavigation: true   // default
                    });

                }

            }


        );





    });

