import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(data.shortUrl);
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 2000);
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
      .catch((err) => console.log({ err }));
  };

  return (
    <div className='App'>
      <div className='container'>
        <form className='form' onSubmit={onSubmit}>
          <input onChange={handleChange} />
          <button>Generate short url</button>
        </form>
        {data && (
          <span className='short-url' onClick={handleCopy}>
            {data.shortUrl}
          </span>
        )}
        <br />
        {copied && <span>Copied!</span>}
      </div>
    </div>
  );
}

export default App;
