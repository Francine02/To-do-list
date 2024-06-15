export function Login () {
    return (
        <div className=" flex justify-center mt-36 text-center">
            <div className="w-96 h-80 bg-slate-400 p-5">
                <p className=" text-2xl font-semibold pt-10 pb-5">Olá! Seja bem-vindo(a) ao ToDo.</p>
                <label htmlFor="name">Qual é o seu nome?<br></br>
                    <input type="text" id="name"/>
                </label>
            </div>
        </div>
    )
}