import React from 'react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'


const CodePost = ({ codepost }) => {
    return (
        <div>
            <section className="antialiased bg-gray-50 text-text-dark p-4">
                <div>
                    <div className="max-w-2xl mx-auto bg-primary-50 shadow-lg rounded-lg h-200">
                        <div className="px-6 py-5">
                            <div className="flex items-start">

                                <img className="w-10 h-10 rounded-full mr-4" src={codepost.user.photo} alt="avatar" />
                                <div className="flex-grow truncate">

                                    <div className="w-full sm:flex justify-between items-center mb-3">

                                        <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">{codepost.name}</h2>

                                        <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                                            <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-text-light group focus:outline-none focus-visible:border-b focus-visible:border-text-light">
                                                <svg className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200" viewBox="0 0 16 16">
                                                    <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                                                </svg>
                                                <span>{codepost.likes} <span className="sr-only">likes</span></span>
                                            </button>
                                            <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-text-light group focus:outline-none focus-visible:border-b focus-visible:border-text-light">
                                                <svg className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                                                </svg>
                                                <span>{codepost.reviews?.length} <span className="sr-only">comments</span></span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='h-80 overflow-scroll'>
                                <CopyBlock
                                    text={codepost.code}
                                    language={codepost.programming_language ? codepost.programming_language.trim() : 'text'}
                                    showLineNumbers={false}
                                    theme={atomOneDark}
                                    codeBlock
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default CodePost