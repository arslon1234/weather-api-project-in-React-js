import './header.scss'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../../App'
export default function Header() {
       const value = useContext(MyContext)
       return (
              <>
            <div className="header">
                     <p className='head'>World Weather Information Service</p>
                     <p className="head2">
                            Official Foricasts
                     </p>
                     <p className="language">
                            <p>Language</p>
                            <i className=" up fa-solid fa-sort-down"></i>
                            <i className=" down fa-solid fa-caret-up"></i>
                     </p>
                 </div>    
                 <div className="headerDown">
                        <div className="downDesc">
                               <span>Home</span>
                               <div className="line"></div>
                               <span>Personalize</span>
                               <div className="line"></div>
                               <span>What's New</span>
                               <div className="line"></div>
                               <span>Links</span>
                               <div className="line"></div>
                               <span>Severa Wheather</span>
                               <div className="line"></div>
                               <span>Cloud Atlas</span>
                               <div className="line"></div>
                               <span>About</span>
                               <div className="line"></div>
                               <span>Apps</span>
                               <div className="line"></div>
                               <span>Support</span>
                               <div className="line"></div>
                        </div>
                        <div className="downSocial">
                        <i class="fa-brands fa-facebook-square"></i>
                        <i class="fa-brands fa-twitter-square"></i>
                        <i class="fa-brands fa-instagram-square"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        </div>
                 </div>
                 <div className="searchAdd">
                        <div className="addCity">
                        <i class="fa-solid fa-caret-left"></i>
                        <button>Add Your Own City</button>
                        <i class="fa-solid fa-caret-right"></i>
                        <i className="plus fa-solid fa-plus"></i>
                        </div>
                        <div className="searchInput">
                              <input type="text"
                               placeholder="Please enter city/country/territory name"
                               value={value.query}
                               onChange={(e)=>value.setQuery(e.target.value)}
                               onKeyPress={value.search}
                                />
                                <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                 </div>

              </>
       )
}
