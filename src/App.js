// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Ganesh";
  let role = 'Software Engineer'
  const avatar="https://cdn.pixabay.com/photo/2023/09/15/04/05/sea-8254024_640.jpg"
  return (<>
    <h1>My Name is :{name}, And My Role is : {role}</h1>
    <div className="name">This is my first Webpage On React.</div>
    <img src={avatar} alt="Image via pixabay." />

  </>
  );
}

export default App;
