import React, {useState} from 'react';
import './Message.scss'
import imgAvatar from '../../assets/img/avatar.png';
import {ReactComponent as IconEditButton} from "../../assets/img/edit-message-button.svg";


const Message = ({message, isAnswer, setMessageList, messageList, index, indexInList, sliderRef}) => {

    const [isEditButtonsVisible, setIsEditButtonsVisible] = useState(false);
    const [newMes, setNewMes] = useState(message);

    const changeSlide = () => {
        sliderRef.current.slickGoTo(index + 1);
    };

    const submitChanges = () => {
        const updatedMessageList = messageList.map((messageArray, i) => {
            return i === indexInList
                ? [...messageArray.slice(0, index + 1), newMes, ...messageArray.slice(index + 1, messageArray.length)]
                : messageArray
        });

        setMessageList(updatedMessageList);
        setIsEditButtonsVisible(false);
        changeSlide();
    };

    const cancelChanges = () => {
        setIsEditButtonsVisible(false);
    };

    return (
        <div className={`message ${isAnswer ? 'answer' : ''}`}>
            <div className="message__inner">
                {messageList[indexInList].length > 1  && (
                    <div className='message__slider-counter'>{index + 1}/{messageList[indexInList].length}</div>
                )}

                <div className='message__avatar'>
                    <img src={imgAvatar} alt='avatar'/>
                </div>

                <div className='message__info'>
                    {isEditButtonsVisible
                        ? <textarea
                            className='message__text'
                            value={newMes}
                            autoFocus={true}
                            onChange={(event) => setNewMes(event.target.value)}
                        />
                        : <div className='message__text'>{message} </div>
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
                    <button
                        className='message__buttons-submit'
                        onClick={() => submitChanges()}
                    >Save
                    </button>
                    <button
                        className='message__buttons-cancel'
                        onClick={() => cancelChanges()}
                    >Cancel
                    </button>
                </div>
            )}

        </div>
    );
};

export default Message;