import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Singleuser from "./pages/Singleuser/Singleuser";
import Newuser from "./pages/Newuser/Newuser";
import Tickets from "./pages/Tickets/Tickets";
import Register from "./pages/Register/Register";
import Singleproject from "./pages/Singleproject/Singleproject"
import Profile from "./pages/Profile/profile"
import Singleticket from "./pages/singleticket/Singleticket";
// import Newproject from "./pages/Newproject/Newproject";
import Newticket from "./pages/Newticket/Newticket"
import Updateticket from "./pages/updateTicket/Updateticket";
import Updateuser from "./pages/Updateuser/Updateuser";
import Addproject from "./pages/Addproject/Addproject";
import Updateproject from "./pages/Updateproject/Updateproject"
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
         {/*project*/}
       <Route path="/">
        <Route index element={<Home />} />
        <Route path=":projectid" element={<Singleproject />} />
        <Route path="/projects/addproject" element={<Addproject />}/>
        <Route path="/projects/updateproject" element={<Updateproject />}/>
        
      






          {/*Users*/}
        <Route path="users">
          <Route index element={<List />}/>
          {/* <Route path="new" element={<Newuser />}/> */}
        </Route>
        <Route path="users/adduser" element={<Newuser/>} />
       <Route path="/users/updateuser" element={<Updateuser />}/>
       <Route path="users/:userid" element={<Singleuser />}/>





        {/*Tickets*/}
        <Route path="tickets" element ={<Tickets/>}/>
        <Route path="/tickets/addticket" element ={<Newticket/>}/>
        <Route path="/tickets/:ticketid" element={<Singleticket />} />
        <Route path="/tickets/updateticket" element={<Updateticket />} />

        {/*Other*/}
        <Route path="register" element ={<Register/>}/>
        <Route path="profile" element ={<Profile/>}/>
        <Route path="login" element ={<Login/>}/>
        
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


