import { Login } from '../login/Login'
import { Home } from '../home/Home'

export function Auth () {
    //Verifica se o LocalStorage está vazio e de acordo com isso, renderiza para a página de acordo
    const authLocalStorage = () => {
        if (localStorage.length === 0) {
            return <Login/>
        } else {
            return <Home/>
        }
    }

    return (
        <div>
            {authLocalStorage()}
        </div>
    )
}