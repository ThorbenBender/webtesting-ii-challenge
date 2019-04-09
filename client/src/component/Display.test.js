import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display', () => {
	it('It displays balls and strikes', () => {
		const wrap = rtl.render(<Display balls={0} strike={0} />);
		expect(wrap.getByText(/balls/i));
		expect(wrap.getByText(/strikes/i));
	});
});
