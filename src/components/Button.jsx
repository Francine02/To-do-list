export function Button ({children, id, activeButton, setActiveButton}) {
    const buttonStyle = () => {
        setActiveButton(id)
    }

    const isActive = activeButton == id;
    return (
        <>
            <button className={` w-full pl-6 pr-6 p-2 mb-4 md:pl- md:pr-7 md:mb-5 hover:opacity-60 active:opacity-30  ${isActive ? 'border-l-4 border-[#39c073]' : ''}`} id={id} onClick={buttonStyle}>
                <p className="text-lg font-semibold text-[#C4C4C4] md:text-2xl">
                    {children}
                </p>
            </button>
        </>
    )
}