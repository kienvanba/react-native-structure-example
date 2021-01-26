const { buildHomeParams } = require('../utils');

describe('buildHomeParams', () => {
    test('works correctly', () => {
        expect(
            buildHomeParams({
                dataType: 1,
            }),
        ).toMatchSnapshot();
    });
});
