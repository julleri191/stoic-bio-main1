import Image from "next/image";
import { useSpring, animated, config } from '@react-spring/web';

export default function Link({Logo, Name, Link}) {

  return (
      <button onClick={() => {event.preventDefault();window.open(Link, "_blank");}} className='w-full'>
          <div className='bg-[#1A1A1A] shadow-xl rounded-xl flex justify-center items-center gap-2 px-3 py-5 my-3 transition-all sm:hover:scale-110 lg:hover:shadow-2xl'>
            <p>{Name}</p>
          </div>
      </button>
  );
}