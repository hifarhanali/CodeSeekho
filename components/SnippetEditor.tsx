import React, { Fragment, Component } from 'react'
import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const styles = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...theme.plain,
    }
}

const SnippetEditor = ({ currentSnippet, setCurrentSnippet }) => {
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

    const onSaveSnippet = () => {
        // TODO: Save snippet here
        console.log("Save snippet")
    }

    return (

        currentSnippet &&
        <div className='ml-10 w-full'>
            {/* <CopyBlock
                text={snippet?.code ? snippet.code.toString().trim() : ''}
                language={snippet?.programming_language ? snippet.programming_language.trim() : 'text'}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
                className={`w-100`}
            /> */}


            <Editor
                value={currentSnippet.code}
                onValueChange={onValueChange}
                highlight={highlight}
                padding={40}
                style={styles.root}
                className={`w-full`}
            />


            <button
                onClick={onSaveSnippet}
                className="
                mt-5 mr-5 bg-transparent 
                hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500
                 text-white font-semibold py-2 px-4 border border-white-500 
                 rounded float-right">
                Button
            </button>
        </div>
    )
}

export default SnippetEditor