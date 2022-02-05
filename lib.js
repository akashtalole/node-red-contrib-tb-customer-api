/*jshint -W069 */
/**
 *  ThingsBoard open-source IoT platform REST API documentation.
 * @class TbCustomerApi
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var TbCustomerApi = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function TbCustomerApi(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://demo.thingsboard.io:443';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name TbCustomerApi#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    TbCustomerApi.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Creates or Updates the Customer. When creating customer, platform generates Customer Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Customer Id will be present in the response. Specify existing Customer Id to update the Customer. Referencing non-existing Customer Id will cause 'Not Found' error.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbCustomerApi#saveCustomerUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbCustomerApi.prototype.saveCustomerUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the Customer object based on the provided Customer Id. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbCustomerApi#getCustomerByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerId - A string value representing the customer id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbCustomerApi.prototype.getCustomerByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer/{customerId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{customerId}', parameters['customerId']);
        
        


        if(parameters['customerId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Deletes the Customer and all customer Users. All assigned Dashboards, Assets, Devices, etc. will be unassigned but not deleted. Referencing non-existing Customer Id will cause an error.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbCustomerApi#deleteCustomerUsingDELETE
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerId - A string value representing the customer id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbCustomerApi.prototype.deleteCustomerUsingDELETE = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer/{customerId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{customerId}', parameters['customerId']);
        
        


        if(parameters['customerId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the short customer object that contains only the title and 'isPublic' flag. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbCustomerApi#getShortCustomerInfoByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerId - A string value representing the customer id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbCustomerApi.prototype.getShortCustomerInfoByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer/{customerId}/shortInfo';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{customerId}', parameters['customerId']);
        
        


        if(parameters['customerId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the title of the customer. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbCustomerApi#getCustomerTitleByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerId - A string value representing the customer id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbCustomerApi.prototype.getCustomerTitleByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer/{customerId}/title';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{customerId}', parameters['customerId']);
        
        


        if(parameters['customerId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of customers owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbCustomerApi#getCustomersUsingGET
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the customer title.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbCustomerApi.prototype.getCustomersUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];


                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the Customer using Customer Title. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbCustomerApi#getTenantCustomerUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerTitle - A string value representing the Customer title.
 */
 TbCustomerApi.prototype.getTenantCustomerUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/customers{?customerTitle}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];


                if(parameters['customerTitle'] !== undefined){
                    queryParameters['customerTitle'] = parameters['customerTitle'];
                }
        
        
        


        if(parameters['customerTitle'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerTitle'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return TbCustomerApi;
})();

exports.TbCustomerApi = TbCustomerApi;
