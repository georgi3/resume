// src/components/pdf/footer/StandardFooterPDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { FooterData } from '../../../types/resumeTypes';

const styles = StyleSheet.create({
    footer: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
        textAlign: 'center'
    },
    text: {
        fontSize: 9,
        color: '#6b7280'
    },
    updated: {
        fontSize: 9,
        color: '#6b7280',
        marginTop: 2
    }
});

interface FooterProps {
    data: FooterData;
}

const StandardFooterPDF: React.FC<FooterProps> = ({ data }) => {
    return (
        <View style={styles.footer}>
            {data.text && <Text style={styles.text}>{data.text}</Text>}
            {data.lastUpdated && <Text style={styles.updated}>Last Updated: {data.lastUpdated}</Text>}
        </View>
    );
};

export default StandardFooterPDF;