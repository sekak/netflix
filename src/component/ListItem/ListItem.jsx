
import { useState } from 'react'
import './listitem.scss'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import AddIcon from '@mui/icons-material/Add'; import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


const ListItem = ({ index }) => {
	const [absolut, setAbsolut] = useState(false);
	console.log(absolut)
	return (
		<div className='listitem'
			style={{ zIndex: absolut && 999 }}
			onMouseEnter={() => setAbsolut(true)}
			onMouseLeave={() => setAbsolut(false)} >
			{absolut ? 
				(
					<video src={trailer} autoPlay={true} loop style={{width:"400px"}}/>

				)
				:
				(<img
				src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
				alt=""
			/>)
			}

			<div className="iteminfo">
				<div className="icons">
					<PlayArrowOutlinedIcon className='icon' />
					<AddIcon className='icon' />
					<ThumbUpOutlinedIcon className='icon' />
					<ThumbDownOutlinedIcon className='icon' />
					<div className="iteminfotop">
						<span>1 hour 14 mins</span>
						<span className="limit">+16</span>
						<span>1999</span>
					</div>
					<div className="desc">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Praesentium hic rem eveniet error possimus, neque ex doloribus.
					</div>
					<div className="genre">Action</div>
				</div>
			</div>
		</div>
	)
}


export default ListItem
