import { useState } from "react"
import logo from "/src/assets/logo2.png"

export function Login () {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        localStorage.setItem(name, "user");
    }

    return (
        <>
            <div className=" grid grid-cols-1 md:grid-cols-2 bg-[#D3E1E2] md:h-screen">
                <div className=" p-4 flex justify-center">
                    <img src={logo} alt="logo" className=" w-28 md:h-80 md:w-80 md:mt-28"/>
                </div>
                
                <div className=" p-2 pt-14 md:pt-28 text-center bg-white rounded-tl-[8rem]">
                    <p className=" text-2xl md:text-3xl font-bold pt-16 pb-5">Olá! Seja bem-vindo(a) ao <span className=" text-[#39c073]">ToDo</span>.</p>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className=" font-semibold"><p className=" md:text-2xl text-xl pb-4">Qual é o seu nome?</p>
                            <input type="text" id="name" className=" bg-[#D3E1E2] rounded-xl p-1 pl-5 mt-3 text-center shadow-sm" onChange={(e) => setName(e.target.value)}/>
                        </label>
    
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center md:relative">
                            <button className="bg-[#39c073] rounded-xl shadow-sm hover:bg-[#39c074c8] active:bg-[#39c074e0] md:mt-36 disabled:bg-slate-400 disabled:opacity-40" disabled={name.length < 3}>
                                <img src="https://img.icons8.com/?size=100&id=7789&format=png&color=000000" alt="entrar" className="w-14"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}