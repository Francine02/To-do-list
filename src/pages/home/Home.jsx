import { Menu } from "./menu/Menu";
import { Content } from "./content/Content";
import { useState } from 'react';

export function Home() {
    const [addNewTask, setAddNewTask] = useState(false);

    const handleAddNewTask = () => {
        setAddNewTask(true)
    }

    return (
        <div className="relative h-screen bg-[#212121]">
            <div className="grid grid-cols-10">
                <div className="col-span-2 md:col-span-1">
                    <Menu onAddNewTask={handleAddNewTask} />
                </div>
                <div className="col-span-8 md:col-span-9">
                    <Content addNewTask={addNewTask} />
                </div>
            </div>
        </div>
    )
}
