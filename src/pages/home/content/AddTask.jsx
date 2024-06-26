import logo from "/src/assets/logo2.png"

export function AddTask () {

    return (
        <div className=" bg-[#D3E1E2] mt-6 md:mt-7 p-4 rounded-xl w-full max-w-96 md:min-w-[600px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <div className="flex justify-center ">
                <img src={logo} alt="logo" className=" w-24"/>
            </div>
            <div className="flex justify-center items-center text-center">
                <form >
                    <h1 className=" font-semibold text-2xl text-center pb-5">Adicione uma tarefa:</h1>
                    <label htmlFor="title"><input type="text" id="title"/></label>
                    <label htmlFor="title"><input type="" id="title"/></label>

                    <div className="flex justify-between pt-5">
                        <button className="bg-[#39c07461] p-2 font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#39c07494]">Cancelar</button>
                        <button className="bg-[#39c073] p-2 font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#39c074de]">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}