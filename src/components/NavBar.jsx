import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


function NavBar() {

    const { session, setSession } = useContext(AuthContext)
    const navigate = useNavigate()

    function logout() {
        setSession(null)
        localStorage.removeItem('session')
        navigate('/sign-in')
    }
    return (
        <>
            <nav>
                <h1>  <Link to='/' className='navbarListItem'>Miky's Rush
                </Link></h1>

                <div>

                    {session ? <div className='navbarListItems'>   <Link to='/' className='navbarListItem'>
                        Home
                    </Link>
                        <Link to='/new-car' className='navbarListItem'>
                            Masina noua
                        </Link>
                        <p className='navbarListItem'>{session.user.email}</p>
                        <button className='logout-btn' onClick={logout}>Logout</button>
                    </div>
                        : <Link to='/sign-in' className='navbarListItem'>
                            Login
                        </Link>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
