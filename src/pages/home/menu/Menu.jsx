import { Button } from "../../../components/Button";

export function Menu() {
    return (
        <div className="bg-[#212121] flex flex-col h-screen w-24 text-center">
            <div className="flex-grow flex flex-col justify-center items-center">
                <Button><p className="text-lg font-semibold text-white">S</p></Button>
                <Button><p className="text-lg font-semibold text-white">T</p></Button>
                <Button><p className="text-lg font-semibold text-white">Q</p></Button>
                <Button><p className="text-lg font-semibold text-white">Q</p></Button>
                <Button><p className="text-lg font-semibold text-white">S</p></Button>
                <Button><p className="text-lg font-semibold text-white">S</p></Button>
                <Button><p className="text-lg font-semibold text-white">D</p></Button>
            </div>
        </div>
    );
}
