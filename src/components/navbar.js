import '../css/navbar.css';

export default function NavBar () {
  return (
    <div className='navbar'>
      <a href='/home'>
        <img src='Home.png'></img>
      </a>
      <a href='/addactivity'>
        <img src='Edit.png'></img>
        </a>
      <a href='/activities'>
        <img src='Rocket.png'></img>
      </a>
      <a href='/progress'>
        <img src='Poll.png'></img>
      </a>
    </div>
  );
}

