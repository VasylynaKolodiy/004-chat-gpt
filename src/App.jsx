import React, {useEffect, useState} from 'react';
import LeftSide from "./components/LeftSide/LeftSide";
import Chat from "./components/Chat/Chat";
import {Theme} from "./assets/helpers";

function App() {

    const [messageList, setMessageList] = useState([])
    const [indexOfActive, setIndexOfActive] = useState(0)

    const initialTheme = new Theme(messageList);
    const [themeList, setThemeList] = useState([initialTheme]);

    useEffect(() => {
        const updatedThemeList = [...themeList.slice(0, indexOfActive), new Theme(messageList), ...themeList.slice(indexOfActive + 1, themeList.length)]
        setThemeList(updatedThemeList)
    }, [messageList]);

    console.log('themeList', themeList)

    return (
        <div className='App'>
            <LeftSide
                themeList={themeList}
                setIndexOfActive={setIndexOfActive}
                indexOfActive={indexOfActive}
                setThemeList={setThemeList}
            />

            <Chat
                messageList={themeList[indexOfActive].info}
                setMessageList={setMessageList}
            />

        </div>
    );
}

export default App;
