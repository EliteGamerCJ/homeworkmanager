export interface Homework {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
}