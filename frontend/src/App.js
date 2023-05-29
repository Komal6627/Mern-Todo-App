import './App.css';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';

function App() {
  return (
     <>
        <div>
          <Navbar/>
          <AddTodo/>
        </div>
     </>
  );
}

export default App;
