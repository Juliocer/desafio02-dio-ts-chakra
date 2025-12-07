import { useLogin } from "./login"

/* // Mock da API
jest.mock('../api', () => ({
    api: Promise.resolve({
        email: 'julio@gmail.com',
        password: '123456',
        name: 'Julio'
    })
}))
*/

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const { login } = useLogin();

    beforeEach(() => {
        mockAlert.mockClear();
        mockSetIsLoggedIn.mockClear();
        mockNavigate.mockClear();
    })

    // ✅ TESTES DE SUCESSO
    it('Deve fazer login com sucesso com credenciais válidas', async () => {
        const result = await login('Julio', 'julio@gmail.com', '123456');
        
        expect(result).toBe(true);
        // expect(mockAlert).toHaveBeenCalledWith('Bem vindo, Julio!');
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenLastCalledWith('/1')
    })

    // ✅ TESTES DE VALIDAÇÃO - CAMPOS VAZIOS
    it('Deve exibir erro quando o nome está vazio', async () => {
        const result = await login('', 'julio@gmail.com', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite seu nome');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve exibir erro quando o email está vazio', async () => {
        const result = await login('Julio', '', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite seu email');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve exibir erro quando a senha está vazia', async () => {
        const result = await login('Julio', 'julio@gmail.com', '');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite sua senha');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    // ✅ TESTES DE VALIDAÇÃO - CREDENCIAIS INVÁLIDAS
    it('Deve exibir erro quando o email é inválido', async () => {
        const result = await login('Julio', 'email@errado.com', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Email inválido');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve exibir erro quando a senha é inválida', async () => {
        const result = await login('Julio', 'julio@gmail.com', 'senhaerrada');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Senha inválida');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve exibir erro quando o nome é inválido', async () => {
        const result = await login('Maria', 'julio@gmail.com', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Nome inválido');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    // ✅ TESTES DE VALIDAÇÃO - ESPAÇOS EM BRANCO
    it('Deve considerar nome com apenas espaços como vazio', async () => {
        const result = await login('   ', 'julio@gmail.com', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite seu nome');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve considerar email com apenas espaços como vazio', async () => {
        const result = await login('Julio', '   ', '123456');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite seu email');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })

    it('Deve considerar senha com apenas espaços como vazia', async () => {
        const result = await login('Julio', 'julio@gmail.com', '   ');
        
        expect(result).toBe(false);
        expect(mockAlert).toHaveBeenCalledWith('Por favor, digite sua senha');
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
    })
})