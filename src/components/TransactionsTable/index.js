import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log('dados',response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Desenvolvimento de Web site</td>
                            <td className="deposit">R$12000,00</td>
                            <td>Densevolvimento</td>
                            <td>20/02/2021</td>
                        </tr>
                        <tr>
                            <td>Aluguel</td>
                            <td className="withdraw">- R$500,00</td>
                            <td>Densevolvimento</td>
                            <td>20/02/2021</td>
                        </tr>
                    </tbody>
            </table>
        </Container>
    );
}