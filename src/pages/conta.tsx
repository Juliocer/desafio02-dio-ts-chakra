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

    // Proteção 1: Verifica se está logado
    useEffect(() => {
        if (!isLoggedIn){
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    // Proteção 2: Busca dados e valida ID
    useEffect(() => {
        // Só busca se estiver logado
        if (!isLoggedIn) return;

        const getData = async () => {
            try {
                const data = await api as UserData;

                // Valida se o ID da URL é do usuário logado
                if (id !== data.id){
                    console.warn('ID invalido, redirecionando...');
                    navigate('/')
                    return;
                }

                // Só seta os dados se ID estiver correto
                setUserData(data);

            } catch (error) {
                console.error('Erro ao carregar dados:', error);
                navigate('/');
            }
        };
        getData();
    }, [id, isLoggedIn, navigate]);

    // Formata a data/hora atual
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