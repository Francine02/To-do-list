import { Button } from "../../../components/Button";
import { Add } from "../../../components/Add";


export function Menu() {
    return (
        <div className="bg-[#212121] flex flex-col h-screen w-26 text-center md:w-44">
            <div className="flex-grow flex flex-col items-center mt-7 md:justify-center">
                <Button><p className="text-lg font-semibold text-white md:text-2xl">S</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">T</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">Q</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">Q</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">S</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">S</p></Button>
                <Button><p className="text-lg font-semibold text-white md:text-2xl">D</p></Button>

                <div className="absolute bottom-0 left m-5 md:right-0 md:m-8">
                    <Add/>
                </div>
            </div>
        </div>
    );
}
