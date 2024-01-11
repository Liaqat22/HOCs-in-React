import './App.css';
import ComponentA from './pages/ComponentA';
import ComponentB from './pages/ComponentB';
// import {Routes , Route} from "react-router-dom"


function App() {
  return (
    <>
     {/* <Routes>
      <Route path = "/" element = {<A/>}/>
      <Route path = "b" element = {<B/>}/>
      <Route path = "c" element = {<C/>}/>
     </Routes> */}
     <ComponentA/>
     <ComponentB/>
    </>
  );
}

export default App;
