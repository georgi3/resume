// src/components/pdf/skills/CompactSkillsPDF.tsx
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
    categorySkills: {
        fontSize: 10,
        lineHeight: 1.4
    },
    skillsList: {
        fontSize: 10,
        lineHeight: 1.4
    },
    bulletPoint: {
        marginHorizontal: 2
    }
});

interface SkillsProps {
    data: SkillsData;
}

const CompactSkillsPDF: React.FC<SkillsProps> = ({ data }) => {
    // If categories exist, render skills grouped by category
    if (data.categories && data.categories.length > 0) {
        return (
            <View style={styles.section}>
                <Text style={styles.title}>Skills</Text>
                <View style={styles.categoriesContainer}>
                    {data.categories.map((category) => {
                        const categorySkills = data.skills.filter(skill => skill.category === category);

                        if (categorySkills.length === 0) return null;

                        // Create a text string with bullet separators
                        const skillsText = categorySkills
                            .map(skill => skill.name)
                            .join(' • ');

                        return (
                            <View key={category} style={styles.categoryContainer}>
                                <Text style={styles.categoryTitle}>{category}:</Text>
                                <Text style={styles.categorySkills}>{skillsText}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    // Otherwise, render a simple inline skill list
    // Create a text string with bullet separators
    const skillsText = data.skills
        .map(skill => skill.name)
        .join(' • ');

    return (
        <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.skillsList}>{skillsText}</Text>
        </View>
    );
};

export default CompactSkillsPDF;