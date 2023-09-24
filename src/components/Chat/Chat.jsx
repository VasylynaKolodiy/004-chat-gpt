import React, {useEffect, useRef, useState} from 'react';
import './Chat.scss'
import {ReactComponent as IconSendButton} from "../../assets/img/send-message-button.svg";
import Message from "../Message/Message";
import TypingEffect from "../UI/TypingEffect/TypingEffect";

const Chat = () => {

    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    const messagesEndRef = useRef(null);

    const pressDownKeyEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        setMessageList([...messageList, message]);
        setMessage('');
        showAnswerAfterDelay();
    };

    const showAnswerAfterDelay = () => {
        setTimeout(() => {
            setShowAnswer(true);
        }, 3000);
    };

    const scrollChatToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const autoGrowTextarea = (element) => {
        if (element.scrollHeight <= 200) {
            element.style.height = (element.scrollHeight) + "px";
        }
    }

    useEffect(() => {
        const textArea = document.querySelector('.textarea');
        textArea.style.height = '56px';
        scrollChatToBottom();
    }, [messageList]);


    return (
        <main className='chat'>
            <div className='chat__container'>

                <section className='chat__top'>
                    {messageList.map((message, index) => (
                        <div key={index}>
                            <Message message={message} isAnswer={false} />
                            <TypingEffect message={message} isAnswer={true} scrollChatToBottom={scrollChatToBottom}/>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </section>


                <section className='chat__bottom'>
                    <div className="chat__bottom-message">
                        <div className="chat__bottom-message-area">
                            <textarea
                                className='textarea'
                                placeholder="Send a message"
                                rows={1}
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                onKeyDown={pressDownKeyEnter}
                                autoFocus={true}
                                onInput={(event) => autoGrowTextarea(event.target)}
                            />
                        </div>

                        <div className="chat__bottom-message-btn">
                            <IconSendButton
                                onClick={sendMessage}
                            />
                        </div>

                    </div>

                    <div className='chat__bottom-info'>
                        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or
                        facts. ChatGPT August 3 Version
                    </div>
                </section>

            </div>
        </main>
    );
};

export default Chat;