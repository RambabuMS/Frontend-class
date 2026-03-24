import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function FabIcon() {
    return (
        <Fab color="primary" aria-label="add" sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
        }} component={Link} to="/add">
            <AddIcon/>
        </Fab>
    );
}

export default FabIcon;