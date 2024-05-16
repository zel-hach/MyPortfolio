
import Logo from './Logo'
function NavBar() {
  return (
    <div className='fixed w-full bg-emerald-950 hover:bg-green-900'>
    <nav className='flex justify-between p-5'>
      <Logo></Logo>
      <ul className='flex gap-20'>
        <li className='p-3 w-30 rounded-lg border-2 ' ><a href="#Home">Home</a></li>
        <li className='p-3 w-30 rounded-lg border-2'><a href="#AboutMe">About Me</a></li>
        <li className='p-3 w-30 rounded-lg border-2'><a href="#Skills">Skills</a></li>
        <li className='p-3 w-30 rounded-lg border-2'><a href="#Experiences">Experiences</a></li>
        {/* <li className='p-3 w-30 rounded-lg border-2'><a href="#Touch">Touch</a></li> */}
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
