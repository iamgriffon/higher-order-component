import React from 'react';
import './App.scss';
import UserProfile from './Components/user-profile/user-profile';
import UserList from './Components/user-posts/user-lists';


function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile  name='Gustavo Dupin' email='guusilveira@gmail.com' dataSource='https://jsonplaceholder.typicode.com/posts' />
    </div>
  );
}

export default App;
