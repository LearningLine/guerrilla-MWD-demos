require.config({
    paths: {
        externalRandomModule: 'random',
        jquery: 'http://code.jquery.com/jquery' // CDN
    },
    shim: {
        externalRandomModule: {
            deps: [ 'jquery' ],
            exports: 'rollDice'
        }
    }
});

require([ 'developer', 'externalRandomModule' ], function(Developer, rollDice) {
    var jason = new Developer('Jason', 'JavaScript');
    jason.speak();
    jason.code();
    console.log(rollDice());
});
