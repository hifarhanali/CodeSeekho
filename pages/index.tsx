import { Prisma } from '@prisma/client';
import { GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react'
import Header from '../components/header';
import Snippet from '../components/snippet'
import { snippetsList } from "../data/snippets"

interface HomeProps {
    snippetsData: any
}
const Home: NextPage<HomeProps> = ({ snippetsData }) => {

    const [searchText, setSearchText] = React.useState("");
    const [snippets, setsnippets] = React.useState(snippetsData)
    const originalsnippets = snippetsList

    useEffect(() => {
        filterSnippets()
    }, [searchText])


    const filterSnippets = () => {
        if (searchText == "") {
            setsnippets(originalsnippets)
        }
        else {
            const filteredsnippets = snippets.filter(snippet => snippet.name.toLowerCase().includes(searchText.toLowerCase()))
            setsnippets(filteredsnippets)
        }
    }


    return (
        <>
            <Header />
            <div className="bg-primary-900 min-h-screen h-full w-screen py-10 px-20">

                <div className="flex items-center mb-10">
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-text-dark dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="search"
                            className="text-text-dark text-sm rounded-lg block w-full pl-10 p-2.5" placeholder="Search code by title, user . . ." value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </div>

                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
                    {snippets.map((snippet, index) => (
                        <Snippet key={index} snippetData={snippet} />
                    ))}

                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const _snippets = await fetch("http://localhost:3000/api/snippets", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    })
    const snippets = await _snippets.json()
    console.log(snippets)


    return {
        props: {
            snippetsData: snippets
        }
    }
}


export default Home