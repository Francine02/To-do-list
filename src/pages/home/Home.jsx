import { Menu } from "./menu/Menu";
import { Content } from "./content/Content";

export function Home() {
    return (
        <div className="relative h-screen bg-[#212121]">
            <div className="grid grid-cols-10">
                <div className="col-span-2 md:col-span-1">
                    <Menu />
                </div>
                <div className="col-span-8 md:col-span-9">
                    <Content />
                </div>
            </div>
        </div>
    )
}
