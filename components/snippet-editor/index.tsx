import React, { Fragment, Component, useContext } from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/duotoneLight'
import { UserContext } from "../../contexts/UserContext"

const styles = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...theme.plain,
    },
}

const SnippetEditor = ({ currentSnippet, setCurrentSnippet, currentCollection }) => {

    const { state } = useContext(UserContext)

    const onValueChange = (code: string) => {
        console.log(code)
        setCurrentSnippet({ ...currentSnippet, code: code })
    }

    const highlight = (code: string) => {
        return <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Fragment>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                        </div>
                    ))}
                </Fragment>
            )}
        </Highlight>
    }

    const onSaveSnippet = async () => {
        // TODO: Save current snippet to database
        console.log("Save snippet")

        snippet = await fetch("/api/snippets", {
            body: JSON.stringify({
                ...currentSnippet,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${state.user?.jwt}`
            },
            method: "PUT"
        })

        console.log(currentSnippet)
    }

    return (

        currentSnippet &&
        <div className='ml-10 w-full'>
            <button
                onClick={onSaveSnippet}
                className="
                my-5 mr-5 bg-transparent 
                hover:border-blue-500 hover:border-solid hover:bg-white hover:text-primary-900
                 text-white font-semibold py-2 px-4 border border-white-500 
                 rounded float-right">
                Save
            </button>

            <Editor
                value={currentSnippet.code}
                onValueChange={onValueChange}
                highlight={highlight}
                padding={40}
                style={styles.root}
                className={`w-full h-full`}
            />
        </div>
    )
}

export default SnippetEditor