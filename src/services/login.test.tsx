import { loginName, loginEmail } from "./login"
import { api } from "../api"

describe('loginName', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockName = 'Julio'

    beforeEach(() => {
        mockAlert.mockClear();
    })

    it('Deve exibir um alert com boas-vindas e o nome digitado', () => {
        loginName(mockName);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockName}!`)
    })

    it('Deve exibir um alert pedindo o nome se estiver vazio', () => {
        loginName('');
        expect(mockAlert).not.toHaveBeenCalledWith('Por favor, digite seu nome')
    })

})

describe('loginEmail', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockName = 'julio@gmail.com'

    beforeEach(() => {
        mockAlert.mockClear();
    })

    it('Deve exibir um alert com boas-vindas caso o email seja valido', async () => {
        await loginName(mockName)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockName}!`)
    })

    it('Deve exibir um alert pedindo o nome se estiver vazio', async() => {
        await loginName('')
        expect(mockAlert).not.toHaveBeenCalledWith('Por favor, digite seu nome')
    })

    it('Deve exibir um erro caso o email sja invalido', async() => {
        await loginEmail('julio@gmail.com')
        expect(mockAlert).toHaveBeenCalledWith('Email invalido')
    } )

})