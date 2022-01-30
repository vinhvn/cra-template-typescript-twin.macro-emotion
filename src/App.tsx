import React from 'react';
import tw, { styled } from 'twin.macro';
import logo from './logo.svg';
import './App.css';

const StyledParagraph = styled('p')`
  ${tw`bg-black`}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledParagraph>
          Edit <code>src/App.tsx</code> and save to reload.
        </StyledParagraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
