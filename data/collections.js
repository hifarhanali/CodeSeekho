import dedent from 'dedent';

export const collections = [
    {
        name: 'HTML',
        snippets: [
            {
                name: "react component",
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
                programming_language: "jsx"
            },
            {
                name: "typescript component",
                code:
                    dedent`
                    import * as React from "react";

                    export class HelloWorld extends React.Component<any, any> {
                        render() {
                            return <div>Hello world!It's from Helloword Component.</div>;
                        }
                    }
                `,
                programming_language: "tsx"
            }

        ],
    },
    {
        name: 'CSS',
        snippets: [
            {
                name: "C++ template",
                code:
                    dedent`
                    #include <iostream.h>
                    main() {
                        cout << "Hello World!" << endl;
                        return 0;
                    }
                `,
                programming_language: "cpp"
            }
        ]
    }
]
