import React, { useState } from 'react'
import Review from '../../../components/review'
import { CopyBlock, atomOneLight } from 'react-code-blocks'
import dedent from 'dedent';



const post = ({ post }) => {
    return (
        <div>
            <div className="bg-primary-900 min-h-screen h-full w-screen p-10">

                <div className="post">
                    <h2 className="text-xl text-text-dark p-5 bg-white mb-2 rounded">{`${post.name}`}</h2>
                    <CopyBlock
                        text={post.code}
                        language={post.programming_language ? post.programming_language.trim() : 'text'}
                        showLineNumbers={false}
                        theme={atomOneLight}
                        codeBlock
                    />
                </div>

                <div className="bg-white mt-10 p-10">
                    <h1 className="text-text-Dark text-xl mb-10">
                        Developers' Views
                    </h1>
                    <div className="reviewes grid grid-cols-1 lg:grid-cols-2">
                        {
                            post.reviews.map((review, index) => (
                                <Review key={index} review={review} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const postId = context.params.postId
    console.log(postId)


    // TODO: get post from database
    const post = {
        id: 1,
        name: 'How to implement a React Hook?',
        code:
            dedent`
        class HelloMessage extends React.Component {
            handlePress = () => {
                alert('Hello')
            }
            render() {
                return (
                    <div>
                        <p>Hello {this.props.name}</p>
                        <button onClick={this.handlePress}>Say Hello</button>
                    </div>
                );
            }
        }
        `,
        programming_language: "jsx",
        user: {
            name: 'John Doe',
            profession: 'Web Developer',
            photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
        },
        reviews: [
            {
                id: 1,
                user: {
                    name: 'John Doe',
                    profession: 'Web Developer',
                    photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
                },
                review: 'React Hooks are a set of rules for how we write components. They let you use state and other React features without writing a class. React Hooks are a new addition to the React library, and are not backwards compatible with previous versions.',
            },
            {
                id: 2,
                user: {
                    name: 'John Doe',
                    profession: 'Web Developer',
                    photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
                },
                review: 'React Hooks are a set of rules for how we write components. They let you use state and other React features without writing a class. React Hooks are a new addition to the React library, and are not backwards compatible with previous versions.',
            },
        ]
    }

    return {
        props: {
            post
        }
    }
}

export default post