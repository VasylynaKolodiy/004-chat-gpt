import React, {useEffect, useRef, useState} from 'react';
import './Chat.scss'
import {ReactComponent as IconSendButton} from "../../assets/img/send-message-button.svg";
import MessageArray from "../MessageArray/MessageArray";

const Chat = ({messageList, setMessageList}) => {
    const [messages, setMessages] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const messagesEndRef = useRef(null);

    const pressDownKeyEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    const sendMessage = () => {
        setMessageList([...messageList, messages]);

        // const updatedThemeList = [...themeList.slice(0, indexOfActive + 1), [...messageList, messages], ...themeList.slice(indexOfActive + 1, themeList.length)]
        // setThemeList(updatedThemeList)

        setMessages([]);
        showAnswerAfterDelay();
    };

    const showAnswerAfterDelay = () => {
        setTimeout(() => {
            setShowAnswer(true);
        }, 3000);
    };

    const scrollChatToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
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


    console.log('messageList', messageList);

    return (
        <main className='chat'>
            <div className='chat__container'>
                <section className='chat__top'>
                    {messageList?.map((messageArray, index) => (
                        <div key={index}>
                            <MessageArray
                                messageArray={messageArray}
                                setMessageList={setMessageList}
                                messageList={messageList}
                                scrollChatToBottom={scrollChatToBottom}
                                indexInList={index}
                            />
                        </div>
                    ))}
                    <div ref={messagesEndRef}/>
                </section>

                <section className='chat__bottom'>
                    <div className="chat__bottom-message">
                        <div className="chat__bottom-message-area">
                            <textarea
                                className='textarea'
                                placeholder="Send a message"
                                rows={1}
                                value={messages}
                                onChange={(event) => setMessages([event.target.value])}
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