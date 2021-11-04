const { start } = require('./abortControllerCode');

describe('AbortController test', () => {
    it('Should not throw', () => {
        expect(start()).toBe('foo');
    })
});
