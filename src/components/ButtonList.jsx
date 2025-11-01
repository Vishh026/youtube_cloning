import React from 'react'

const ButtonList = () => {
  const btnList = ["All","Disha","Dhoni","Cricket","intelliegent","science","maths","coding","python","world","explor","animal","Disha","Dhoni"]
  return (
    <div className="btnlisting bg-[#0f0f0f] overflow-x-auto whitespace-nowrap  flex items-center p-2 scrollbar-thin scrollbar-thumb-[#272727] scrollbar-track-[#0f0f0f]">
      {btnList.map((item,id)=> (
        <button key= {id} className=' capitalize font-normal px-2 py-2 rounded-lg border-none bg-[#272727] m-2 text-white '>{item}</button>
      ))}
      
    </div>
  )
}

export default ButtonList
