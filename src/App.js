import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hotel Register</h1>
      <div className='form'> 
     Name: <input type='text' name='Name' />
     Address: <input type='text' name='Address' />
     Phone NO :<input type='text' name='Phone NO' />
     Email :<input type='text' name='Email' />
     Room NO<input type='text' name='RoomNO' />
     checkIn<input type='text' name='checkIn' />
     checkOut<input type='text' name='checkOut' />
     <button className='submit'>submit</button>

      </div>
     <div className="submit"submit></div>
    
    </div>
  );
}

export default App;
