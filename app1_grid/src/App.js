// import logo from './logo.svg';
import './App.css';
import PortfolioView from './views/PortfolioView';
import OverView from './views/OverView';
import WordGame1 from './views/WordGame1';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';



// function MainButton() {
//   const [count, setCount] = useState(0);
//   function btnClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={btnClick}>
//       {count}
//     </button>
//   );
// }


function App() {

    const [count, setCount] = useState(0);
    function btnClick() {
      setCount(count + 1);
    }



  return (
    <div className="App" style={{backgroundColor: 'black',minHeight: '100vh'}}>
      <header className="App-header">
      aWordaGame
      </header>
      <main style={{backgroundColor: '#161e2e', color:'skyblue'}}>
        
        {count%2===0 ? (
          // <PortfolioView/>
          // <OverView/>
          // <hr></hr>
          <WordGame1/>
          // <Game/>
          ) : (
            <Zoom>
              <p>Markup that will be revealed on scroll</p>
            </Zoom>

        )}


      </main>
      <section>
        {/* <MainButton/> */}
        <button onClick={btnClick}>
        {count}
      </button>
      </section>
    </div>
  );
}

export default App;
