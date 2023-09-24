import React, {useEffect, useState} from 'react';
import Message from "../../Message/Message";

const TypingEffect = ({message, isAnswer, scrollChatToBottom}) => {
    const [text, setText] = useState('');
    const typingSpeed = 50;

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(message.slice(0, index + 1));
            index += 1;
            if (index === message.length) {
                clearInterval(intervalId);
            }
        }, typingSpeed);
        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [message, typingSpeed]);

    useEffect(() => {
        setTimeout(() => {
            scrollChatToBottom();
        }, 2000);

    }, [text]);

    return (
        <Message message={text} isAnswer={isAnswer}/>
    );
};

export default TypingEffect;