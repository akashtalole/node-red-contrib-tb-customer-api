var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('tb-customer-api node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'tb-customer-api');
            done();
        });
    });

    it('should handle saveCustomerUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'saveCustomerUsingPOST',
                saveCustomerUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getCustomerByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'getCustomerByIdUsingGET',
                getCustomerByIdUsingGET_customerId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteCustomerUsingDELETE()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'deleteCustomerUsingDELETE',
                deleteCustomerUsingDELETE_customerId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getShortCustomerInfoByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'getShortCustomerInfoByIdUsingGET',
                getShortCustomerInfoByIdUsingGET_customerId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getCustomerTitleByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'getCustomerTitleByIdUsingGET',
                getCustomerTitleByIdUsingGET_customerId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getCustomersUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'getCustomersUsingGET',
                getCustomersUsingGET_pageSize: '<node property>', // (1) define node properties
                getCustomersUsingGET_page: '<node property>', // (1) define node properties
                getCustomersUsingGET_textSearch: '<node property>', // (1) define node properties
                getCustomersUsingGET_sortProperty: '<node property>', // (1) define node properties
                getCustomersUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantCustomerUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-customer-api', name: 'tb-customer-api',
                method: 'getTenantCustomerUsingGET',
                getTenantCustomerUsingGET_customerTitle: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
