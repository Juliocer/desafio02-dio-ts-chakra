import { Box, Center, Input, Heading } from "@chakra-ui/react";
import { ButtonLogin } from "../Button/Button";
import { login } from "../../services/login";
import { useState } from "react";

export const Card = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = async () => {
        setIsLoading(true);
        await login(name, email, password);
        setIsLoading(false);
    };

    return (
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
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
                        onClick={handleLogin} 
                        label={isLoading ? 'Carregando...' : 'Entrar'} 
                    />
                </Center>
            </Box>
        </Box>
    );
};