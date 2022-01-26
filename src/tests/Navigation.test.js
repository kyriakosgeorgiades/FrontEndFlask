import React from 'react';
import { shallow } from 'enzyme';
import Home from '../routes/Home';

describe('Home', () => {
    it("Should render my component", () => {
        const wrapper = shallow(<Home />)
    })
});
