import React from 'react';
import { View, Modal as RNModal, TouchableOpacity } from 'react-native';

import styles from './styles';

export interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    style?: object;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={styles.modalBackground}
                activeOpacity={1}
                onPress={onClose}
            />

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </RNModal>
    );
};

export default Modal;