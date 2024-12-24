import React, { useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';

function App() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) || inputValue === '') {
      setValue(inputValue);
      setError('');
      if (inputValue !== '') {
        const num = parseInt(inputValue, 10);
        if (num < 0) {
          setError('Enter a positive value');
          setResult([]);
        } else if (num % 2 === 0) {
          setResult([num + 2, num + 4, num + 6]);
        } else {
          setResult([num + 2, num + 4, num + 6]);
        }
      } else {
        setResult([]);
      }
    } else if (/^-/.test(inputValue)) {
      setError('Enter a positive value');
      setResult([]);
    } else {
      setError('Only numbers are allowed');
      setResult([]);
    }
  };

  return (
    <>
    
     <section className="Login">
      <div className="container">
        <div className="login-container">
          <h2>Number Checker</h2>
          <div className="row justify-content-center align-items-center">
            <form>
              <div className="form-group text-left">
                <label>Enter your Number<span>*</span></label>
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Enter Positive Number" 
                  value={value} 
                  onChange={handleChange} 
                />
                <br/>
                <span className='error'>{error}</span>
                {result.length > 0 && (
                  <div>
                    <h3>Next 3 numbers:</h3>
                    <h4>{result.join(', ')}</h4>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
      </>
      
      
  );
}

export default App;
