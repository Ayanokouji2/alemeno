export interface Course extends SyllabusItem,Student {
    id: number;
    name: string;
    instructor: string;
    description: string;
    enrollmentStatus: string;
    thumbnail: string;
    duration: string;
    schedule: string;
    location: string;
    prerequisites: string[];
    syllabus: SyllabusItem[];
    students?: Student[];
}

interface SyllabusItem {
    week: number;
    topic: string;
    content: string;
}

interface Student {
    id: number;
    name: string;
    email: string;
}
