import React from 'react';
import { shallow, } from 'enzyme';
import LandingPage from './index';
import ActionButton from '../../components/actionButton';

describe('Landingpage', () => {
  it('Renders the general greeting text', () => {
    const component = shallow(<LandingPage />);
    expect(component.text()).toBeTruthy();
  });

  it('has an action button that is also active', () => {
    const component = shallow(<LandingPage />);
    expect(component.find(ActionButton).childAt(0).props().isLinkActive).toBeTruthy();
  });
});
