import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CloseIcon from '@material-ui/icons/Close';
import { setStyles } from '../../mui-styles/muiStyles';
import './Works.css';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));


const modalStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
}

const WorkModal = ({ open, onClose, workData }) => {
    const classes = useStyles();
    return (
        <Modal
            open={open}
            onClose={onClose}
            className={classes.works__modalContainer}
        >
            <div style={modalStyle} className={classes.works__modalPaper}>
                {workData &&
                    <Fragment>
                        <div className="closeModalIconContainer" style={{cursor:'pointer'}} onClick={onClose}>
                            <CloseIcon fontSize="small" style={{color:'#333'}}/>
                        </div>

                        <img src={workData.image} alt={workData.title} className="works__modalImage" />
                        
                        <div className="works__modalDataContainer">
                            {
                                workData.techs.map((TechIcon, idx) =>
                                    <Box style={{ display: 'inline-block', margin: '0 5px' }}>
                                        {workData.techs[idx]}
                                    </Box>
                                )
                            }

                            <Typography variant="h3" className={classes.works__modalTitle} id="title">
                                {workData.title}
                            </Typography>

                            <Typography variant="body" className={classes.works__modalDescription} id="description">
                                {workData.description}
                            </Typography>

                            <Button variant="contained" color="primary" style={{ marginTop: '20px', display: 'block' }}>Live Preview</Button>

                        </div>

                    </Fragment>}
            </div>

        </Modal>
    )
}

export default WorkModal
