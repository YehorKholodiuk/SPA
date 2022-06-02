import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

function Task(props) {

    return (

        <Card sx={{ minWidth: 'max' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.task.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.task.description}
                </Typography>
                <Typography variant="body2">
                    Priority: {props.task.priority}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>


    );
}

export default Task;
