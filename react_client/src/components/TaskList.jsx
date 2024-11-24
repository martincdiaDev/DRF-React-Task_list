import {useEffect, useState} from 'react';
import {getAllTasks} from '../api/task.api'
import {TaskCard} from '../components/TaskCard'; 

export function TaskList() {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTareas(res.data);
        }
        loadTasks();
    }, []);

    return <div className='grid grid-cols-3 gap-3'>
        {tareas.map(tarea => (
            <TaskCard key={tarea.id} tarea={tarea} />
        ))}
    </div>;
}
