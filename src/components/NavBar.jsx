import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <nav>
                <h1>  <Link to='/' className='navbarListItem'>Miky's Rush
                </Link></h1>

                <div className='navbarListItems'>
                    <Link to='/' className='navbarListItem'>
                        Home
                    </Link>
                    <Link to='/new-car' className='navbarListItem'>
                        Masina noua
                    </Link>
                    <Link to='/sign-in' className='navbarListItem'>
                        Login
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar
