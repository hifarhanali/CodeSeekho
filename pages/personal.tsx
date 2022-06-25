import React from 'react'
import Sidebar from '../components/Sidebar'
import SnippetEditor from '../components/SnippetEditor'

import { useState } from 'react'
import { collections } from '../data/collections'

const Personal = () => {
    const [currentSnippet, setCurrentSnippet] = useState<string>("")
    return (
        <div className={`flex`}>
            <Sidebar collections={collections} setCurrentSnippet={setCurrentSnippet} />
            <SnippetEditor currentSnippet={currentSnippet} setCurrentSnippet={setCurrentSnippet} />
        </div>
    )
}

export default Personal