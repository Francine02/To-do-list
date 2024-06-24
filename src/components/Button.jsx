export function Button ({children}) {
    return (
        <>
            <button className="bg-[#303030] pl-6 pr-6 p-2 rounded-lg mb-4 md:pl-7 md:pr-7 md:mb-5">
                {children}
            </button>
        </>
    )
}