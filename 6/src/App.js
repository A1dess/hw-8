import logo from './logo.svg';
import './App.css';
import UsersPage from './pages/UsersPage';
import CreatePage from './pages/CreatePage';



import CountPage from './pages/CountPage';
function App() {
  return (
    <div className="App">
     <UsersPage/>
   <CountPage/>
   <CreatePage/>
    </div>
  );
}

export default App;
