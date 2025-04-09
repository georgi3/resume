// src/components/pdf/education/StandardEducationPDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { EducationData } from '../../../types/resumeTypes';

const styles = StyleSheet.create({
    section: {
        marginBottom: 10
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        textTransform: 'uppercase'
    },
    educationContainer: {
        marginBottom: 8
    },
    educationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2
    },
    degreeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4
    },
    institution: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    degree: {
        fontSize: 11,
        fontStyle: 'italic'
    },
    dateLocation: {
        fontSize: 10,
        color: '#4b5563'
    },
    gpa: {
        fontSize: 10,
        marginTop: 2,
        marginBottom: 2
    },
    achievementsList: {
        marginLeft: 15,
        marginTop: 2
    },
    achievementItem: {
        fontSize: 10,
        marginBottom: 2,
        lineHeight: 1.4
    }
});

interface EducationProps {
    data: EducationData;
}

const StandardEducationPDF: React.FC<EducationProps> = ({ data }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Education</Text>

            {data.education.map((edu, index) => (
                <View key={index} style={[
                    styles.educationContainer,
                    index !== data.education.length - 1 ? { marginBottom: 10 } : {}
                ]}>
                    <View style={styles.educationHeader}>
                        <Text style={styles.institution}>{edu.institution}</Text>
                        <Text style={styles.dateLocation}>{edu.startDate} - {edu.endDate}</Text>
                    </View>

                    <View style={styles.degreeHeader}>
                        <Text style={styles.degree}>
                            {edu.degree} in {edu.field}
                        </Text>
                        <Text style={styles.dateLocation}>{edu.location}</Text>
                    </View>

                    {edu.gpa && (
                        <Text style={styles.gpa}>GPA: {edu.gpa}</Text>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                        <View style={styles.achievementsList}>
                            {edu.achievements.map((achievement, idx) => (
                                <View key={idx} style={{ flexDirection: 'row', marginBottom: 3 }}>
                                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                                    <Text style={styles.achievementItem}>{achievement}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

export default StandardEducationPDF;