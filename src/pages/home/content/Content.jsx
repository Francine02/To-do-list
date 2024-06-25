import { useState, useEffect } from 'react';

export function Content() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const getLocalStorageName = () => {
            return window.localStorage.getItem("user");
        }
        setUserName(getLocalStorageName());
    });

    return (
        <div className="bg-white h-screen rounded-l-[60px] pl-9 pt-7 pb-7 pr-7 md:pt-16 md:pb-20 overflow-y-auto">
            <p className='text-3xl md:text-5xl font-semibold'>Olá, <span className='text-[#39c073]'>{userName}.</span> &#128075;</p>
        </div>
    );
}
