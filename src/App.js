import './App.css';
import { useState } from 'react';
import EntryCard from './components/EntryCard';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? (
        <EntryCard />
      ) : (
        <h1>
          Please Allow entry by clicking on toggle
          🥲
        </h1>
      )}
      <button
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          zIndex: '999',
          border: '5px solid #FF7BA9',
          borderRadius: '10px',
          padding: '5px 10px',
          cursor: 'pointer',
          height: '100px',
          width: '250px',
          backgroundColor: '#EF6D6D',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff',
        }}
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </>
  );
}

export default App;
