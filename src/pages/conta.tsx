import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    if(userData && id !== userData.id){
        navigate('/')
    }

    const formatDate = (): string => {
        const actualData = new Date();
        const dia = actualData.getDate().toString().padStart(2, '0');           // ✅ Dia do mês (1-31)
        const mes = (actualData.getMonth() + 1).toString().padStart(2, '0');    // ✅ Mês (1-12)
        const ano = actualData.getFullYear();                                   // Ano completo
        const hora = actualData.getHours().toString().padStart(2, '0');         // Hora com zero
        const minuto = actualData.getMinutes().toString().padStart(2, '0');     // Minuto com zero

        return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color="white" />
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={formatDate()}/>
                                <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}/>
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta;