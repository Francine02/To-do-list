export function Task () {
    return (
        <div className="bg-[#D3E1E2] mt-6 md:mt-7 p-5 rounded-xl w-full max-w-96 md:max-w-[590px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="grid grid-cols-5">
                <div className=" col-span-1">
                    <button className="p-5 bg-white rounded-full hover:opacity-90 active:opacity-70 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"></button>
                </div>
                <div className=" col-span-4 pl-2">
                    <h1 className=" text-lg font-semibold">Titulo</h1>
                    <p className="text-sm"></p>
                    <p className="font-bold text-[#606060] pt-3 text-sm">16/05 - 20/07</p>
                </div>
            </div>
        </div>
    )
}