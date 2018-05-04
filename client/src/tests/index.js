import React from 'react';
import {shallow} from 'enzyme';
import Provider from '../client/src/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
