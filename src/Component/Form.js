import React from 'react';
import { Detail } from '../Constant/Detail';

const Style1 = "flex flex-wrap -mx-3 mb-1";
const Style2 = "w-full px-3";
const Style3 = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1";
const Style4 = "appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

function Form() {
  return (
    <div className="flex flex-col justify-center items-start mt-28 ml-1 mr-1 md:ml-[21.5vw]">
      <form className="w-full max-w-4xl bg-nav_color p-4 rounded-lg shadow-lg">
        <div className="px-3 py-1 text-center">
          <div className="font-bold text-2xl text-black mb-1">Contact Us!</div>
        </div>
        <div className={Style1}>
          {Detail.map((item, index) => (
            <div className={Style2} key={index}>
              <label className={Style3} htmlFor={item.name}>
                {item.label}
              </label>
              <input
                className={Style4}
                id={item.name}
                type={item.type}
                placeholder={item.placeholder}
              />
              
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
        <button class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
</div>
      </form>
    </div>
  );
}

export default Form;
