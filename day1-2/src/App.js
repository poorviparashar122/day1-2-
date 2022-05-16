// import logo from './logo.svg';
import './App.css';
import {Logo} from './components/logo';
import {Link} from './components/link';
import {Button} from './components/button';



function App() {
  return (
    <div className="App">
    <div className='header'>
    <Logo/>
      <Link/>
      <Button/>
      </div>
    </div>
  );
}

export default App;
