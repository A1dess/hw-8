import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage';
import CountPage from './pages/CountPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
        {/* <MainPage title="hello aidess"/> */}
        {/* <CountPage/> */}
        <UserPage/>
    </div>
  );
}

export default App;
