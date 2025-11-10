import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    beforeEach(() => {
        mockAlert.mockClear();
    });

    it('Deve exibir um alert pedindo o nome se estiver vazio', () => {
        login("");
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite seu nome')
    })

    it('Deve exibir um alert com boas-vindas e o nome digitado', () => {
        login("Julio");
        expect(mockAlert).toHaveBeenCalledWith('Bem-vindo, Julio!')
    })
})