import React from 'react';
import store from './store1/configureStore';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};
export default App;
