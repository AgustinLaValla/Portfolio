import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const MessajeModal = ({ open, onClose, message, error }) => {
    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle>
                <Typography variant="h5">{message}</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {
                        !error
                            ?
                            <Typography variant="body">
                                Thank you for contacting me. I will be in communication with you soon.
                                </Typography>
                            :
                            <Typography variant="body">
                                It seems there is a problem. I suggest you to check your connection and trying again. Thank you.
                                </Typography>

                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={onClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MessajeModal
