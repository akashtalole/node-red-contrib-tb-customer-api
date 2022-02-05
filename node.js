'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function TbCustomerApiNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.saveCustomerUsingPOST_body = config.saveCustomerUsingPOST_body;
        this.saveCustomerUsingPOST_bodyType = config.saveCustomerUsingPOST_bodyType || 'str';
        this.getCustomerByIdUsingGET_customerId = config.getCustomerByIdUsingGET_customerId;
        this.getCustomerByIdUsingGET_customerIdType = config.getCustomerByIdUsingGET_customerIdType || 'str';
        this.deleteCustomerUsingDELETE_customerId = config.deleteCustomerUsingDELETE_customerId;
        this.deleteCustomerUsingDELETE_customerIdType = config.deleteCustomerUsingDELETE_customerIdType || 'str';
        this.getShortCustomerInfoByIdUsingGET_customerId = config.getShortCustomerInfoByIdUsingGET_customerId;
        this.getShortCustomerInfoByIdUsingGET_customerIdType = config.getShortCustomerInfoByIdUsingGET_customerIdType || 'str';
        this.getCustomerTitleByIdUsingGET_customerId = config.getCustomerTitleByIdUsingGET_customerId;
        this.getCustomerTitleByIdUsingGET_customerIdType = config.getCustomerTitleByIdUsingGET_customerIdType || 'str';
        this.getCustomersUsingGET_pageSize = config.getCustomersUsingGET_pageSize;
        this.getCustomersUsingGET_pageSizeType = config.getCustomersUsingGET_pageSizeType || 'str';
        this.getCustomersUsingGET_page = config.getCustomersUsingGET_page;
        this.getCustomersUsingGET_pageType = config.getCustomersUsingGET_pageType || 'str';
        this.getCustomersUsingGET_textSearch = config.getCustomersUsingGET_textSearch;
        this.getCustomersUsingGET_textSearchType = config.getCustomersUsingGET_textSearchType || 'str';
        this.getCustomersUsingGET_sortProperty = config.getCustomersUsingGET_sortProperty;
        this.getCustomersUsingGET_sortPropertyType = config.getCustomersUsingGET_sortPropertyType || 'str';
        this.getCustomersUsingGET_sortOrder = config.getCustomersUsingGET_sortOrder;
        this.getCustomersUsingGET_sortOrderType = config.getCustomersUsingGET_sortOrderType || 'str';
        this.getTenantCustomerUsingGET_customerTitle = config.getTenantCustomerUsingGET_customerTitle;
        this.getTenantCustomerUsingGET_customerTitleType = config.getTenantCustomerUsingGET_customerTitleType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.TbCustomerApi();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'saveCustomerUsingPOST') {
                var saveCustomerUsingPOST_parameters = [];
                var saveCustomerUsingPOST_nodeParam;
                var saveCustomerUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    saveCustomerUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.saveCustomerUsingPOST(saveCustomerUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'getCustomerByIdUsingGET') {
                var getCustomerByIdUsingGET_parameters = [];
                var getCustomerByIdUsingGET_nodeParam;
                var getCustomerByIdUsingGET_nodeParamType;

                getCustomerByIdUsingGET_nodeParam = node.getCustomerByIdUsingGET_customerId;
                getCustomerByIdUsingGET_nodeParamType = node.getCustomerByIdUsingGET_customerIdType;
                if (getCustomerByIdUsingGET_nodeParamType === 'str') {
                    getCustomerByIdUsingGET_parameters.customerId = getCustomerByIdUsingGET_nodeParam || '';
                } else {
                    getCustomerByIdUsingGET_parameters.customerId = RED.util.getMessageProperty(msg, getCustomerByIdUsingGET_nodeParam);
                }
                getCustomerByIdUsingGET_parameters.customerId = !!getCustomerByIdUsingGET_parameters.customerId ? getCustomerByIdUsingGET_parameters.customerId : msg.payload;
                                result = client.getCustomerByIdUsingGET(getCustomerByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'deleteCustomerUsingDELETE') {
                var deleteCustomerUsingDELETE_parameters = [];
                var deleteCustomerUsingDELETE_nodeParam;
                var deleteCustomerUsingDELETE_nodeParamType;

                deleteCustomerUsingDELETE_nodeParam = node.deleteCustomerUsingDELETE_customerId;
                deleteCustomerUsingDELETE_nodeParamType = node.deleteCustomerUsingDELETE_customerIdType;
                if (deleteCustomerUsingDELETE_nodeParamType === 'str') {
                    deleteCustomerUsingDELETE_parameters.customerId = deleteCustomerUsingDELETE_nodeParam || '';
                } else {
                    deleteCustomerUsingDELETE_parameters.customerId = RED.util.getMessageProperty(msg, deleteCustomerUsingDELETE_nodeParam);
                }
                deleteCustomerUsingDELETE_parameters.customerId = !!deleteCustomerUsingDELETE_parameters.customerId ? deleteCustomerUsingDELETE_parameters.customerId : msg.payload;
                                result = client.deleteCustomerUsingDELETE(deleteCustomerUsingDELETE_parameters);
            }
            if (!errorFlag && node.method === 'getShortCustomerInfoByIdUsingGET') {
                var getShortCustomerInfoByIdUsingGET_parameters = [];
                var getShortCustomerInfoByIdUsingGET_nodeParam;
                var getShortCustomerInfoByIdUsingGET_nodeParamType;

                getShortCustomerInfoByIdUsingGET_nodeParam = node.getShortCustomerInfoByIdUsingGET_customerId;
                getShortCustomerInfoByIdUsingGET_nodeParamType = node.getShortCustomerInfoByIdUsingGET_customerIdType;
                if (getShortCustomerInfoByIdUsingGET_nodeParamType === 'str') {
                    getShortCustomerInfoByIdUsingGET_parameters.customerId = getShortCustomerInfoByIdUsingGET_nodeParam || '';
                } else {
                    getShortCustomerInfoByIdUsingGET_parameters.customerId = RED.util.getMessageProperty(msg, getShortCustomerInfoByIdUsingGET_nodeParam);
                }
                getShortCustomerInfoByIdUsingGET_parameters.customerId = !!getShortCustomerInfoByIdUsingGET_parameters.customerId ? getShortCustomerInfoByIdUsingGET_parameters.customerId : msg.payload;
                                result = client.getShortCustomerInfoByIdUsingGET(getShortCustomerInfoByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getCustomerTitleByIdUsingGET') {
                var getCustomerTitleByIdUsingGET_parameters = [];
                var getCustomerTitleByIdUsingGET_nodeParam;
                var getCustomerTitleByIdUsingGET_nodeParamType;

                getCustomerTitleByIdUsingGET_nodeParam = node.getCustomerTitleByIdUsingGET_customerId;
                getCustomerTitleByIdUsingGET_nodeParamType = node.getCustomerTitleByIdUsingGET_customerIdType;
                if (getCustomerTitleByIdUsingGET_nodeParamType === 'str') {
                    getCustomerTitleByIdUsingGET_parameters.customerId = getCustomerTitleByIdUsingGET_nodeParam || '';
                } else {
                    getCustomerTitleByIdUsingGET_parameters.customerId = RED.util.getMessageProperty(msg, getCustomerTitleByIdUsingGET_nodeParam);
                }
                getCustomerTitleByIdUsingGET_parameters.customerId = !!getCustomerTitleByIdUsingGET_parameters.customerId ? getCustomerTitleByIdUsingGET_parameters.customerId : msg.payload;
                                result = client.getCustomerTitleByIdUsingGET(getCustomerTitleByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getCustomersUsingGET') {
                var getCustomersUsingGET_parameters = [];
                var getCustomersUsingGET_nodeParam;
                var getCustomersUsingGET_nodeParamType;

                getCustomersUsingGET_nodeParam = node.getCustomersUsingGET_pageSize;
                getCustomersUsingGET_nodeParamType = node.getCustomersUsingGET_pageSizeType;
                if (getCustomersUsingGET_nodeParamType === 'str') {
                    getCustomersUsingGET_parameters.pageSize = getCustomersUsingGET_nodeParam || '';
                } else {
                    getCustomersUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getCustomersUsingGET_nodeParam);
                }
                getCustomersUsingGET_parameters.pageSize = !!getCustomersUsingGET_parameters.pageSize ? getCustomersUsingGET_parameters.pageSize : msg.payload;
                
                getCustomersUsingGET_nodeParam = node.getCustomersUsingGET_page;
                getCustomersUsingGET_nodeParamType = node.getCustomersUsingGET_pageType;
                if (getCustomersUsingGET_nodeParamType === 'str') {
                    getCustomersUsingGET_parameters.page = getCustomersUsingGET_nodeParam || '';
                } else {
                    getCustomersUsingGET_parameters.page = RED.util.getMessageProperty(msg, getCustomersUsingGET_nodeParam);
                }
                getCustomersUsingGET_parameters.page = !!getCustomersUsingGET_parameters.page ? getCustomersUsingGET_parameters.page : msg.payload;
                
                getCustomersUsingGET_nodeParam = node.getCustomersUsingGET_textSearch;
                getCustomersUsingGET_nodeParamType = node.getCustomersUsingGET_textSearchType;
                if (getCustomersUsingGET_nodeParamType === 'str') {
                    getCustomersUsingGET_parameters.textSearch = getCustomersUsingGET_nodeParam || '';
                } else {
                    getCustomersUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getCustomersUsingGET_nodeParam);
                }
                getCustomersUsingGET_parameters.textSearch = !!getCustomersUsingGET_parameters.textSearch ? getCustomersUsingGET_parameters.textSearch : msg.payload;
                
                getCustomersUsingGET_nodeParam = node.getCustomersUsingGET_sortProperty;
                getCustomersUsingGET_nodeParamType = node.getCustomersUsingGET_sortPropertyType;
                if (getCustomersUsingGET_nodeParamType === 'str') {
                    getCustomersUsingGET_parameters.sortProperty = getCustomersUsingGET_nodeParam || '';
                } else {
                    getCustomersUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getCustomersUsingGET_nodeParam);
                }
                getCustomersUsingGET_parameters.sortProperty = !!getCustomersUsingGET_parameters.sortProperty ? getCustomersUsingGET_parameters.sortProperty : msg.payload;
                
                getCustomersUsingGET_nodeParam = node.getCustomersUsingGET_sortOrder;
                getCustomersUsingGET_nodeParamType = node.getCustomersUsingGET_sortOrderType;
                if (getCustomersUsingGET_nodeParamType === 'str') {
                    getCustomersUsingGET_parameters.sortOrder = getCustomersUsingGET_nodeParam || '';
                } else {
                    getCustomersUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getCustomersUsingGET_nodeParam);
                }
                getCustomersUsingGET_parameters.sortOrder = !!getCustomersUsingGET_parameters.sortOrder ? getCustomersUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getCustomersUsingGET(getCustomersUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getTenantCustomerUsingGET') {
                var getTenantCustomerUsingGET_parameters = [];
                var getTenantCustomerUsingGET_nodeParam;
                var getTenantCustomerUsingGET_nodeParamType;

                getTenantCustomerUsingGET_nodeParam = node.getTenantCustomerUsingGET_customerTitle;
                getTenantCustomerUsingGET_nodeParamType = node.getTenantCustomerUsingGET_customerTitleType;
                if (getTenantCustomerUsingGET_nodeParamType === 'str') {
                    getTenantCustomerUsingGET_parameters.customerTitle = getTenantCustomerUsingGET_nodeParam || '';
                } else {
                    getTenantCustomerUsingGET_parameters.customerTitle = RED.util.getMessageProperty(msg, getTenantCustomerUsingGET_nodeParam);
                }
                getTenantCustomerUsingGET_parameters.customerTitle = !!getTenantCustomerUsingGET_parameters.customerTitle ? getTenantCustomerUsingGET_parameters.customerTitle : msg.payload;
                                result = client.getTenantCustomerUsingGET(getTenantCustomerUsingGET_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'TbCustomerApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('tb-customer-api', TbCustomerApiNode);
};
