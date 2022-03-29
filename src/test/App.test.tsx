import React from 'react';
import { shallow } from 'enzyme';
import Container from '../components/Container/Container';

describe('button', () => {
  const component = shallow(<Container />);

  it('should render 1st button', () => {
    expect(component.find('button').at(0)).toBeTruthy();
  });

  it('should be able to click the first button', () => {
    component.find('button').at(0).simulate('click');
  });
});
