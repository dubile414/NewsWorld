
import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
// import './App.css';



function Navbar(props) {

    const [active, setActive] = useState(false)

    const toggleActive=()=>{
        setActive(!active)
    }



    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">  NewsWorld   </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className='nav-item' ><NavLink  exact  className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'} isActive` } to="/">Home</NavLink></li>


                            <li className=" cards nav-item"><NavLink exact className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'}  isActive`} to="/business">Business</NavLink></li>
                            <li className="nav-item"><NavLink exact className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'} isActive `} to="/entertainment">Entertainment</NavLink></li>

                            <li className="nav-item"><NavLink exact className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'} isActive `} to="/health">Health</NavLink></li>
                            <li className="nav-item"><NavLink exact className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'} isActive `} to="/science">Science</NavLink></li>
                            <li className="nav-item"><NavLink exact className={`nav-link text-${props.mode === 'light' ? 'black' : 'white'} isActive `} to="/sports">Sports</NavLink></li>



                        </ul>

                    <div className={`form-check form-switch mx-3 my-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode   </label>
                    </div>
                    </div>
                </div>
            </nav>


        </div>
    );

}

export default Navbar