import { api } from "../api";
/* 
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
*/

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

export const useLogin = () => {

    /*
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate() 
    */

    const login = async (
        name: string,
        email: string,
        password: string
    ): Promise<boolean> => {

        // Validações básicas de campos vazios
        if (!name || name.trim() === '') {
            alert('Por favor, digite seu nome');
            return false;
        }

        if (!email || email.trim() === '') {
            alert('Por favor, digite seu email');
            return false;
        }

        if (!password || password.trim() === '') {
            alert('Por favor, digite sua senha');
            return false;
        }

        try {
            // Buscar dados da API
            const data = await api as UserData;

            // Validar credenciais
            if (email !== data.email) {
                alert('Email inválido');
                return false;
            }

            if (password !== data.password) {
                alert('Senha inválida');
                return false;
            }

            if (name !== data.name) {
                alert('Nome inválido');
                return false;
            }

            /*
             // Login bem-sucedido
            setIsLoggedIn(true)
            navigate(`/conta/${data.id}`)
            alert(`Bem vindo, ${name}!`); */
            return true;

        } catch (error) {
            alert('Erro ao fazer login. Tente novamente.');
            return false;
        }
    }

    return { login }

}
