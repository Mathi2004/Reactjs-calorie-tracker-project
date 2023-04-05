import { Outlet, Link } from "react-router-dom";
import './Style.css';
const Layout = () => {
  return (
    <>
     <center><nav style={{border:"5px solid Black",width:"500px",backgroundColor:"black",borderRadius:"20px"}}>
 
            <div>
            <Link to="/" style={{color:'#FFFF00'}}>Home</Link><h1 style={{letterSpacing:"1px"}}> </h1>
            <Link to="/Breakfast" style={{color:'#FFFF00'}}>Breakfast</Link><span >   </span>
            <Link to="/Lunch" style={{color:'#FFFF00'}}>Lunch</Link><span>   </span>
            <Link to="/Dinner" style={{color:'#FFFF00'}}>Dinner</Link><span>   </span>
            <Link to="/Beverage" style={{color:'#FFFF00'}}>Beverage</Link><span>   </span>
            <Link to="/Snacks" style={{color:'#FFFF00'}}>Snacks</Link><span>   </span>
   <br></br>
</div>
      </nav>
      </center>

      <Outlet />
    </>
  )
};

export default Layout