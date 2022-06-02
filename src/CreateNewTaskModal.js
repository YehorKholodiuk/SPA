import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateNewTaskModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const priorities = [5, 4, 3, 2, 1]
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    function onSave() {
        const task = {id: Math.random(), priority, status, name, description}
        props.addNewTask(task)
        setName('')
        setDescription('')
        setPriority('')
        setStatus('')
        handleClose()
    }

    return (
        <div>
            <Button onClick={handleOpen}>Add a new task</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create a new task
                    </Typography>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {m: 1, width: '25ch'},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                label="Task name"
                                id="outlined-size-normal"
                                defaultValue=""
                                value={name}
                                onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div>
                            <TextField
                                label="Task description"
                                id="outlined-size-normal"
                                defaultValue=""
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}/>
                        </div>
                    </Box>

                    <FormControl sx={{m: 1, minWidth: 120}} size="small">
                        <InputLabel id="demo-select-small">Priority</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={priority}
                            label="Priority"
                            onChange={(event) => setPriority(event.target.value)}
                        >
                            {priorities.map(el => <MenuItem value={el}>{el}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <FormControl sx={{m: 1, minWidth: 120}} size="small">
                        <InputLabel id="demo-select-small">Status</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={status}
                            label="Status"
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            {props.columns.map(el => <MenuItem value={el}>{el}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Stack sx={{m: 1, minWidth: 120}} spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={onSave}>Save</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
