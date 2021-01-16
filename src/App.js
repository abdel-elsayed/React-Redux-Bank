import './App.css';
import { useSelector } from 'react-redux';
import Debit from './components/Debit'
import Balance from './components/Balance'
import {Provider} from 'react-redux'

function App() {

  return (
 <>
      <Balance />
      <br/>
      <Debit />
</>
  );
}

export default App;
