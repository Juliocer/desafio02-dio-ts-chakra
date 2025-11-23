import { Box, Center, Input, Heading } from "@chakra-ui/react";
import { ButtonLogin } from "../Button/Button";
import { loginName, loginEmail } from "../../services/login";
import { useState, useEffect } from "react";
import { api } from "../../api";

interface UserData {
    email: string,
    password: string,
    name: string
}

export const Card = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>()

    const [userData, setUserData] = useState<null | UserData>()
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])
    console.log(userData)

    const handleLogin = () => {
        loginName(name);
        loginEmail(email);
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
                />
                <Input
                    placeholder="Digite seu E-Mail"
                    marginTop="10px"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Digite sua Senha"
                    type="password"
                    marginTop="10px"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Center>
                    <ButtonLogin onClick={handleLogin} label='Entrar' />
                </Center>
            </Box>
        </Box>
    );
};

