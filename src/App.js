import { useState } from 'react';
import './App.css';
import gatlingLogo from './testAleloTransparente.png';
import ReactTooltip from 'react-tooltip';
import Collapsible from './Collapsible';

function App() {
  const [link, setLink] = useState('');
  const [showResults, setShowResult] = useState(false);
  const [buttonSelected, setButtonSelected] = useState('');

  function handleLink(params) {
    !showResults && setShowResult(true);
    setLink(params);
    setButtonSelected(params);
  };

  return (
    <>
      <div class="tittleBar">
        <div class="tittleText">
          <h1>v1</h1>
        </div>
      </div>

      <div class="container">
        <div class="allTest">
          <div class="test1"> 
            <Collapsible version="X" date="X/X/XXXX" platform="Android" onClick={()=>handleLink('https://vivinicius.github.io/relatoriosRegressivo/relatorio1/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
          <br />
          <div class="test2">
            <Collapsible version="X" date="X/X/XXXX" platform="Web" onClick={()=>handleLink('https://vivinicius.github.io/testAlelo/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
          <br />
          <div class="test2">
            <Collapsible version="X" date="X/X/XXXX" platform="iOS" onClick={()=>handleLink('https://vivinicius.github.io/testAlelo/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
          <br />
          <div class="test2">
            <Collapsible version="X" date="X/X/XXXX" platform="iOS" onClick={()=>handleLink('https://vivinicius.github.io/testAlelo/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
          <br />
        </div>
        


        {showResults ? (
          <div class="linkGatling">
            <iframe src={link} width="40%" height="500px" />
          </div>
        ) : (
          <div class="testAleloTransparente">
            <img src={gatlingLogo} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
