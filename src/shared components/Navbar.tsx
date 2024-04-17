import Image from 'next/image';
import * as React from 'react';
import logo from '@/assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";



interface IAppProps {
}

export const Navbar: React.FC<IAppProps> = (props) => {
    return (
      <header >
        <div className='navbar'>
            <div>
                <Image src={logo} alt='logo' width={250} height={100}/>
            </div>
            <div className='locationAndFavoriteListGroup'>
                <div className='currentLocation'><FaLocationDot /></div>
                <div><button className='favoriteListButton'><MdFavorite />Favorite List</button></div>
            </div>
        </div>
      </header>
    );
};
