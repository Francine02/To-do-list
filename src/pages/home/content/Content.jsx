import { useState, useEffect } from 'react';
import { AddTask } from './AddTask';
import { Task } from './Task';

export function Content({ addNewTask }) {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const getLocalStorageName = () => {
            return window.localStorage.getItem("user");
        }
        setUserName(getLocalStorageName());
    },[]);

    return (
        <div className="bg-white h-screen rounded-l-[60px] pl-9 pt-7 pb-7 pr-9 md:pt-16 md:pb-20 overflow-y-auto">
            <p className='text-3xl md:text-5xl font-semibold'>Olá, <span className='text-[#39c073]'>{userName}.</span>&#128075;</p>
            
            <div className='flex justify-center'>
                {addNewTask && <AddTask />}   
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Task/>    
            </div>
        </div>
    );
}
