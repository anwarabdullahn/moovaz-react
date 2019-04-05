import React from 'react';
import { shallow } from 'enzyme';
import Topic from './Topic';
describe('Topic', () => {
	it('should render topic correctly in "debug" mode', () => {
        expect(shallow(<Topic debug />)).toMatchSnapshot();
	});
});
