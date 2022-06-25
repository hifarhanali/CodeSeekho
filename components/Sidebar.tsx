import { useState } from 'react'


const Sidebar = ({ collections, setCurrentSnippet }) => {

    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="../assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="../assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        CodeSeekho
                    </h1>
                </div>
                <ul className="pt-6">
                    {collections.map((collection, index) => (
                        <li
                            key={index}
                            className=
                            {
                                `rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center`
                            }
                        >
                            <div className={`${!open && "hidden"} origin-left duration-200 
                                ${index === 0 && "bg-light-white"
                                }
                                `}>
                                {collection.name}
                            </div>
                            <ul className={`${!open && "hidden"}`}>
                                {
                                    collection.snippets.map((snippet, index) => (
                                        <li
                                            key={index}
                                            className=
                                            {
                                                `flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center
                                        ${index === 0 && "bg-light-white"
                                                }`
                                            }
                                            onClick={() => setCurrentSnippet(snippet)}
                                        >
                                            <div className="text-gray-600">
                                                <span>
                                                    {snippet.name}
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                    }
                    <li className={`${!open && "hidden"}`}>
                        <a href="/new"
                            className="
                            hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500
                             group w-full flex flex-col items-center justify-center rounded-md border-2
                              border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium 
                              py-3">
                            <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                            </svg>
                            New project
                        </a>
                    </li>
                </ul >
            </div >
        </div >
    )
}

export default Sidebar