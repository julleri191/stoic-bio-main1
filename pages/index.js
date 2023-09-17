import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/public/images/profile.jpg'
import Link from '@/components/Links.js'
import { MdEmail } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { useEffect, useMemo, useState } from 'react'
import { FloatButton, Tooltip } from 'antd';
import Bio from '@/components/Bio'
import EmailList from '@/components/EmailList'

export default function Home() {
  const [arrow, setArrow] = useState('Show');

  const text = <span>EMAIL ME</span>;

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
    <>
      <Head>
        <title>Hamudi</title>
        <meta name="description" content="Check out my Social Media Accounts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Float */}
      <Tooltip placement="left" title={text} arrow={mergedArrow} color='blue'>
        <FloatButton 
          icon={<MdEmail />}
          type='primary'
          onClick={() => {
          window.location.href = "mailto:hamudisabri@gmail.com";
        }}/>
      </Tooltip>

      <div class='h-screen flex flex-col justify-center items-center text-white'>
      <div>
        <Image
              src={Profile} 
              alt="image"
              className='w-24 rounded-full m-4 shadow-xl transition-all grayscale'
            />
      </div>
      
      <h1 className='font-bold text-lg'>Hamudi</h1>
      <h2 className='text-[18px] mb-2 text-center'>&quot;"All are chosen, but only a few will choose."
<br /></h2>

      <Bio />
      
      <div class="m-4 w-[300px] sm:w-[400px] flex flex-col justify-center items-center">
        {/* <EmailList /> */}
        <Link Name={'Join my discord community'} Link={"https://discord.gg/u3md6jE9kJ"}/>
        <Link Name={'Wealth Creation Courses'} Link={"https://payhip.com/b/pQZHf"}/>
      </div>

      {/* <h1 className='text-[25px] selection:bg-transparent cursor-default'>🔗</h1> */}
        <div className='border px-2 rounded-full flex justify-center items-center text-[#939393] border-[#939393] gap-1'>
          <AiFillEye />
          <h1>700k+</h1>
        </div>
  </div>
    </>
  )
}
