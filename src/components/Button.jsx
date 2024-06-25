export function Button ({children}) {
    return (
        <>
            <button className="bg-[#303030] pl-6 pr-6 p-2 rounded-lg mb-4 md:pl-7 md:pr-7 md:mb-5 hover:opacity-60 active:opacity-30 focus:bg-[#39c073] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <p className="text-lg font-semibold text-white md:text-2xl">
                    {children}
                </p>
            </button>
        </>
    )
}