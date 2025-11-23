import { api } from "../api";

export const loginName = (name: string): void => {
    if(!name || name.trim() === ''){
        alert('Por favor, digite seu nome');
    } else {
        alert(`Bem vindo, ${name}!`);
    }
}

export const loginEmail = async (email: string): Promise<void> => {
    const data:any = await api

    if(email !== data.email){
        return alert('Email inválido')
    }
    alert(`Bem vindo ${email} `);
}