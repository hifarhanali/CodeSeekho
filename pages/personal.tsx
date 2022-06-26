import React from 'react'
import Sidebar from '../components/sidebar'
import SnippetEditor from '../components/snippet-editor'

import { useState } from 'react'
import { collectionsList } from '../data/collections'

const Personal = () => {
    const [currentSnippet, setCurrentSnippet] = useState<string>("")
    const [collections, setCollections] = useState(collectionsList)

    return (
        <div className={`bg-primary-900 min-h-screen h-full w-screen overflow-hidden`}>
            <div className={`flex`}>
                <Sidebar collections={collections} setCollections={setCollections} setCurrentSnippet={setCurrentSnippet} />
                <SnippetEditor currentSnippet={currentSnippet} setCurrentSnippet={setCurrentSnippet} />

            </div>
        </div>

    )
}

export default Personal