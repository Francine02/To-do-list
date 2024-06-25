import { Button } from "../../../components/Button";
import { Add } from "../../../components/Add";


export function Menu() {
    return (
        <div className="bg-[#212121] flex flex-col h-screen text-center min-h-screen">
            <div className="flex-grow flex flex-col items-center mt-7 md:justify-center ">
                <Button>S</Button>
                <Button>T</Button>
                <Button>Q</Button>
                <Button>Q</Button>
                <Button>S</Button>
                <Button>S</Button>
                <Button>D</Button>

                <div className="fixed bottom-2 left m-5 md:right-0 md:m-8">
                    <Add/>
                </div>
            </div>
        </div>
    );
}
