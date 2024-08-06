import logo from './logo.svg';
import './App.css';
import profile from "./profile.png"
import verifiedIcon from "./verified-icon.png"
import Post from './components/Post';
import WritePost from './components/WritePost';
import Sidebar from './components/Sidebar';
import Top from './components/Top';
import Search from './components/Search';
import Whats from './components/Whats';
import Who from './components/Who';

function App() {
  return (
    <div className="flex  lg:container px-2 md:px-5 mx-auto bg-black text-white ">
      {/* ************Left Sidebar */}
      <div className="first flex flex-col md:items-start lg:items-end  w-[10%] md:w-[22%] lg:w-[30%]">
       <Sidebar/>
      </div>

      {/* *************Main Page ************* */}

      <div className="second w-[100%] md:w-[65%] lg:w-[40%] border-[1px] border-x-gray-600/50 border-y-black">

       <Top/>

        <div className="foryou ">
          <WritePost />
         

<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OJ5qyLruMztVWbHS2D1vQIX0tRV6hN8SLt3Q7QzpXL3D3RPZGNSC&usqp=CAE&s" profileName="Elon Musk" profileUsername="elonmusk" time="
Apr 25, 2022" postContent="I hope that even my worst critics remain on Twitter, because that is what free speech means"/>
<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPkdW5cPPVCvynyBZXgACtEmi0vH7sEjPYg&s" profileName="
MoTaz" profileUsername="azaizamotaz9" time="3" postContent="If you saw the things my eyes see, you would lose your mind" postImg="https://pbs.twimg.com/media/F9yVu9WXYAAhkl8?format=jpg&name=900x900"/>
<Post profileImg="https://pbs.twimg.com/profile_images/77846223/profile_400x400.jpg" profileName="Mark Zuckerberg" profileUsername="findkd" time="Jul 6, 2023" postContent="" postImg="https://pbs.twimg.com/media/F0UBCt2XsAA0rK_?format=jpg&name=900x900"/>
<Post profileImg="https://pbs.twimg.com/media/F0UBCt2XsAA0rK_?format=jpg&name=900x900" profileName="Memes.com" profileUsername="memes" time="Jul 6, 2023" postContent="Naps save lives. #memesapp #memes" postImg="https://pbs.twimg.com/media/D1apUfbX0AAzCul?format=jpg&name=small"/>
<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_j1tuEv8rY8WnY7LKrmaM-DmuLyHh0c3xfw&s" profileName="Respectful Memes" profileUsername="Respectful Memes" time="Jun 5, 2022" postContent="" postImg="https://pbs.twimg.com/media/FUbdvY0WUAALOg6?format=jpg&name=small"/>
<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HyGoBdwM_CYB2F20uM4sEPI0AH-st6eAEA&s" profileName="Introvert" profileUsername="introvertsmemes" time="Jun 5, 2022" postContent="Me" postImg="https://pbs.twimg.com/media/Fks4vcIXEAA_4JM?format=jpg&name=small"/>
<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_j1tuEv8rY8WnY7LKrmaM-DmuLyHh0c3xfw&s" profileName="Respectful Memes" profileUsername="Respectful Memes" time="Jun 5, 2022" postContent="" postImg="https://www.tweeteraser.com/resources/wp-content/uploads/2023/10/memes-8280093_640.jpg"/>
<Post profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_j1tuEv8rY8WnY7LKrmaM-DmuLyHh0c3xfw&s" profileName="Respectful Memes" profileUsername="Respectful Memes" time="Jun 5, 2022" postContent="" postImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMIJ36uTWBoV1UfMY4HW8tfRYM2x0jStWxw&s"/>
 
 

        </div>
      </div>

      {/* *************Right Sidebar ************ */}

      <div className="third md:flex flex-col space-y-3 hidden md:w-[35%] lg:w-[30%] px-2 sticky top-0">
        <div className="flex flex-col space-y-3 lg:w-[60%] xl:[70%] sticky top-0">
       <Search />

       <Whats/>
       <Who />

       <div className="terms text-sm text-gray-500  p-3">
        <span className='hover:underline hover:cursor-pointer pr-2'>Terms of Servive </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>Privacy Policy </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>Cookie Policy </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>Accessibility </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>Ads info </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>More </span>
        <span className='hover:underline hover:cursor-pointer pr-2'>&copy; 2024 X Corp.</span>
        </div>

       

        </div>
      </div>
    </div>
  );
}

export default App;
