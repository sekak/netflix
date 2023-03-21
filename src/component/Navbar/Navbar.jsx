import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';  
const netflix = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
const user = "https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
const Navbar = () => {
	const [Open, setOpen] = useState(true);
	const [Scroll, setScroll] = useState(false);

	 window.onscroll = () =>{
		 setScroll(window.pageYOffset === 0 ? false : true);
		 return() => (window.onscroll = null)
	 };

	console.log(Scroll)
	return (
		<div onScroll className='navbar' style={Scroll ?  {backgroundColor:'#0b0b0b'} : null}>
			<div className="container">
				<div className="left">
					<img alt="netflix" src={netflix} className='img' />
					<span className="link">Homepage</span>
					<span className="link">Series</span>
					<span className="link">Movies new and Popular</span>
					<span className="link">My list</span>
				</div>
				<div className="right">
					<SearchIcon style={{ fontSize: '30px' }} className='icon_right' />
					<span className="KID">KID</span>
					<NotificationsIcon style={{ fontSize: '30px' }} className='icon_right' />
					<img alt='user'    src={user} className='imguser' />
					<div className='droparrow'>
					<ArrowDropDownIcon  onClick={() => setOpen(!Open)} style={{ fontSize: '30px' }} className='icon_right' />
					<div className={Open ? "profile" : "option"}>
						<span onClick={() => setOpen(!Open)} className="setting">Settings</span>
						<span  onClick={() => setOpen(!Open)} className="setting">About</span>
					</div>

					</div>

				</div>
			</div>

		</div>
   )
}








export default Navbar
