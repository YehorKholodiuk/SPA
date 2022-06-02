import {Grid, Typography} from "@mui/material";
import Task from "./Task";

function Column(props) {
    return (

        <Grid item xs={1}>
            <Typography textAlign={"center"}>{props.status}</Typography>

            {props.tasks
                .filter(el => el.status === props.status)
                .map(el => <Task key={el.id} task={el}/>)}

        </Grid>



    );
}

export default Column;
