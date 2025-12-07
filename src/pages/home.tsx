import { useContext, useState } from "react";
import { Box, Center, Heading, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { useLogin } from "../services/login";
import { ButtonLogin } from "../components/Button";
import { Navigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const Home = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { login } = useLogin();

    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            alert('Email invalido')
        }

        setIsLoading(true)
        Navigate('/conta/1')
    }

    /*
    const handleLogin = async () => {
        setIsLoading(true);
        await login(name, email, password);
        setIsLoading(false);
    }; */
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
                />

                <Center>
                    <ButtonLogin
                        onClick={ validateUser(email) }
                        label={isLoading ? 'Carregando...' : 'Entrar'}
                    />
                </Center>
            </Box>
        </Card>
    )
}

export default Home;