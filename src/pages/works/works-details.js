import React from 'react';
import { ReactComponent as AngularSvg } from './icons/angular.svg';
import { ReactComponent as NgrxSvg } from './icons/ngrx.svg';
import { ReactComponent as RxjsSvg } from './icons/rxjs.svg';
import { ReactComponent as NodejsSvg } from './icons/nodejs.svg';
import { ReactComponent as NestjsSvg } from './icons/nestjs.svg';
import { ReactComponent as ExpressSvg } from './icons/express.svg';
import { ReactComponent as MongoDbSvg } from './icons/mongodb.svg';
import { ReactComponent as ReactSvg } from './icons/react.svg';
import { ReactComponent as ReduxSvg } from './icons/redux.svg';
import { ReactComponent as SocketIoSvg } from './icons/socket-io.svg';
import { ReactComponent as MaterialUiSvg } from './icons/material-ui.svg';
import { ReactComponent as FirebaseSvg } from './icons/firebase.svg';

export const worksDetails = [
    {
        title: 'Consultorio-App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/medical.png',
        techs: [
            <AngularSvg />,
            <NgrxSvg />,
            <RxjsSvg />,
            <NodejsSvg />,
            <NestjsSvg />,
            <MongoDbSvg />
        ]
    },
    {
        title: 'Spotify Clone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/spotify-app.jpg',
        techs: [
            <AngularSvg />,
            <RxjsSvg />,
        ]
    },
    {
        title: 'Social Chat App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/social-app.png',
        techs: [
            <ReactSvg />,
            <ReduxSvg />,
            <MaterialUiSvg />,
            <NodejsSvg />,
            <ExpressSvg />,
            <MongoDbSvg />,
            <SocketIoSvg />
        ]
    },
    {
        title: 'Instagram Clone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/messenger-app.jpg',
        techs: [
            <ReactSvg />,
            <MaterialUiSvg />,
            <FirebaseSvg/>
        ]
    },
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/instagram-clone.png',
        techs: [
            <AngularSvg />,
            <RxjsSvg />,
            <NodejsSvg />,
            <ExpressSvg />,
            <MongoDbSvg />,
            <SocketIoSvg />
        ]
    },
    {
        title: 'Social Network',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'images/chat-app.png',
        techs: [
            <AngularSvg />,
            <RxjsSvg />,
            <FirebaseSvg />
        ]
    },
]