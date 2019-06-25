import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Register from '../../app/components/Register';

describe('<Register />', () => {
  let wrapper;
  it('it renders register without crashing', () => {
    wrapper = shallow(<Register />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
