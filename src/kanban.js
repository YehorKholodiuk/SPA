import {useState} from "react";
import {Box, Grid, Typography} from "@mui/material";
import Column from "./Column";
import CreateNewTaskModal from "./CreateNewTaskModal";

const initialTasks = [
    {id: Math.random(), priority: 1, status: 'done', name: 'Task 1', description: 'Learn JS'},
    {id: Math.random(), priority: 2, status: 'in progress', name: 'Task 2', description: 'Learn REACT'},
    {id: Math.random(), priority: 3, status: 'review', name: 'Task 3', description: 'Learn BOOTSTRAP'},
    {id: Math.random(), priority: 4, status: 'todo', name: 'Task 4', description: 'Get a JOB'},
    {id: Math.random(), priority: 10, status: 'todo', name: 'Task 5', description: 'Rest in Cancun'},
]

function Kanban() {
    const columns = ['todo', 'in progress', 'review', 'done']
    const [tasks, setTasks] = useState(initialTasks)

    const addNewTask = (task) => {
        setTasks([...tasks, task])
    }

    return (
        <div>
            <Box sx={{width: '100%', maxWidth: 1200, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                <Typography variant="h3" component="div" gutterBottom>Kanban board</Typography>
            </Box>

            <CreateNewTaskModal columns={columns} addNewTask={addNewTask}/>

            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} columns={columns.length}>
                    {columns.map((el, index) => <Column key={index} status={el} tasks={tasks}/>)}
                </Grid>
            </Box>

        </div>
    );
}

export default Kanban;
