import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

export function NewTransactionModal({ isOpen, onRequestClose }) {

    const [type, setType] = useState('deposit');

    

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="reac-modal-close">
                <img src={closeImg} alt="fecha modal" />
            </button>
            <Container>
                <h2>Cadastrar transacao</h2>
                <input
                    placeholder="titulo"
                />
                <input
                    placeholder="valor"
                    type="number"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        className={type === 'deposit' ? 'active' : ''}
                        onClick={() => { setType('deposit'); }}
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw')}}
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>


                </TransactionTypeContainer>

                <input
                    placeholder="categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}