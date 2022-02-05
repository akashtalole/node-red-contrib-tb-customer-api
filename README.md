node-red-contrib-tb-customer-api
================

Node-RED node for tb-customer-api

 ThingsBoard open-source IoT platform REST API documentation.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-tb-customer-api, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tb-customer-api

## Usage

### Methods

#### POST /api/customer

Creates or Updates the Customer. When creating customer, platform generates Customer Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Customer Id will be present in the response. Specify existing Customer Id to update the Customer. Referencing non-existing Customer Id will cause 'Not Found' error.

Available for users with 'TENANT_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /api/customer/{customerId}

Get the Customer object based on the provided Customer Id. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    customerId : string
     
    Accept : 'application/json'

#### DELETE /api/customer/{customerId}

Deletes the Customer and all customer Users. All assigned Dashboards, Assets, Devices, etc. will be unassigned but not deleted. Referencing non-existing Customer Id will cause an error.

Available for users with 'TENANT_ADMIN' authority.

    customerId : string
     
    Accept : 'application/json'

#### GET /api/customer/{customerId}/shortInfo

Get the short customer object that contains only the title and 'isPublic' flag. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    customerId : string
     
    Accept : 'application/json'

#### GET /api/customer/{customerId}/title

Get the title of the customer. If the user has the authority of 'Tenant Administrator', the server checks that the customer is owned by the same tenant. If the user has the authority of 'Customer User', the server checks that the user belongs to the customer.

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    customerId : string
     
    Accept : 'application/json'

#### GET /api/customers{?page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of customers owned by tenant. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' authority.

    pageSize : integer
    page : integer
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'

#### GET /api/tenant/customers{?customerTitle}

Get the Customer using Customer Title. 

Available for users with 'TENANT_ADMIN' authority.

    customerTitle : string
     
    Accept : 'application/json'


## License

#### Apache License Version 2.0

https://github.com/thingsboard/thingsboard/blob/master/LICENSE