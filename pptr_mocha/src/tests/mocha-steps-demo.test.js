require('mocha-steps');

describe('my smoke test', function() {

    step('login', function() {
    });

    step('buy an item', function() {
    throw new Error('failed');
    });

    step('check my balance', function() {
    });

    xstep('temporarily ignored', function() {
    });

});