import React, {useState} from 'react';
import './LeftSide.scss';
import Button from "../UI/Button/Button";
import {ReactComponent as IconAddButton} from "../../assets/img/add-chat-button.svg";
import {ReactComponent as IconCloseButton} from "../../assets/img/close-aside-button.svg";
import {Theme} from "../../assets/helpers";

const LeftSide = ({themeList, setIndexOfActive, setThemeList, indexOfActive}) => {
    const [isVisibleAside, setIsVisibleAside] = useState(true);

    const addNewTheme = () => {
        setThemeList([new Theme([]), ...themeList])
        setIndexOfActive(0)
    };

    return (
        <aside className={`aside ${isVisibleAside ? 'visible' : ''}`}>
            <div className='aside__buttons'>
                <Button
                    className='aside__button button-add'
                    onClick={() => addNewTheme()}
                >
                    <div className='aside__button-inner'>
                        <div className='aside__button-img'>
                            <IconAddButton/>
                        </div>
                        <div className='aside__button-text'>New Chat</div>
                    </div>
                </Button>

                <Button
                    className={`aside__button button-close ${isVisibleAside ? '' : 'visible'}`}
                    title={`${isVisibleAside ? 'Close sidebar' : 'Open sidebar'}`}
                    onClick={() => setIsVisibleAside(!isVisibleAside)}
                >
                    <div className='aside__button-inner'>
                        <IconCloseButton/>
                    </div>
                </Button>
            </div>

            {themeList.map((theme, i) =>
                theme.info?.length > 0 && (
                    <div
                        className={`aside__chat-list ${indexOfActive===i ? 'active' : ''}`}
                        onClick={() => setIndexOfActive(i)}
                        key={i}
                    > {theme.title} </div>
                )
            )}


        </aside>
    );
};

export default LeftSide;