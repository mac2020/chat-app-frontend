import React from 'react';
import chatIcon from "../assets/speak.png"

const joincreatechat = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="p-10 border border-orange-400 w-full flex flex-col gap-5 max-w-md rounded bg-gray-700">

      <div>
        <img src={chatIcon} className=" mx-auto w-16 "></img>
      </div>
      <h1 className="text-2xl font-semibold text-center">Join Room</h1>

      {/*Your Name label with input field*/}
      <div className=''>
      <label htmlFor="name" className="block font-medium mb-2"> 
        Your Name
      </label>
      <input type="text" 
      id="name"
      className="w-full bg-gray-400 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-700">
      </input>
      </div>

  {/*Room id label with input field*/}
      <div className=''>
      <label htmlFor="id" className="block font-medium mb-2"> 
        Room ID
      </label>
      <input type="text"
      id="id"
      className="w-full bg-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
      </input>
      </div>

{/*button*/}
<div className="flex justify-center gap-3">
  <button className="px-3 py-2 bg-blue-500 hover:bg-blue-900 rounded">
    Join Room
  </button>
  <button className="px-3 py-2 bg-green-500 hover:bg-green-900 rounded">
    Creat Room
  </button>


</div>

    </div>
    </div>


  );
};

export default joincreatechat;
