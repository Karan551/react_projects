// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  // Adding navbar component with the help of bootstrap.
  return (<>
    <Navbar title='TextUtils' about='About Us' />
    <div className="container my-3">
      <TextForm heading='Enter Text Here:' />
    </div>
  </>
  );
}

export default App;
