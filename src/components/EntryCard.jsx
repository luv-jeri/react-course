import { useState, useEffect } from 'react';

export default function EntryCard() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Hello i am useEffect');
    return () => {
      console.log('Goodbye i am useEffect');
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '100vw',
        backgroundColor: '#495371',
        color: '#FDEFF4',
        padding: 60,
      }}
    >
      <h1>Your Entered Data </h1>
      <h1>{text}</h1>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type something'
        style={{
          width: '50vw',
          height: '3vh',
          borderRadius: '5px',
          border: '1px solid #FDEFF4',
          padding: '10px',
          fontSize: '1.5rem',
          color: '#FDEFF4',
          backgroundColor: '#495371',
          margin: '10px',
        }}
      />
    </div>
  );
}
