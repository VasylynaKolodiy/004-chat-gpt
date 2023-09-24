import React, {useEffect, useState} from 'react';
import './Message.scss'
import imgAvatar from '../../assets/img/avatar.png';
import imgAvatarGpt from '../../assets/img/avatar-gpt.png';
import {ReactComponent as IconEditButton} from "../../assets/img/edit-message-button.svg";


const Message = ({message, isAnswer}) => {

    const [isEditButtonsVisible, setIsEditButtonsVisible] = useState(false);

    return (
        <div className={`message ${isAnswer ? 'answer' : ''}`}>
            <div className="message__inner">
                <div className='message__avatar'>
                    <img src={isAnswer ? imgAvatarGpt : imgAvatar} alt='avatar'/>
                </div>

                <div className='message__info'>

                    {isEditButtonsVisible
                        ? <textarea
                            className='message__text'
                            value={message}
                            autoFocus={true}
                            //onChange={(event) => setMessage(event.target.value)}
                            // onKeyDown={pressDownKeyEnter}
                        />
                        : <div className='message__text'>{message}</div>
                    }

                    <div
                        className={`message__buttons-edit ${isAnswer ? 'hidden' : ''}`}
                        title='Edit message'
                        onClick={() => setIsEditButtonsVisible(true)}
                    >
                        <IconEditButton/>
                    </div>

                </div>
            </div>

            {!isAnswer && (
                <div className={`message__buttons ${isEditButtonsVisible ? 'visible' : ''}`}>
                    <button className='message__buttons-submit'>Save</button>
                    <button
                        className='message__buttons-cancel'
                        onClick={() => setIsEditButtonsVisible(false)}
                    >Cancel
                    </button>
                </div>
            )}

        </div>
    );
};

export default Message;