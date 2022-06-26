import { useState, useRef, useEffect, useContext } from 'react'
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
import Collection from '../collection'

import { isObjectExist } from "../../utils/finder"
import { UserContext } from '../../contexts/UserContext'



const Sidebar = ({ collections, setCollections, setCurrentSnippet, setCurrentCollection }) => {
    const {state} = useContext(UserContext)
    const [open, setOpen] = useState(true)
    const [newCollectionNameVisibilityFlag, setNewCollectionNameVisibilityFlag] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState("");

    const newCollectionInputRef = useRef<HTMLInputElement>(null);

    const createNewCollection = () => {
        setNewCollectionNameVisibilityFlag(true)
    }

    const handleClickOutside = () => {
        setNewCollectionNameVisibilityFlag(false)
    }

    useOutsideAlerter(newCollectionInputRef, handleClickOutside);

    useEffect(() => {
        const createNewCollection = () => {
            if (newCollectionName.length > 0 && state.user) {
                // insert collection if it does not exist
                if (!isObjectExist(collections, ["name"], newCollectionName)) {

                    fetch("/api/collections", {
                        body: JSON.stringify({
                            name: newCollectionName
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${state.user?.jwt}`
                        },
                        method: "POST"
                    })

                    setCollections([...collections, { name: newCollectionName, snippets: [] }])
                }
                setNewCollectionName("")
            }
        }
        if (!newCollectionNameVisibilityFlag) {
            createNewCollection()
        }
    }, [newCollectionNameVisibilityFlag])



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
                    {collections?.map((collection, index) => (
                        <li
                            key={index}
                            className=
                            {
                                `rounded-md p-2 cursor-pointer hover:bg-light-white text-text-light text-sm items-center text-text-normal`
                            }
                        >
                            <Collection
                                collectionIndex={index} collection={collection}
                                collections={collections}
                                setCollections={setCollections}
                                open={open} setCurrentSnippet={setCurrentSnippet}
                                setCurrentCollection={setCurrentCollection}
                            />
                        </li>
                    ))
                    }

                    {
                        !newCollectionNameVisibilityFlag ?
                            <li className={`${!open && "hidden"}`}>
                                <a href="#"
                                    className="
                            hover:border-blue-500 hover:border-solid hover:bg-white hover:text-primary-900
                             group w-full flex flex-col items-center justify-center rounded-md border-2
                              border-dashed border-slate-300 text-sm leading-6 font-medium text-white
                              py-3"
                                    onClick={createNewCollection}
                                >
                                    <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                    </svg>
                                    New Collection
                                </a>
                            </li>
                            :
                            <div className="relative z-0 w-full mb-6 group" ref={newCollectionInputRef}>
                                <input type="text"
                                    autoFocus={true}
                                    name="folder_name"
                                    className="block py-2.5 px-0 w-full text-sm text-text-light bg-primary-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer" placeholder="Type collection name"
                                    value={newCollectionName}
                                    onChange={(e) => setNewCollectionName(e.target.value)}
                                />
                            </div>
                    }
                </ul >
            </div >
        </div >
    )
}

export default Sidebar