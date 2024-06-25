import { Button } from "../../../components/Button";
import { Add } from "../../../components/Add";
import { useState } from "react";

export function Menu() {
    const[activeButton, setActiveButton] = useState(null)

    return (
        <div className="bg-[#212121] flex flex-col h-screen text-center min-h-screen">
            <div className="flex-grow flex flex-col items-center mt-7 md:justify-center ">
                <Button id="seg" activeButton={activeButton} setActiveButton={setActiveButton}>S</Button>
                <Button id="ter" activeButton={activeButton} setActiveButton={setActiveButton}>T</Button>
                <Button id="qua" activeButton={activeButton} setActiveButton={setActiveButton}>Q</Button>
                <Button id="qui" activeButton={activeButton} setActiveButton={setActiveButton}>Q</Button>
                <Button id="sex" activeButton={activeButton} setActiveButton={setActiveButton}>S</Button>
                <Button id="seb" activeButton={activeButton} setActiveButton={setActiveButton}>S</Button>
                <Button id="dom" activeButton={activeButton} setActiveButton={setActiveButton}>D</Button>

                <div className="fixed bottom-2 left m-5 md:right-0 md:m-8">
                    <Add/>
                </div>
            </div>
        </div>
    );
}
