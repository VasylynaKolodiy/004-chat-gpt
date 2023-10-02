import React, {useRef} from 'react';
import './MessageArray.scss'
import Message from "../Message/Message";
import TypingEffect from "../UI/TypingEffect/TypingEffect";

// Import css files for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MessageArray = ({messageArray, messageList, setMessageList, scrollChatToBottom, indexInList}) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className='slider'>
            <Slider ref={sliderRef} {...settings}>
                {messageArray?.map((message, i) =>
                    <div className="slider__container" key={i}>
                        <Message
                            message={message}
                            messageList={messageList}
                            setMessageList={setMessageList}
                            isAnswer={false}
                            index={i}
                            sliderRef={sliderRef}
                            indexInList={indexInList}
                        />
                        <TypingEffect
                            message={message}
                            scrollChatToBottom={scrollChatToBottom}
                        />
                    </div>
                )}
            </Slider>


        </section>
    );
};

export default MessageArray;