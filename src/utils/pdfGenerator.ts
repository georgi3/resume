// First, install the required packages:
// npm install @react-pdf/renderer

import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFDownloadLink,
    Font
} from '@react-pdf/renderer';
import { Resume } from '../types/resumeTypes';

// Register fonts if needed
// Font.register({
//   family: 'Roboto',
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
// });

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica'
    },
    section: {
        marginBottom: 10
    },
    header: {
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333'
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 5
    },
    contactItem: {
        fontSize: 10,
        marginRight: 15
    },
    contactLabel: {
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 3,
        textTransform: 'uppercase'
    },
    summaryText: {
        fontSize: 10,
        lineHeight: 1.4,
        marginBottom: 5
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    skillItem: {
        fontSize: 10,
        backgroundColor: '#f0f0f0',
        padding: '3 6',
        marginRight: 5,
        marginBottom: 5,
        borderRadius: 3
    },
    experienceItem: {
        marginBottom: 10
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3
    },
    companyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
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
        color: '#555'
    },
    bullet: {
        fontSize: 10,
        marginBottom: 2,
        paddingLeft: 10
    },
    bulletContent: {
        lineHeight: 1.4
    },
    educationItem: {
        marginBottom: 10
    },
    institution: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    degree: {
        fontSize: 11,
        fontStyle: 'italic'
    },
    footer: {
        fontSize: 9,
        color: '#666',
        textAlign: 'center',
        marginTop: 20
    }
});

// Create Resume PDF Document component
const ResumePDF = ({ resume }: { resume: Resume }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={styles.name}>{resume.headerData.name}</Text>
                    <Text style={styles.title}>{resume.headerData.title}</Text>
                </View>

                <View style={styles.contactRow}>
                    <Text style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Email: </Text>
                        {resume.headerData.contact.email}
                    </Text>
                    <Text style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Phone: </Text>
                        {resume.headerData.contact.phone}
                    </Text>
                    <Text style={styles.contactItem}>
                        <Text style={styles.contactLabel}>Location: </Text>
                        {resume.headerData.contact.location}
                    </Text>
                </View>

                <View style={styles.contactRow}>
                    {resume.headerData.contact.linkedin && (
                        <Text style={styles.contactItem}>
                            <Text style={styles.contactLabel}>LinkedIn: </Text>
                            {resume.headerData.contact.linkedin}
                        </Text>
                    )}
                    {resume.headerData.contact.github && (
                        <Text style={styles.contactItem}>
                            <Text style={styles.contactLabel}>GitHub: </Text>
                            {resume.headerData.contact.github}
                        </Text>
                    )}
                    {resume.headerData.contact.website && (
                        <Text style={styles.contactItem}>
                            <Text style={styles.contactLabel}>Website: </Text>
                            {resume.headerData.contact.website}
                        </Text>
                    )}
                </View>
            </View>

            {/* Professional Summary Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.summaryText}>{resume.summaryData.text}</Text>
            </View>

            {/* Skills Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsContainer}>
                    {resume.skillsData.skills.map((skill, index) => (
                        <Text key={index} style={styles.skillItem}>{skill.name}</Text>
                    ))}
                </View>
            </View>

            {/* Work Experience Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Work Experience</Text>
                {resume.workExperienceData.experiences.map((job, index) => (
                    <View key={index} style={styles.experienceItem}>
                        <View style={styles.jobHeader}>
                            <Text style={styles.position}>{job.position}</Text>
                            <Text style={styles.dateLocation}>{job.startDate} - {job.endDate}</Text>
                        </View>
                        <View style={styles.companyHeader}>
                            <Text style={styles.company}>{job.company}</Text>
                            <Text style={styles.dateLocation}>{job.location}</Text>
                        </View>
                        {job.achievements.map((achievement, i) => (
                            <View key={i} style={styles.bullet}>
                                <Text style={styles.bulletContent}>• {achievement}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {resume.educationData.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                        <View style={styles.jobHeader}>
                            <Text style={styles.institution}>{edu.institution}</Text>
                            <Text style={styles.dateLocation}>{edu.startDate} - {edu.endDate}</Text>
                        </View>
                        <View style={styles.companyHeader}>
                            <Text style={styles.degree}>{edu.degree} in {edu.field}</Text>
                            <Text style={styles.dateLocation}>{edu.location}</Text>
                        </View>
                        {edu.gpa && <Text style={styles.bullet}>• GPA: {edu.gpa}</Text>}
                        {edu.achievements && edu.achievements.map((achievement, i) => (
                            <View key={i} style={styles.bullet}>
                                <Text style={styles.bulletContent}>• {achievement}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Footer Section (if exists) */}
            {resume.footerData && (
                <View style={styles.footer}>
                    {resume.footerData.text && <Text>{resume.footerData.text}</Text>}
                    {resume.footerData.lastUpdated && <Text>Last Updated: {resume.footerData.lastUpdated}</Text>}
                </View>
            )}
        </Page>
    </Document>
);

// PDF Download button component
export const ResumePDFDownloadButton = ({ resume, filename }: { resume: Resume, filename?: string }) => (
    <PDFDownloadLink
        document={<ResumePDF resume={resume} />}
        fileName={filename || `${resume.headerData.name.split(' ').join('_')}_CV.pdf`}
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : 'Download as PDF'
        }
    </PDFDownloadLink>
);

// Function to directly trigger PDF download (for compatibility)
export const generatePDF = (elementId: string, filename: string, resume: Resume) => {
    // Note: elementId is ignored as we're using React PDF's approach
    // We include it in the signature for compatibility with previous code

    // This function creates a temporary link and clicks it
    // It's an alternative to using the PDFDownloadLink component
    import('@react-pdf/renderer').then(ReactPDF => {
        ReactPDF.pdf(<ResumePDF resume={resume} />).toBlob().then(blob => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename || `${resume.headerData.name.split(' ').join('_')}_CV.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
};