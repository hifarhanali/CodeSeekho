import dedent from 'dedent';


export const snippetsList = [
    {
        id: 1,
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
        programming_language: "jsx",
        likes: 0,
        reviews: [],
        user: {
            name: "Farhan Ali",
            email: "hifarhanali@gmail.com",
            photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
            profession: "Junior Software Engineer",
        }
    },
    {
        id: 2,
        name: "javascrip component",
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
        likes: 10,
        reviews: [],
        user: {
            name: "Farhan Ali",
            email: "hifarhanali@gmail.com",
            photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
            profession: "Junior Software Engineer",
        }
    },
    {
        id: 3,
        name: "python programming langauge",
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
        likes: 500,
        reviews: [],
        user: {
            name: "Farhan Ali",
            email: "hifarhanali@gmail.com",
            photo: "https://media-exp2.licdn.com/dms/image/C4E03AQFidnxH2lVZBw/profile-displayphoto-shrink_100_100/0/1611490782607?e=1661385600&v=beta&t=E0hXiwEpMh2TRBwBWLYmtVKuJJT9v4LM5hddM1aniYo",
            profession: "Junior Software Engineer",
        }
    },

]