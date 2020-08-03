import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Panel from '../../src/components/Panel';

describe('<Panel />', () => {
  it('should render a header', () => {
    const component = mount(<Panel />);
    expect(component.find('.header')).to.be.null;
  });
})
