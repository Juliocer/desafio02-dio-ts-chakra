export const login = (name: string): void => {
    if(!name.trim()){
        alert('Digite seu nome')
        return;
    }
    alert(`Bem vindo, ${name}!`)
}
