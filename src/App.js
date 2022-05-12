import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
// import Singleuser from "./pages/Singleuser/Singleuser";
import Newuser from "./pages/Newuser/Newuser";
import Tickets from "./pages/Tickets/Tickets";
import Register from "./pages/Register/Register";
import Singleproject from "./pages/Singleproject/Singleproject"
import Profile from "./pages/Profile/profile"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/">
        <Route index element={<Home />} />
        <Route path=":projectid" element={<Singleproject />} />
        <Route path="login" element ={<Login/>}/>
        <Route path="users">
          <Route index element={<List />}/>
          {/* <Route path=":userId" element={<Singleuser />}/> */}
          <Route path="new" element={<Newuser />}/>
        </Route>
        <Route path="tickets" element ={<Tickets/>}/>
        <Route path="register" element ={<Register/>}/>
        <Route path="profile" element ={<Profile/>}/>
        
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


