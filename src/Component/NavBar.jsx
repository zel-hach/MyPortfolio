
import Logo from './Logo'
function NavBar() {
  return (
    <div className='fixed w-full z-10' style={{ backgroundColor: '#57A6A1' }}>
      <nav className='flex flex-col md:flex-row justify-center md:justify-between p-5'>
        <Logo></Logo>
        <ul className='flex md:gap-20'>
          <li className='p-3  rounded-lg font-bold' ><a href="#Home">Home</a></li>
          <li className='p-3  rounded-lg font-bold'><a href="#AboutMe">About Me</a></li>
          <li className='p-3  rounded-lg font-bold'><a href="#Skills">Skills</a></li>
          <li className='p-3  rounded-lg font-bold'><a href="#Experiences">Experiences</a></li>
          {/* <li className='p-3 w-30 rounded-lg border-2'><a href="#Touch">Touch</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
