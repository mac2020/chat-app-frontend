import React from 'react';

const joincreatechat = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="p-8 w-full flex flex-col gap-5 max-w-md rounded bg-gray-600">
      <h1 className="text-2xl font-semibold text-center">Join</h1>
      <div className=''>
      <label htmlFor="name" className="block font-medium mb-2"> 
        Your Name
      </label>
      <input type="text"
      id="name"
      className="w-full bg-gray-400 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-700">

      </input>
      </div>

      <div className=''>
      <label htmlFor="id" className="block font-medium mb-2"> 
        Room ID
      </label>
      <input type="text"
      id="id"
      className="w-full bg-gray-400 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-700">

      </input>
      </div>
    </div>
    
    
    </div>


  );
};

export default joincreatechat;
