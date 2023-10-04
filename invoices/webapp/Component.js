//@ts-nocheck
sap.ui.define(["sap/ui/core/UIComponent",
    "C23C249/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel"],

    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * 
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("C23C249.invoices.Component", {

            metadata: {

                manifest: "json",

                //  "rootView": {

                //    "viewName": "C23C249.invoices.view.App",
                //    "type": "XML",
                //    "async": true,
                //    "id"   : "app"
                //}

            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                var i18nModel = new ResourceModel({ bundleName: "C23C249.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })
    });