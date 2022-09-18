import './App.css';
import CreateNote from './conponents/CreateNote/CreateNote';
import SearchField from './conponents/SearchField/SearchField';

function App() {
  return (
    <div className="App">
      <h1>Search Note!</h1>
      <SearchField />
      <CreateNote />
    </div>
  );
}

export default App;
