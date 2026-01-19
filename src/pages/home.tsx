import { useContext, useEffect, useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useLogin } from "../services/login";
import { ButtonLogin } from "../components/Button";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { login } = useLogin();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    // Se já estiver logado, redireciona para a conta
    useEffect(() => {
        if (isLoggedIn){
            navigate('/conta/1');
        }
    }, [isLoggedIn, navigate]);

    const handleLogin = async () => {
        // Previne múltiplos cliques enquanto está carregando
        if (isLoading) return;

        setIsLoading(true);

        try {
            // Chama o serviço de login que apenas valida
            const loggedIn = await login(name, email, password);
            // Se o login for bem-sucedido:
            // - O alert já foi mostrado dentro de login()
            // - setIsLoggedIn(true) já foi chamado
            // - navigate('/conta/1') já foi executado
            // - O useEffect acima vai detectar isLoggedIn = true

            // Se login retornou true (credenciais válidas)
            if(loggedIn) {
                // Home é responsável por atualizar estado e navegar
                setIsLoggedIn(true);
                changeLocalStorage({ login: true })
                navigate('/conta/1');
            }
            // Se loggedIn = false, o alert já foi mostrado em login()

        } catch (error) {
            console.error('Erro no login: ', error);
            alert('Erro inesperado ao fazer login.');
        } finally {
            setIsLoading(false);
        }
    };
     /* primeira forma que eu usava
        setIsLoading(true);
        await login(name, email, password);
        setIsLoading(false);
        */

    return (
        <Card>
            <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
                <Center>
                    <Heading size="md">Faça o login</Heading>
                </Center>

                <Input
                    placeholder="Digite seu Nome"
                    marginTop="10px"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                />
                <Input
                    placeholder="Digite seu E-Mail"
                    marginTop="10px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
                <Input
                    placeholder="Digite sua Senha"
                    type="password"
                    marginTop="10px"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter' && !isLoading){
                            handleLogin();
                        }
                    }}
                />

                <Center>
                    <ButtonLogin
                        onClick={handleLogin}
                        label={isLoading ? 'Carregando...' : 'Entrar'}
                        disabled={isLoading}
                    />
                </Center>
            </Box>
        </Card>
    )
}

export default Home;