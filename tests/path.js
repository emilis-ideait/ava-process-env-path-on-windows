const test = require( 'ava' );

test(
    'path',
    t => {
        t.log( 'PATH', process.env.PATH );
	t.assert( process.env.PATH );
    },
);
