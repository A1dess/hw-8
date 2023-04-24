import AboutPage from './pages/abautPage/AboutPage'
import MainPage from './pages/mainPage/MainPage';
import UserPage from './pages/userPage/userPage';


function App() {

  const users = ["aidess", "aykashi", "dada"]
  return (
    <div className="App">
      <AboutPage/>
      <p>---------------</p>
      <MainPage/>
      <p>---------------</p>
      <UserPage users ={users} active= {false}/>
     
    </div>
  );
}

export default App;
