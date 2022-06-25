import PropTypes from 'prop-types';
import React, { Dispatch } from 'react';

interface ModalProps {
    id: string,
    isOpen: boolean,
    setIsOpen: Dispatch<any>,
    header: string,
    body: React.ReactNode,
    footer: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({id, isOpen, setIsOpen, header, body, footer}) => {
    return (
        <div id={id} aria-hidden="true" className={`${ isOpen ? 'flex bg-gray-400 bg-opacity-60' : 'hidden' } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center md:h-screen sm:h-screen md:inset-0`}>
            <div className="relative lg:px-4 sm:px-0 w-full max-w-2xl h-screen md:h-auto">
                <div className="relative bg-primary-background rounded-lg shadow dark:bg-gray-900 h-screen lg:h-full">
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-2xl font-semibold text-primary-button lg:text-2xl dark:text-green-500 ">
                            {header}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle={id} onClick={() => setIsOpen(false)}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {body}
                    </div>
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal