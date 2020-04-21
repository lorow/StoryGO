import React from 'react';
import { shallow, } from 'enzyme';

import ActionButton from '../../components/actionButton';
import AboutPage from './index';

describe("Aboutpage", () => {
  it('has an action button that links to github repo', () => {
    const component = shallow(<AboutPage />);
    expect(component.find(ActionButton).exists()).toBeTruthy();
    expect(component.find(ActionButton).childAt(0).props().href).toEqual("https://github.com/lorow/Soliter");
  });
});