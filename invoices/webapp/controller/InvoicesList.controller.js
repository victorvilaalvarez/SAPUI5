// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormater',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}} Controller 
     * @param {typeof sap.ui.model.json.JSONModel } JSONModel
     * @param {typeof sap.ui.model.Filter } Filter
     * @param {typeof sap.ui.model.FilterOperator } FilterOperator 
     */
    function (Controller, JSONModel, InvoicesFormater, Filter, FilterOperator) {
        return Controller.extend("logaligroup.com.invoices.controller.InvoicesList", {
            formatter: InvoicesFormater,
            onInit: function () {
                var oViewModel2 = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel2, "cur");
            },
            onFilterInvoices: function (oEvent) {

                const aFilter = [];
                const sQuery = oEvent.getParameter("query");

                if (sQuery) {

                    aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));

                };

                const oList = this.getView().byId("_IDGenList1");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);


            }

        });
    });