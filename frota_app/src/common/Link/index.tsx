import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface LinkProps {
    title: string;
    onPress: () => void;
}

const Link: React.FC<LinkProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.linkText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Link;