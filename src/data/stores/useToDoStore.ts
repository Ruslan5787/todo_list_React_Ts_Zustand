import { create } from "zustand";

 interface Task {
    id: string;
    title: string;
    createdAt: number;
 }

interface TodoStore {
    tasks: Task[];
    createTask: (title: string)  => void;
    updateTask: (id: string, title: string)  => void;
    removeTask: (id: string) => void;
}


export const useToDoStore = create<TodoStore>((set, get) => ({
    tasks: [
        {
            id: '1',
            title: 'Go to the dream',
            createdAt: 12,
        }
    ],
    createTask: (title) => {
        const { tasks } = get();
        console.log(tasks);
        
    },
    updateTask: (id, title) => {},
    removeTask: (id) => {},
}))