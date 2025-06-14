import React from 'react'

const ChatPage = () => {
  return (
    <div>
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

{/*input message container*/}

<div className="border border-gray-800 shadow fixed bottom-0 w-2/3">
    hi

</div>

    </div>
  );
}

export default ChatPage;