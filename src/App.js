import React, { useState } from 'react';

import Form from './components/Form';

function App() {
const [userNovel, setUserNovel] = useState([]);

const saveDataHandler = (uTitle, uText) => {
  setUserNovel((prevUserNovel) => {
    return [
      ...prevUserNovel,
      { title: uTitle, text: uText, id:Math.random().toString() },
    ]
  });
};
console.log(userNovel);

  return (
    <div>
      <Form onSave={saveDataHandler}/>
    </div>
  );
}

export default App;
