import React from 'react';
import { shallow , mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import Register from '../../app/components/Register';

describe('<Register />', () => {
  let wrapper;
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


