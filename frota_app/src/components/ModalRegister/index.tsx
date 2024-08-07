import React from 'react';
import { Text, View } from 'react-native';

import Modal, { ModalProps } from '../../common/Modal';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import styles from './styles';

interface ModalRegisterFields {
    document: string,
    password: string,
    confirmPassword: string,
    email: string,
    phoneNumber: string,
    location: {
        cep: string,
        street: string,
        number: string,
        neighborhood: string,
        city: string,
        state: string,
    },
    paymentMethod: string,
    creditCard: {
        number: string,
        name: string,
        validity: string,
        cvv: string
    }
}

const ModalRegister: React.FC<ModalProps> = ({ visible, onClose }) => {
    const [step, setStep] = React.useState(1);

    const [fields, setFields] = React.useState<ModalRegisterFields>({
        document: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: '',
        location: {
            cep: '',
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
        },
        paymentMethod: '',
        creditCard: {
            number: '',
            name: '',
            validity: '',
            cvv: ''
        }
    });

    const setField = (name: string, value: string) => {
        setFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    const handleBack = () => {
        console.log('Go back!');
        if (step === 1)
            onClose();
        else
            setStep((prevStep) => prevStep--);
    };

    const handleNext = () => {
        console.log('Next!');
        setStep((prevStep) => prevStep++);
    };

    const handleRegister = () => {
        console.log('Register attempted with: ', fields);
        onClose();
    };

    const documentMask = (value: string): string => {
        value = value.replace(/[^\d]/g, '');
        console.log(value);
        if (value.length <= 11)
            return value
                .replace(/\D/g, '')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        else if (value.length > 11 && value.length < 14)
            return value;
        else if (value.length > 14)
            return value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{4})(\d)/, '$1/$2')
                .replace(/(\d{4})(\d{2})$/, '$1-$2');
        else
            return value;
    };


    const Step1 = () => {
        return (
            <>
                <View style={styles.modalTopIndicator}></View>
                <Text style={styles.title}>Cadastre-se</Text>

                <TextInput
                    label='Documento'
                    value={fields.document}
                    maxLength={18}
                    mask={documentMask}
                    onChangeText={(text) => setField('document', text)}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoFocus
                    style={{ marginTop: 40 }}
                />
                <TextInput
                    label='Senha'
                    value={fields.password}
                    onChangeText={(text) => setField('password', text)}
                    secureTextEntry
                />
            </>
        );
    };

    const Step2 = () => {
        return (
            <>
                <TextInput
                    label='Email'
                    value={fields.email}
                    onChangeText={(text) => setField('email', text)}
                    keyboardType='email-address'
                    autoFocus
                    style={{ marginTop: 40 }}
                />
                <TextInput
                    label='Telefone'
                    value={fields.phoneNumber}
                    onChangeText={(text) => setField('phoneNumber', text)}
                    keyboardType='numeric'
                />
            </>
        );
    };

    const Step3 = () => {
        return (
            <>
            </>
        );
    };

    const Step4 = () => {
        return (
            <>
            </>
        );
    };

    const ActionButtons = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                {
                    step !== 1 &&
                    <Button
                        style={[styles.button, { width: 'calc(50% - 12px)', marginRight: 8 }]}
                        title='Voltar'
                        onPress={handleBack}
                        fullWidth
                        variant='outline'
                    />
                }
                <Button
                    style={[styles.button,
                    {
                        width: step !== 1 ? 'calc(50% - 12px)' : '100%',
                        marginLeft: step !== 1 ? 8 : 0
                    }]}
                    title={step === 4 ? 'Finalizar' : 'Avançar'}
                    onPress={handleNext}
                    fullWidth
                />
            </View>
        );
    };

    return (
        <Modal visible={visible} onClose={onClose}>
            {
                step === 1 &&
                <Step1 />
            }
            {
                step === 2 &&
                <Step2 />
            }
            {
                // ENDEREÇO
                step === 3 &&
                <Step3 />
            }
            {
                // FORMA DE PAGAMENTO
                step === 4 &&
                <Step4 />
            }
            <ActionButtons />
        </Modal>
    );
};

export default ModalRegister;