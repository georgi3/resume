// src/components/pdf/experience/StandardExperiencePDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { WorkExperienceData } from '../../../types/resumeTypes';

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
    jobContainer: {
        marginBottom: 8
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2
    },
    companyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4
    },
    position: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    company: {
        fontSize: 11,
        fontStyle: 'italic'
    },
    dateLocation: {
        fontSize: 10,
        color: '#4b5563'
    },
    achievementsList: {
        marginLeft: 15
    },
    achievementItem: {
        fontSize: 10,
        marginBottom: 2,
        lineHeight: 1.4
    },
    bullet: {
        width: 2,
        height: 2,
        marginRight: 6,
        backgroundColor: 'black',
        borderRadius: 1
    }
});

interface WorkExperienceProps {
    data: WorkExperienceData;
}

const StandardExperiencePDF: React.FC<WorkExperienceProps> = ({ data }) => {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Work Experience</Text>

            {data.experiences.map((job, index) => (
                <View key={index} style={[
                    styles.jobContainer,
                    index !== data.experiences.length - 1 ? { marginBottom: 10 } : {}
                ]}>
                    <View style={styles.jobHeader}>
                        <Text style={styles.position}>{job.position}</Text>
                        <Text style={styles.dateLocation}>{job.startDate} - {job.endDate}</Text>
                    </View>

                    <View style={styles.companyHeader}>
                        <Text style={styles.company}>{job.company}</Text>
                        <Text style={styles.dateLocation}>{job.location}</Text>
                    </View>

                    <View style={styles.achievementsList}>
                        {job.achievements.map((achievement, idx) => (
                            <View key={idx} style={{ flexDirection: 'row', marginBottom: 3 }}>
                                <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                                <Text style={styles.achievementItem}>{achievement}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
};

export default StandardExperiencePDF;