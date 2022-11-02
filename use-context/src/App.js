import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import { useState } from 'react'
import { DataContext } from './DataContext';

function App() {

const [userInfo, setUserInfo] = useState({
  name: 'Brandon',
  favColor: 'Blue',
  favFood: 'Lasagna',
  favMovie: 'Spider-Man'
})


  return (
    <div className="App">
    
<DataContext.Provider value={{userInfo, setUserInfo}}>
      <ComponentA/>
      <ComponentC/>
</DataContext.Provider>

    </div>
  );
}

export default App;
