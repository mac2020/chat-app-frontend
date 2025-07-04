import React, { useState } from 'react';
import chatIcon from "../assets/speak.png"

import { toast } from 'react-hot-toast';



const joincreatechat = () => {
  const [detail, SetDetail]=useState({

    roomId:"12312",
    userName:"mohit",

  });

  // this function will be called when user make change in any input feild & will bring value from frontend & change the object values

  function handleFormInputChange(event){
    SetDetail({

      ...detail,
      [event.target.name]: event.target.value,

    });

  }
// funtion to validate input given on input form
  function formValidate(){

    if(detail.roomId==="" || detail.userName==="")

      {
            toast.error("invalid input");
            return false;


      }

      return true;
  }

    // creating two more funtion based on a button which will be clicked 

    function joinChat(){


      if(formValidate())
{}


    }

function creatRoom(){
   if(formValidate())
       {console.log(detail);

       }

}

  
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
      onChange={handleFormInputChange}
      value={detail.userName}
      id="name"
      name="userName"
      placeholder="Enter the name"
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
      name="roomId"
      onChange={handleFormInputChange}
      value={detail.roomId}
      className="w-full bg-gray-400 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500">
      </input>
      </div>

{/*button*/}
<div className="flex justify-center gap-3">
  <button onClick={joinChat} className="px-3 py-2 bg-blue-500 hover:bg-blue-900 rounded">
    Join Room
  </button>
  <button onClick={creatRoom} className="px-3 py-2 bg-green-500 hover:bg-green-900 rounded">
    Creat Room
  </button>


</div>

    </div>
    </div>


  );
}


export default joincreatechat;
