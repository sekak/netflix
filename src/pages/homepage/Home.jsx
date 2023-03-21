 import Feature from '../../component/Featured/Feature'
import List from '../../component/List/List'
import Navbar from '../../component/Navbar/Navbar'
import './home.css'

const Home = () => {
  return (
	<div className='home'>
	  <Navbar/>
	  <Feature type=""/>
	  <List/>
	  <List/>
	  <List/>
	  <List/>
	  <List/>
	  {/* <List/>
	  <List/> */}
	</div>
  )
}

export default Home
