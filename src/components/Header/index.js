import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header({onOpenNewTransactionModal}) {
    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transacao
            </button>
            
            </Content>
        </Container>
    )
}

