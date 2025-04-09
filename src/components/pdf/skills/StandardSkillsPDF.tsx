// src/components/pdf/skills/StandardSkillsPDF.tsx
import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SkillsData } from '../../../types/resumeTypes';

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
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    categoryContainer: {
        width: '50%',
        paddingRight: 10,
        marginBottom: 5
    },
    categoryTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 4
    },
    skillRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3
    },
    skillName: {
        fontSize: 10
    },
    levelContainer: {
        flexDirection: 'row'
    },
    levelDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginHorizontal: 1
    },
    filledDot: {
        backgroundColor: '#333333'
    },
    emptyDot: {
        backgroundColor: '#CCCCCC'
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    skillBadge: {
        backgroundColor: '#F3F4F6',
        borderRadius: 3,
        padding: 4,
        marginRight: 5,
        marginBottom: 5,
        fontSize: 10
    }
});

interface SkillsProps {
    data: SkillsData;
}

const StandardSkillsPDF: React.FC<SkillsProps> = ({ data }) => {
    // Function to render skill level indicators
    const renderSkillLevel = (level: number = 0) => (
        <View style={styles.levelContainer}>
            {[1, 2, 3, 4, 5].map((value) => (
                <View
                    key={value}
                    style={[
                        styles.levelDot,
                        value <= level ? styles.filledDot : styles.emptyDot
                    ]}
                />
            ))}
        </View>
    );

    // If categories exist, render skills grouped by category
    if (data.categories && data.categories.length > 0) {
        return (
            <View style={styles.section}>
                <Text style={styles.title}>Skills</Text>
                <View style={styles.categoriesContainer}>
                    {data.categories.map((category) => {
                        const categorySkills = data.skills.filter(skill => skill.category === category);

                        if (categorySkills.length === 0) return null;

                        return (
                            <View key={category} style={styles.categoryContainer}>
                                <Text style={styles.categoryTitle}>{category}</Text>
                                {categorySkills.map((skill, index) => (
                                    <View key={index} style={styles.skillRow}>
                                        <Text style={styles.skillName}>{skill.name}</Text>
                                        {skill.level && renderSkillLevel(skill.level)}
                                    </View>
                                ))}
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    // Otherwise, render a simple skill list
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                    <View key={index} style={styles.skillBadge}>
                        <Text>{skill.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default StandardSkillsPDF;