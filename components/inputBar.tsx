
import React from 'react'


interface InputBarProps extends React.HTMLProps<HTMLInputElement> {
  icon?: React.ReactNode,
}

const InputBar: React.FC<InputBarProps> = (props) => {
  
    return (
      <div className='p-1 bg-white w-full bg-opacity-20 rounded-md flex space-x-2 items-center' style={{border: "1px solid gray"}}>
        {props.icon}
        <input type={"text"} className="bg-transparent outline-none border-none focus:outline-none focus:border-none w-full p-2" {...props} />
      </div>
    )
}

export default InputBar