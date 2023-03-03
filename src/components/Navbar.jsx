import React, { useState, useEffect} from "react";
import { useDebounce } from 'use-debounce';
import hubLogo from '../assets/images/logo.png'
import SearchIcon  from '../assets/images/search.png';
import { useStateContext } from '../contexts/StateContextProvider';

const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get('query');

export const Navbar = ({ whiteTheme, setWhiteTheme}) => {
  const { setSearchTerm } = useStateContext();
  const [text, setText] = useState(query);
  const [debouncedValue] = useDebounce(text, 300);

  const handleTextChange = (e) => {
    if(query){
searchParams.delete('query');
    const newSearch = searchParams.toString() ? `?${searchParams.toString()}` : '';
    const newUrl = `${window.location.pathname}${newSearch}`;
    window.history.replaceState(null, '', newUrl);
    }
    
    setText(e.target.value)
  }

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <>
    <div className="flex justify-between items-center p-5 mx-3 phone:mt-3">
      <img
        className="h-20 w-20 phone:hidden"
        src={hubLogo}
        alt="Google Logo"
      />
      <div className="relative w-1/2 big-tablet:w-3/5 phone:w-4/5 small-phone:w-full">
        <div className="flex rounded-full items-center border border-gray-500 py-2">
            <input
              className=" bg-transparent ml-10 w-full text-gray-200 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              value={text}
              placeholder="Search anything"
              aria-label="Search  anything"
              onChange={handleTextChange}
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
      <span onClick={() => setWhiteTheme(!whiteTheme)} className="bg-purple flex items-center justify-center h-12 w-12 pt-1 leading-12 hover:bg-white-secondary hover:cursor-pointer text-white text-xl rounded-full small-phone:hidden" >
         { whiteTheme ? '🌙' : '🌞'}
        </span>
    </div>
    </>
  )
}
