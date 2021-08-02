import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    console.log({ isLoading, data });
  };

  return (
    <div className='App'>
      <form className='App' onSubmit={onSubmit}>
        <input onChange={handleChange} />
        <button>Generate short url</button>
      </form>
    </div>
  );
}

export default App;
