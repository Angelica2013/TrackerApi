import { Link } from 'react-router-dom'
import { Menu } from '../common/Navbar';
import GlobalStyle from '../../styled/GlobalStyles';






const Layout = ({ children }) => {


    return (
        
        <div>

            <Menu>

                <ul><div>
                    <img src="https://covimap.dexignzone.com/xhtml/images/logo.png" alt="" />
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pagina2">Prevention</Link></li>
                    <li><Link to="/pagina2">Qurantine</Link></li>
                    <li><Link to="/pagina2">Pages</Link></li>
                    <li><Link to="/pagina2">About</Link></li>
                    <li><Link to="/pagina2">Help</Link></li>
                    <li><button><Link to={"/tracker"}>tracker</Link></button></li>
                </ul>

            </Menu>


            <main>{children}</main>

        </div>
        
    )
}



export default Layout;