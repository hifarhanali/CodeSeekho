
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineFolderAdd } from 'react-icons/ai'
import { isObjectExist } from "../../utils/finder"
import useOutsideAlerter from '../../hooks/useOutsideAlerter'


const Collection = ({ collectionIndex, collection, collections, setCollections, open, setCurrentSnippet }) => {

    const [newSnippetNameVisibilityFlag, setNewSnippetNameVisibilityFlag] = useState(false);
    const [newSnippetName, setNewSnippetName] = useState("");

    const newSnippetInputRef = useRef<HTMLInputElement>(null);

    const handleClickOutside = () => {
        setNewSnippetNameVisibilityFlag(false)
    }

    useOutsideAlerter(newSnippetInputRef, handleClickOutside);


    const handleCreateNewSnippet = () => {
        setNewSnippetNameVisibilityFlag(true)
    }

    useEffect(() => {
        const createNewSnippet = () => {
            if (newSnippetName.length > 0) {
                // insert snippet if it does not exist
                if (!isObjectExist(collections, ["name", "snippets"], newSnippetName)) {

                    // TODO: create new snippet in the database
                    const newSnippet = {
                        name: newSnippetName,
                        code: "",
                        programming_language: "jsx",

                    }

                    const newCollections = [...collections]
                    newCollections[collectionIndex].snippets.push(newSnippet)
                    setCollections(newCollections)
                    setNewSnippetNameVisibilityFlag(false)
                    setCurrentSnippet(newSnippet)
                }
                setNewSnippetName("")
            }

        }

        if (!newSnippetNameVisibilityFlag) {
            createNewSnippet()
        }
    }, [newSnippetNameVisibilityFlag])


    return (
        <div>
            <div className={`
                    ${!open && "hidden"} flex items-center origin-left duration-200
                `}>
                <p className='flex-1'>{collection.name}</p>
                <div
                    onClick={handleCreateNewSnippet}
                >< AiOutlineFolderAdd size={20} title={"New snippet"} /></div>
            </div>
            <ul className={`${!open && "hidden"} px-4`}>
                {
                    collection.snippets.map((snippet, index) => (
                        <li
                            key={index}
                            className=
                            {
                                `flex rounded-md py-2 cursor-pointer hover:bg-light-white text-normal text-sm items-center                                                `
                            }
                            onClick={() => setCurrentSnippet(snippet)}
                        >
                            <div className="text-text-light hover:text-text-normal">
                                <span>
                                    {snippet.name}
                                </span>
                            </div>
                        </li>
                    ))
                }
                {
                    newSnippetNameVisibilityFlag &&
                    <div className="relative z-0 w-full mb-6 group" ref={newSnippetInputRef}>
                        <input type="text"
                            autoFocus={true}
                            name="snippet_name"
                            className="py-2.5 w-full text-sm text-text-light bg-primary-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                            placeholder="Type snippet title"
                            value={newSnippetName}
                            onChange={(e) => setNewSnippetName(e.target.value)}
                        />
                    </div>

                }
            </ul>

        </div>
    )
}

export default Collection