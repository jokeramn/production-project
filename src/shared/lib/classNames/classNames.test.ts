import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        expect(classNames('someClass', {}, ['hello'])).toBe('someClass hello');
    });
    test('with all params', () => {
        const expected = 'someClass hello1 hello2 kek';

        expect(classNames('someClass', { kek: true }, ['hello1', 'hello2']))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass hello1 hello2';

        expect(classNames('someClass', { kek: false }, ['hello1', 'hello2']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass hello1 hello2';
        const mods: undefined = undefined;

        expect(classNames('someClass', { kek: mods }, ['hello1', 'hello2']))
            .toBe(expected);
    });
});
