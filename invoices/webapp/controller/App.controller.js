// @ts-nocheck
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

        return Controller.extend("logaligroup.com.invoices.controller.App",
            {
                onInit: function () {

                },

                onShowDialogHeader: function () {

                    this.getOwnerComponent().openHelloDialog();


                }




            }




        );





    });

