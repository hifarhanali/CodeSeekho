import React from 'react'

import CodePost from '../components/CodePost'

import { codeposts } from "../data/codeposts"

const Home = () => {
    return (
        <>
            <div className="code-posts">
                {codeposts.map((codepost, index) => (
                    <CodePost key={index} codepost={codepost} />
                ))}
            </div>
        </>
    )
}

export default Home