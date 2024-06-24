import { Menu } from "./menu/Menu";
import { Content } from "./content/Content";

export function Home() {
    return (
        <div className="relative h-screen">
            <div className="grid grid-cols-9">
                <div className="col-span-2">
                    <Menu />
                </div>
                <div className="col-span-7">
                    <Content />
                </div>
            </div>
        </div>
    )
}
