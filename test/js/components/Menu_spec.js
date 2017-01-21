import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Menu from '../../../app/js/components/Menu';

describe("<Menu/>", function() {
   it("renders", function(){
     const wrapper = shallow(<Menu />);
     expect(wrapper.length).to.equal(1);
   })
});
