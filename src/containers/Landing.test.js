import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
describe('Landing', () => {
	it('should render Landing correctly in "debug" mode', () => {
		expect(shallow(<Landing debug />)).toMatchSnapshot();
	});
});
