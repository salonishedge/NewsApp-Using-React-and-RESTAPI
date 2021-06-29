import React, {Component} from 'react';
import Navbar from './Navbar.css'


class PageWrapper extends Component{
    render(){
        return(
            <div>
                <nav className="navbar" id="mainNav">
                    
                            <form className="form" action=" ">
                              <input className="textinput" id="sal" type="text" placeholder="Search for Topics"></input>
                      
                              <button className="submit">Search</button>
                            </form>
                            
                        
                </nav>
            </div>
        )
    }

}


export default PageWrapper