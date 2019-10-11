import React from 'react';

class Home extends React.Component<{}, {messages: Array<String>, websocket: WebSocket}> {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            websocket: null
        }
    }
    componentDidMount() {
        console.log('mounted and connecting WS');
        // const websocket = new WebSocket('localhost:8080');
        // websocket.onmessage = event => {
        //     this.setState({
        //         messages: [
        //             ...this.state.messages, 
        //             event.data
        //         ]
        //     });
        // };
        // this.setState({
        //     websocket
        // });
    }
    render() {
        return (
            <div className="home-component">
                <div className="side-bar">
                    <div className="top-bar">
                        <h1>Chats</h1>
                    </div>
                </div>
                <main className="chat-window">
                    <div className="top-bar">
                        <h1>Current Chat</h1>
                    </div>
                    {JSON.stringify(this.state.messages)}
                </main>
            </div>
        );
    }
}

export default Home;
