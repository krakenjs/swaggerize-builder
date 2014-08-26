'use strict';

var test = require('tape'),
    thing = require('core-util-is'),
    swaggerize = require('../lib/index'),
    path = require('path');

test('configure', function (t) {

    t.test('fail no options', function (t) {
        t.plan(1);

        t.throws(function () {
            swaggerize();
        }, 'throws exception.');
    });

    t.test('fail no api definition', function (t) {
        t.plan(1);

        t.throws(function () {
            swaggerize({});
        }, 'throws exception.');
    });

    t.test('api', function (t) {
        t.plan(4);

        var options = swaggerize({
          api: require('./fixtures/api.json')
        });

        t.ok(thing.isObject(options), 'returns object.');
        t.ok(thing.isObject(options.api), 'returns options.api object.');
        t.ok(thing.isArray(options.routes), 'returns options.routes array.');
        t.strictEqual(options.routes.length, 4, 'routes.length 4.');
    });

});
