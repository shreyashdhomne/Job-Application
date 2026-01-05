import { Link } from 'react-router-dom';
import './index.css'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {

    const navigate = useNavigate();
    const onClickLogOut = () => {

        const token = Cookies.remove('myToken')

        if (token === undefined) {
            navigate("/login")
        }

    }


    return (
        <nav>

            <Link className='logo' to="/">JobHunt&Co</Link>

            <ul className='my-nav mt-3'>
                <li>
                    <Link className='my-link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='my-link' to="/job">Jobs</Link>
                </li>

            </ul>
            <button onClick={onClickLogOut} className='btn btn-primary'>Logout</button>
        </nav>
    )

}

export default Header;