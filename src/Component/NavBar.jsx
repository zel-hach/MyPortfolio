
import Logo from './Logo'
function NavBar() {
  const scrollTo = (id) =>{
      const scrollTosection =  document.getElementById(id);
      scrollTosection.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className='fixed w-full z-10 ' style={{ backgroundColor: 'white',color:'black' }}>
      <nav className='flex flex-col md:flex-row justify-center md:justify-between p-5' data-aos="fade" >
        <Logo></Logo>
        <ul className='flex md:gap-20'>
          <li className='p-3  rounded-lg font-bold' ><button onClick={()=>scrollTo('Home')}>Home</button></li>
          <li className='p-3  rounded-lg font-bold'><button onClick={()=>scrollTo('AboutMe')}>About Me</button></li>
          <li className='p-3  rounded-lg font-bold'><button onClick={()=>scrollTo('Skills')}>Skills</button></li>
          <li className='p-3  rounded-lg font-bold'><button onClick={()=>scrollTo('Experiences')}>Experiences</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
