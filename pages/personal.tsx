import React from 'react'
import Sidebar from '../components/sidebar'
import SnippetEditor from '../components/snippet-editor'

import { useState } from 'react'
import { collectionsList } from '../data/collections'
import { GetServerSideProps } from 'next'
import { UserContext } from '../contexts/UserContext'
import Header from '../components/header'
import Loader from '../components/loader'

const Personal = () => {
    const [currentSnippet, setCurrentSnippet] = useState<string>("")
    const [currentCollection, setCurrentCollection] = useState<any>()
    const [collections, setCollections] = useState()
    const { state } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (!state.isAuth) return
        fetch("/api/users/collections", {
            headers: {
                "Authorization": `Bearer ${state.user?.jwt}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
            setLoading(false)
            setCollections(res)
        })

    }, [state.isAuth])

    return (
        <>
            <Header />
            <div className={`bg-primary-900 min-h-screen h-full w-screen overflow-hidden`}>
                <div className={`flex`}>
                    {loading && <Loader />}
                    <Sidebar collections={collections} setCollections={setCollections} setCurrentSnippet={setCurrentSnippet} setCurrentCollection={setCurrentCollection} />
                    <SnippetEditor currentSnippet={currentSnippet} setCurrentSnippet={setCurrentSnippet} currentCollection={currentCollection} />

                </div>
            </div>
        </>
    )
}

export default Personal