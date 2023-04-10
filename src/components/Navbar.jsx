import {  Link } from "react-router-dom"

const Navbar = () => {

return ( 
          
    <nav className="bg-white border-b-2 border  flex items-center justify-around flex-wrap p-4   w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0  mr-6">
          <Link to="/"className="text-blue-800 text-2xl font-bold text-blue-500 tracking-tight">Tech Mentor</Link>
        </div>
        <div className="flex items-center flex-shrink-0 text-blue-700  justify-center text-xl font-bold">
            <Link to="/"  exact className=" ml-5 ">Home</Link>
            <Link to="/bootcampslist"  exact className="ml-5">bootcamps</Link>
            <Link to="/courses" exact className="ml-5">Courses</Link>
            {/* <Link to="/createarticle"  exact className="ml-5"> create Articles</Link>
            <Link  onClick={handleLogout} to="/logout" exact className="ml-5">Logout</Link>
            <Link to="/login" className="ml-8">Login</Link>
            <Link to="/signup" className="ml-8">Signup</Link> */}
         </div>
    </nav>
 );

}
export default Navbar;