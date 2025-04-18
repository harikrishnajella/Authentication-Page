import { Link } from 'react-router-dom'

import '../styles/Home.css'

const Home = () => (
    <div className='home-container'>
        <h1>Welcome to User Authentication Page</h1>
        <div>
            <Link to='/register'><button className='button'>Register Page</button></Link>
            <Link to='/login'><button className='button'>Login Page</button></Link>
        </div>
    </div>
)

export default Home








