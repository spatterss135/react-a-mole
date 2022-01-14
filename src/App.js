import {useState, useEffect} from 'react'
import MoleContainer from './components/MoleContainer';
function App() {

  // useEffect(()=> {
  //   console.log('Whole App')
  // })
  
  function generateMoleHills(){
    let hills = []
    for (let i=0;i<3;i++){
      hills.push(<MoleContainer 
      index={i}
      key={i}
      score={score}
      setScore={setScore}
      />)
    }
    return hills
  }
  let [score, setScore] = useState(0)
  return (
    <div className="App">
      {score}
      <div className='mole-box'>
      {generateMoleHills()}
      </div>
    </div>
  );
}

export default App;
