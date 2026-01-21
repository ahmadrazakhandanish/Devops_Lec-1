/**
 * DevOps Lecture 1 - Demo Application
 * Author: Ahmad Raza Khandanish
 * Date: 2026-01-21
 */

// Student Result Management System
class StudentResult {
    constructor(name, regNo, projectTitle, grade) {
        this.name = name;
        this.regNo = regNo;
        this.projectTitle = projectTitle;
        this.grade = grade;
        this.timestamp = new Date().toISOString();
    }

    getGradePoints() {
        const gradeScale = {
            'A+': 4.0, 'A': 4.0, 'A-': 3.7,
            'B+': 3.3, 'B': 3.0, 'B-': 2.7,
            'C+': 2.3, 'C': 2.0, 'C-': 1.7,
            'D+': 1.3, 'D': 1.0, 'F': 0.0
        };
        return gradeScale[this.grade] || 0;
    }

    isPassing() {
        return this.getGradePoints() >= 1.0;
    }

    getSummary() {
        return `
        ====================================
        Student Result Summary
        ====================================
        Name:           ${this.name}
        Registration:   ${this.regNo}
        Project:        ${this.projectTitle}
        Grade:          ${this.grade}
        Grade Points:   ${this.getGradePoints()}
        Status:         ${this.isPassing() ? '✅ PASSED' : '❌ FAILED'}
        Generated:      ${this.timestamp}
        ====================================
        `;
    }
}

// Utility Functions
function calculateCGPA(results) {
    if (results.length === 0) return 0;
    const totalPoints = results.reduce((sum, r) => sum + r.getGradePoints(), 0);
    return (totalPoints / results.length).toFixed(2);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-PK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

// Demo: Create Ahmad's result
const ahmadResult = new StudentResult(
    'Ahmad',
    '22F-3697',
    'Intelligent Automation System',
    'C+'
);

console.log(ahmadResult.getSummary());
console.log('DevOps Lecture 1 - Git Demo Complete! 🚀');
