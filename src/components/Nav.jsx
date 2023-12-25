import {julesLogo} from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 flex '>
        <nav>
            <a href="/">
                <img
                src={julesLogo}
                alt='Logo'
                width={30}
                height={29}               
                />
            <p>Jules store</p>
            </a> 
            
        </nav>
    </header>
  )
}

export default Nav

// const Nav = () => {
//   return (
//     <div>Nav</div>
//   )
// }

// export default Nav