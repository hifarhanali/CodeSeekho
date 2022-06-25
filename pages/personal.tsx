import React from 'react'
import Sidebar from '../components/Sidebar'
import SnippetEditor from '../components/SnippetEditor'

import { useState } from 'react'
import { collections } from '../data/collections'

const Personal = () => {
    const [currentSnippet, setCurrentSnippet] = useState<string>("")

    return (
        <div className={`bg-primary-900 min-h-screen h-full w-screen overflow-hidden`}>
            <div className={`flex`}>
                <Sidebar collections={collections} setCurrentSnippet={setCurrentSnippet} />
                <SnippetEditor currentSnippet={currentSnippet} setCurrentSnippet={setCurrentSnippet} />

            </div>
        </div>

    )
}

export default Personal