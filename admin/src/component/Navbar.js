import React,{useState} from 'react'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const Navbar = () =>{

    const [nav, setNav] = useState(false)
    const handelNav = () => {
     setNav(!nav)
    }
  return (
    <div>
        
        <div className='w-full h-[50px] bg-gradient-to-r from-gray-700  to-gray-500 fixed'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                  <Link to='/'>
                <h1 class="mb-4 text-3xl  md:text-4xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-white from-white">ADMIN </span> </h1>
                </Link>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center font-mono font-extrabold text-[18px]'>
                        
                        <li><Link to='crudfestival'>FESTIVALS</Link></li>
                        <li><Link to='crudwild'>WILD</Link></li>
                        <li><Link to='crudheritage'>HERITAGE</Link></li>
                        <li><Link to='crudthrills'>THRILLS</Link></li>
                        <li><Link to='cruduser'>USER</Link></li>
                    
                    </ul>
                </div>
                {/*PC menue*/}
                <div onClick={handelNav} className='block md:hidden'>
                    {nav ? <CloseIcon size={30} className='text-white'/> : <SegmentIcon size={30} className='text-white'/>}
                    
                    
                </div>

                {/*Mobile menue*/}
                <div className= {nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
                    <ul>
                        <li className='text-1xl'>CRUD_FESTIVALS</li>
                        <li className='text-1xl'>CRUD_WILD</li>
                        <li className='text-1xl'>CRUD_HERITAGE</li>
                        <li className='text-1xl'>CRUD_THRILLS</li>
                        <li className='text-1xl'>CRUD_USER</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
 )
}

