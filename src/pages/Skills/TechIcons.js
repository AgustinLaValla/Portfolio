import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { ReactComponent as JSIcon } from './icons/javascript.svg';
import { ReactComponent as TSIcon } from './icons/typescript.svg';
import { ReactComponent as ReactIcon } from './icons/react.svg';
import { ReactComponent as AngularIcon } from './icons/angular.svg';
import { ReactComponent as NodeIcon } from './icons/nodejs.svg';
import { ReactComponent as MongoDbIcon } from './icons/mongodb.svg';
import { ReactComponent as NestIcon } from './icons/nestjs.svg';
import { ReactComponent as ExpressIcon } from './icons/express.svg';
import { ReactComponent as MuiIcon } from './icons/material-ui.svg';
import { ReactComponent as ReduxIcon } from './icons/redux.svg';
import { ReactComponent as NgrxIcon } from './icons/ngrx.svg';
import { ReactComponent as RxjsIcon } from './icons/rxjs.svg';
import { ReactComponent as SocketIcon } from './icons/socket-io.svg';
import { ReactComponent as FirebaseIcon } from './icons/firebase.svg';
import { ReactComponent as HtmlIcon } from './icons/html5.svg';
import { ReactComponent as CssIcon } from './icons/css-3.svg';
import { ReactComponent as BootstrapIcon } from './icons/bootstrap-4.svg';
import { ReactComponent as MySqlSvg } from './icons/mysql.svg';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { setStyles } from '../../mui-styles/muiStyles';

const useStyles = makeStyles(theme => ({ ...setStyles(theme) }));


const TechIcons = () => {
    const classes = useStyles();
    const techIcons = [
        <JSIcon className="skills__techIcon"/>,
        <TSIcon className="skills__techIcon"/>,
        <ReactIcon className="skills__techIcon"/>,
        <AngularIcon className="skills__techIcon"/>,
        <ReduxIcon className="skills__techIcon"/>,
        <RxjsIcon className="skills__techIcon"/>,
        <NgrxIcon className="skills__techIcon"/>,
        <NodeIcon className="skills__techIcon"/>,
        <ExpressIcon className="skills__techIcon"/>,
        <NestIcon className="skills__techIcon"/>,
        <MongoDbIcon className="skills__techIcon"/>,
        <MySqlSvg className="skills__techIcon"/>,
        <FirebaseIcon className="skills__techIcon"/>,
        <SocketIcon  className="skills__techIcon"/>,
        <MuiIcon className="skills__techIcon"/>,
        <BootstrapIcon className="skills__techIcon"/>,
        <HtmlIcon className="skills__techIcon"/>,
        <CssIcon className="skills__techIcon"/>
    ];

    return (
        <Fragment>
            {
                techIcons.map((Icon, index) =>
                    <Box key={index} className={classes.skills__techIcon}>{techIcons[index]}</Box>
                )
            }
        </Fragment>
    )
}

export default TechIcons;
