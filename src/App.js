import React from 'react';
import store from './store1/configureStore';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div>
      <Tasks />
    </div>
  );
};
export default App;
