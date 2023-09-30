import React, {useEffect, useState} from 'react';
import imgAvatarGpt from "../../../assets/img/avatar-gpt.png";

const TypingEffect = ({message, scrollChatToBottom}) => {
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
        <div className='message answer'>
            <div className="message__inner">
                <div className='message__avatar'>
                    <img src={ imgAvatarGpt} alt='avatar'/>
                </div>
                <div className='message__text'>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default TypingEffect;