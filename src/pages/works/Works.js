import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { setStyles } from '../../mui-styles/muiStyles';
import { worksDetails } from './works-details';
import './Works.css';
import WorkModal from './WorkModal';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));

const styles = {
    title: {
        margin: '10px 0px', cursor: 'pointer'
    },
    description: {
        fontSize: '17px important'
    }

}

const Works = () => {
    const classes = useStyles();

    const [openWorkModal, setOpenWorkModal] = useState();
    const [workData, setWorkData] = useState();

    const handleOpenModal = (workData) => {
        setWorkData(workData);
        setOpenWorkModal(true);
    }

    const handleCloseModal = () => {
        setOpenWorkModal(false);
        setWorkData(null);
    }

    return (
        <Grid container className={`${classes.works} animated fadeIn`} spacing={0}>
            {
                worksDetails.map(work =>
                    <Grid key={work.title} item sm={6} md={4} className={classes.works__card}>
                        <Paper className={classes.works__itemPaper}>
                            <div className="works__imageContainer" onClick={() => handleOpenModal(work)}>
                                <img src={work.image} alt="" className="works__cardImage" />
                            </div>
                            <div className="works__workData">
                                {
                                    work.techs.map((TechIcon, idx) =>
                                        <Box style={{ display: 'inline-block', margin: '0 5px' }}>
                                            {work.techs[idx]}
                                        </Box>
                                    )
                                }
                                <Typography variant="h5" style={styles.title} onClick={() => handleOpenModal(work)}>
                                    {work.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" style={styles.description}>
                                    {work.description.length > 100 ? work.description.slice(0, 101) + '...' : work.description}
                                </Typography>
                                <div style={{ marginTop: 15 }}>
                                    <Button color="primary" onClick={() => handleOpenModal(work)}>View More</Button>
                                    <Button color="primary">Live Demo</Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                )
            }
            <WorkModal open={openWorkModal} onClose={handleCloseModal} workData={workData} />
        </Grid>

    )
}

export default Works;
