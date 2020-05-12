import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { App } from './App';

const mockStore = configureMockStore();

describe('<App />', () => {
  const store = mockStore({});

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find(App)).toHaveLength(1);
  });
});
