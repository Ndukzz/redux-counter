import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

import { useSelector } from "react-redux"
  
function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log("IsAuthenticated: ", isAuthenticated);

  return (
    <>
      <Header />
      { isAuthenticated ? <UserProfile /> : <Auth />}      
      <Counter />
    </>
  );
}

export default App;
