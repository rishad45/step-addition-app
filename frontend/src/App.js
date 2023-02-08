import axios from 'axios';
import Homepage from './Pages/Homepage/Homepage';
function App() {
  const handleClick = () => {
    const payload = {
      firstNumber : 1489,
      secondNumber: 714,
    }

    axios.post('/api/step-addition',payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
