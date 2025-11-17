import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockName = 'Julio'

    it('Deve exibir um alert com boas-vindas e o nome digitado', () => {
        login(mockName);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockName}!`)
    })

    it('Deve exibir um alert pedindo o nome se estiver vazio', () => {
        login(mockName);
        expect(mockAlert).not.toHaveBeenCalledWith('Por favor, digite seu nome')
    })

})