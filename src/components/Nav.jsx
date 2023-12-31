import {julesLogo} from '../assets/icons';

const Nav = () => {
  return (
    <header className='p-3'>
        <nav className='flex justify-center space-x-1 lg:pb-5'>
            <a href="/">
                <img
                src={julesLogo}
                alt='Logo'
                width={30}
                height={29}   
                className=''            
                />
            </a> 
            
            <div className='font-bold text-2xl'>Jules store</div>
        </nav>
    </header>
  )
}

export default Nav
