import React, { useRef, useState } from 'react'
import { MdAttachFile, MdSend } from 'react-icons/md';




const ChatPage = () => {

  // creating react state to store the messages
const [message, setMessages]=useState([
{content:"Hello",
sender:"mohit",},

{content:"Hey",
sender:"kanika",},

{content:"How r u?",
sender:"mohit",},

{content:"fine.u?",
sender:"kanika",},

{content:"ok",
sender:"mohit",},
{content:"ok",
sender:"mohit",},

]);

// to take input creating one state
const[input, setInput]=useState("");
//creating input reference
const inputRef=useRef(null);
const chatBoxRef=useRef(null);
const [stompClient, setStompClient]=useState(null);
const[roomId, setroomId]=useState("");
const[currentUser]=useState("mohit");

  return (
    <div >
<header className="border bg-gray-600 py-3 shadow border-gray-900 w-full h-16 flex justify-around items-center">    
    {/*room id display*/}
    <div>
  <h1 classname="text-xl font-semibold">
    Room:123
    </h1>
    </div>

    {/*user name display*/}
    <div>
        <h1 classname="text-xl font-semibold">
    User Name:Mohit
    </h1>

    </div>

    {/*button: leave room*/}
    <div>
<button className="bg-red-500 hover:bg-red-700 px-2 py-2 rounded-full">
    Leave Room

</button>

    </div>
</header>
{/* message content section*/}

<main className=" py-10 px-10 w-2/3 mx-auto h-screen overflow-auto bg-gray-300">
{message.map((message, index) => (
<div key={index} className={`flex ${message.sender===currentUser ? "justify-end": "justify-start"}`}>
<div  className={`my-2 ${message.sender===currentUser ? 'bg-blue-500' : 'bg-green-400'} p-2 max-w-xs rounded`}>
  <div className="flex flex-row gap-2">
    <img className="w-10 h-10"
        src={"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=White&eyeType=WinkWacky&eyebrowType=UnibrowNatural&mouthType=Sad&skinColor=Light"} />

<div className="flex flex-col gap-1">
  <p className="text-sm font-bold">{message.sender}</p>
  <p>{message.content}</p>
</div>
</div>
</div>

</div>

))}
</main>

{/*input message container*/}

<div className=" border-gray-800 shadow fixed bottom-0 w-full h-16">
  <div className="border rounded border-gray-700 bg-gray-600 w-2/3 mx-auto h-full flex justify-between items-center gap-3">
  
  <input type="text" placeholder="Type your message here..." className=" h-full w-full px-5 py-2 bg-gray-600 text-white"></input>
  <button className="bg-green-500 hover:bg-green-700 px-2 py-2 rounded-full flex justify-center items-center h-10 w-10">
    <MdSend size={20}/>
  </button>
  <button className="bg-purple-700 hover:bg-purple-800 px-2 py-2 rounded-full flex justify-center items-center h-10 w-10">
    <MdAttachFile size={20}/>
  </button>
</div>
</div>

    </div>
  );
}

export default ChatPage;