import React, { useState, useEffect} from "react";
import { useDebounce } from 'use-debounce';
import hubLogo from '../assets/images/logo.png'
import SearchIcon  from '../assets/images/search.png';
import { useStateContext } from '../contexts/StateContextProvider';

export const Home = () => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
    <div className="flex justify-between mb-24 p-5 mx-3">
      <img
        className="h-20 w-20"
        src={hubLogo}
        alt="Google Logo"
      />
      <span className="bg-purple flex items-center justify-center h-12 w-12 mt-1.5 pt-1 leading-12 hover:bg-white-secondary hover:cursor-pointer text-white text-xl rounded-full" >
        🌞
        </span>
        {/* 🌙 */}
    </div>

    <div className="flex flex-col justify-center items-center mb-48">
        <div className='flex flex-col justify-center items-center'>     
          <span className='text-7xl px-4 font-extrabold'>Hub</span> 
          <span className='text-lg mb-5 font-light'>The ultimate search engine for all your needs</span>
        </div>
        
      <div className="relative w-1/2 ">
        <div className="flex rounded-full items-center border border-gray-500 py-2">
            <input
              className=" bg-transparent ml-10 w-full text-gray-200 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              value={text}
              placeholder="Search anything"
              aria-label="Search  anything"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setText(e.target.value);
                  window.location.href = `/search?query=${encodeURIComponent(text)}`;
                }
              }}
              onChange={(e) => setText(e.target.value)}
            />
            {text !== '' && (
              <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
                x
              </button>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-white-pure">
              {/* <SearchIcon className="h-5 w-5" /> */}
              <img src={SearchIcon} alt="" className="h-5 w-5"/>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}
