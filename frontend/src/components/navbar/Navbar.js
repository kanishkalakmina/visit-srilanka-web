import React,{useState} from 'react'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const Navbar = () => {

   const [nav, setNav] = useState(false)
   const handelNav = () => {
    setNav(!nav)
   }
 
  return ( 
    <div className=''>
        
        <div className='w-full h-[70px] bg-gradient-to-r from-yellow-500  to-green-800  fixed'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                  <Link to='/'>
                <h1 class="mb-4 text-3xl  md:text-4xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-white from-white">𒆜 𝕍𝕚𝕤𝕚𝕥 𝕊𝕣𝕚𝕃𝕒𝕟𝕜𝕒</span> </h1>
                </Link>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center font-mono font-extrabold text-[18px]'>
                   
                        <li><Link to='festival'>𝔽𝔼𝕊𝕋𝕀𝕍𝔸𝕃𝕊</Link></li>
                        <li><Link to='wild'>𝕎𝕀𝕃𝔻</Link></li>
                        <li><Link to='heritage'>ℍ𝔼ℝ𝕀𝕋𝔸𝔾𝔼</Link></li>
                        <li><Link to='thrills'>𝕋ℍℝ𝕀𝕃𝕃𝕊</Link></li>
                    
                    </ul>
                </div>
                {/*PC menue*/}
                <div onClick={handelNav} className='block md:hidden'>
                    {nav ? <CloseIcon size={30} className='text-white'/> : <SegmentIcon size={30} className='text-white'/>}
                    
                    
                </div>

                {/*Mobile menue*/}
                <div className= {nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                    <ul>
                        <li className='text-1xl'>FESTIVALS</li>
                        <li className='text-1xl'>WILD</li>
                        <li className='text-1xl'>HERITAGE</li>
                        <li className='text-1xl'>THRILLS</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

