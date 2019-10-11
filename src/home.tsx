import React from 'react';

class Home extends React.Component<{}, {messages: Array<String>, websocket: WebSocket, inputMessage: string}> {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            websocket: null,
            inputMessage: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        console.log('mounted and connecting WS');
        const websocket = new WebSocket('ws://localhost:8080');
        websocket.onmessage = event => {
            this.setState({
                messages: [
                    ...this.state.messages, 
                    ...JSON.parse(event.data)
                ]
            });
        };
        this.setState({
            websocket
        });
    }
    onSubmit(event) {
        event.preventDefault();
        console.log('submitting');
        const {websocket, inputMessage} = this.state
        if (!websocket || !inputMessage) {
            return;
        }
        websocket.send(this.state.inputMessage);
        console.log('submitted');
        return false;
    }
    onChange(event) {
        this.setState({
            inputMessage: event.target.value
        });
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
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            onChange={this.onChange}
                            value={this.state.inputMessage} />
                    </form>
                </main>
            </div>
        );
    }
}

export default Home;
