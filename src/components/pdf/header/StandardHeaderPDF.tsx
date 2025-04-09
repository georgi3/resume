// src/components/pdf/header/StandardHeaderPDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { HeaderData } from '../../../types/resumeTypes';

const styles = StyleSheet.create({
    header: {
        marginBottom: 15
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline', // Changed to align-items: baseline to match original
        marginBottom: 10
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16,
        color: '#4a5568'
    },
    contactGrid: {
        marginTop: 8
    },
    contactRow: {
        flexDirection: 'row',
        marginBottom: 5
    },
    contactCol5: {
        width: '40.67%', // Equivalent to col-span-5 in a 12-column grid
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactCol3: {
        width: '30%', // Equivalent to col-span-3 in a 12-column grid
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactCol4: {
        width: '30.3%', // Equivalent to col-span-4 in a 12-column grid
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginRight: 4,
        fontSize: 10
    },
    value: {
        fontSize: 10
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#CBD5E0',
        marginTop: 10
    }
});

interface HeaderProps {
    data: HeaderData;
}

const StandardHeaderPDF: React.FC<HeaderProps> = ({ data }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerRow}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.title}>{data.title}</Text>
            </View>

            <View style={styles.contactGrid}>
                <View style={styles.contactRow}>
                    <View style={styles.contactCol5}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{data.contact.email}</Text>
                    </View>

                    <View style={styles.contactCol3}>
                        <Text style={styles.label}>Phone:</Text>
                        <Text style={styles.value}>{data.contact.phone}</Text>
                    </View>

                    <View style={styles.contactCol4}>
                        <Text style={styles.label}>Location:</Text>
                        <Text style={styles.value}>{data.contact.location}</Text>
                    </View>
                </View>

                {(data.contact.linkedin || data.contact.github || data.contact.website) && (
                    <View style={styles.contactRow}>
                        {data.contact.linkedin && (
                            <View style={styles.contactCol5}>
                                <Text style={styles.label}>LinkedIn:</Text>
                                <Text style={styles.value}>{data.contact.linkedin}</Text>
                            </View>
                        )}

                        {data.contact.github && (
                            <View style={styles.contactCol3}>
                                <Text style={styles.label}>GitHub:</Text>
                                <Text style={styles.value}>{data.contact.github}</Text>
                            </View>
                        )}

                        {data.contact.website && (
                            <View style={styles.contactCol4}>
                                <Text style={styles.label}>Website:</Text>
                                <Text style={styles.value}>{data.contact.website}</Text>
                            </View>
                        )}
                    </View>
                )}
            </View>

            <View style={styles.divider} />
        </View>
    );
};

export default StandardHeaderPDF;