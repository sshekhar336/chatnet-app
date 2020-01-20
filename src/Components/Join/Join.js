import React, { useState } from 'react';
import './Join.css';
import { Link } from 'react-router-dom';


const handleSubmit = (e, name, room) => {
    if (name === "" || room === "") {
        e.preventDefault();
        alert("Name and Room are required!")
    }
}

export default function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
            <div className="joinOuterContainer">
                <div className="note">
                    <h1 className="title">ChatNet</h1>
                    <p className="details">
                        This is a real time chat application developed using ReactJs, NodeJs, Express and SocketIo by Shashank Shekhar.
                        <br />
                        No need to signup or create account.
                        Just enter your name and room name and start chatting.
                        <br />
                        you need to share your room name with the people you want to talk to.
                        Room name could be anything.
                    </p>
                    <p className="details">
                        As this is just a real time messaging application so your messages are not saved. Refreshing or closing the window deletes the messages.
                        <br />
                        You can also use emojis with keywords. Enjoy!
                    </p>
                </div>
                <div className="joinInnerContainer">
                    <h2 className="heading">Join</h2>
                    <div>
                        <input placeholder="Name"
                            className="joinInput mt-20"
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={() => { setRoom("Room" + Math.random().toString(36).slice(-4)); }} className="createRoom">Clicke here to create a new Room</button>
                    </div>
                    <div>
                        <input placeholder="Enter existing room or create new room"
                            className="joinInput mt-20"
                            type="text"
                            value={room}
                            onChange={(event) => setRoom(event.target.value)}
                        />
                    </div>
                    <Link onClick={e => handleSubmit(e, name, room)} to={`/chatnet-app/chat?name=${name}&room=${room}`}>
                        <button className={'button mt-20'} type="submit">Sign In</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
