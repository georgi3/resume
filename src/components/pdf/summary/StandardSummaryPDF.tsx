// src/components/pdf/summary/StandardSummaryPDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SummaryData } from '../../../types/resumeTypes';

const styles = StyleSheet.create({
    section: {
        marginBottom: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    text: {
        fontSize: 10,
        lineHeight: 1.4
    }
});

interface SummaryProps {
    data: SummaryData;
}

const StandardSummaryPDF: React.FC<SummaryProps> = ({ data }) => {
    return (
        <View>
        <View style={styles.section}>
            <Text style={styles.title}>Professional Summary</Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
        <View style={{ height: 10 }} />
        </View>
    );
};

export default StandardSummaryPDF;