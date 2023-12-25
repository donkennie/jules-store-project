import {julesLogo} from '../assets/icons';

const Nav = () => {
  return (
    <header className=''>
        <nav className='flex justify-center space-x-1 pb-5'>
            <a href="/">
                <img
                src={julesLogo}
                alt='Logo'
                width={30}
                height={29}               
                />
            </a> 
            
            <div className='font-bold text-2xl'>Jules store</div>
        </nav>
    </header>
  )
}

export default Nav
