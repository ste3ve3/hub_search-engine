import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from '../components/Loading';

export const Search = () => {
  let { results, loading, getResults, searchTerm } = useStateContext();

  useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('query');
        getResults(`/search.php?search=${query ? query : searchTerm}&pageno=1&country=US&lang=en&perpage=20`);
  }, [searchTerm]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-between space-y-7 mt-7 mb-20">
          {
          results.length === 0 ?
          <div className="flex justify-center items-center h-80 text-4xl text-gray-400">Nothing found!</div>
          :
          results.map(({ site_url, title, description, id, image_url}) => (
            <div key={id} className="w-4/5 m-auto phone:w-11/12">
              <a href={site_url} target="_blank" rel="noreferrer" className="text-gray-400 dark:text-gray-900">
                <div className={image_url ? "flex items-center gap-5 pb-1": "pb-1"}>
                {image_url ? <img src={image_url} alt="" className='w-28 dark:border dark:border-gray-300 phone:hidden'/> : {}}
                <span>
                  <p className="text-sm">{site_url.length > 50 ? site_url.substring(0, 50)+'...' : site_url}</p>
                  <a href={site_url} target="_blank" className="text-lg hover:underline dark:text-purple text-purple visited:text-blue-500 dark:visited:text-blue-500">{title.length > 150 ? title.substring(0, 150)+'...' : title}</a>
                </span>
                </div> 
                <p className="text-lg dark:text-black text-gray-300  ">{ description.length > 300 ? description.substring(0, 300)+'...' : description}</p>
              </a>
            </div>
          ))}
      </div>
  )
}
