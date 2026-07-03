import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <header className='flex bg-blue-100 justify-between p-5'>
            <div className='font-4xl font-bold'>E kart</div>
            <div className='flex gap-5'>
                <Link to="/login" className='font-xl bg-green-400 p-2 rounded'>Login</Link>
                <Link to="/register" className="font-xl bg-green-400 p-2 rounded">Sign Up</Link>
            </div>
        </header>
    </>
  )
}

export default Home