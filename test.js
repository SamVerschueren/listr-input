import test from 'ava';
import m from '.';

test('invalid argument', t => {
	t.throws(() => m(), 'Expected `question` to be of type `string`, got `undefined`');
	t.throws(() => m(1), 'Expected `question` to be of type `string`, got `number`');
});
