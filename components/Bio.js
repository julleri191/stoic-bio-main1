// Icons
import {FaTiktok} from 'react-icons/fa'
import {BsInstagram, BsYoutube, BsTwitter} from 'react-icons/bs'
import { Tooltip, message } from 'antd';
import { useMemo, useState } from 'react';

export default function Bio() {
    const [arrow, setArrow] = useState('Show');

    const text = <span>COMING SOON</span>;

    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
          return false;
        }
        if (arrow === 'Show') {
          return true;
        }
        return {
          pointAtCenter: true,
        };
      }, [arrow]);
      
    return (
        <div className='m-2 flex gap-4 border-4 border-[#1A1A1A] text-[#939393] py-3 px-2 rounded-full'>
            {/* YouTube */}
            <div onClick={() => {event.preventDefault();window.open('https://www.youtube.com/@ssstoic', "_blank");}} className='px-2'>
                <BsYoutube size={20} className='bio transition-all hover:text-white cursor-pointer'/>
            </div>

            {/* TikTok */}
            <div onClick={() => {event.preventDefault();window.open('https://twitter.com/stoic_words', "_blank");}} className='px-2 rounded-full'>
                <BsTwitter size={20} className='bio transition-all hover:text-white cursor-pointer'/>                
            </div>

            {/* Instagram */}
            <div className='px-2 rounded-full'>
                <Tooltip placement="top" title={text} arrow={mergedArrow} color='blue'>
                    <BsInstagram size={20} className='bio transition-all hover:text-white cursor-pointer'/>
                </Tooltip>
            </div>
            
        </div>
    )
}