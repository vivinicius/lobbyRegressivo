import { useState } from 'react';
import './App.css';
import gatlingLogo from './testAleloTransparente.png';
import ReactTooltip from 'react-tooltip';
import Collapsible from './Collapsible';
import CollapsibleCenarios from './CollapsibleCenarios';

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
          <h1>RELATORIO REGRESSIVO V1</h1>
        </div>
      </div>

      <div class="container">
        <div class="allTest">
          <div class="test1">
            <div class="topbar">
              <br />
            </div>
            <Collapsible version="1.2" date="02/02/2000" platform="Android" onClick={()=>handleLink('https://vivinicius.github.io/relatoriosRegressivo/relatorio1/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
          <br />
          <div class="test2">
            <div class="topbar">
              <br />
            </div>
            <Collapsible version="1.1" date="01/01/2000" platform="Android" onClick={()=>handleLink('https://vivinicius.github.io/testAlelo/')}>
              <ReactTooltip />
            </Collapsible>
          </div>
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
