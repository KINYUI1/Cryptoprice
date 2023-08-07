import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>
                    <h2>crypto prices</h2>
                </div>
            </Link>
            <Link to='/Currencies'>
                <div>
                    <h2>Currencies</h2>
                </div>
            </Link>
        
        </div>
      );
}

export default Nav;
