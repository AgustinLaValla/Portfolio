import React from 'react';
import { ReactComponent as AngularSvg } from './icons/angular.svg';
import { ReactComponent as NgrxSvg } from './icons/ngrx.svg';
import { ReactComponent as RxjsSvg } from './icons/rxjs.svg';
import { ReactComponent as NodejsSvg } from './icons/nodejs.svg';
import { ReactComponent as NestjsSvg } from './icons/nestjs.svg';
import { ReactComponent as ExpressSvg } from './icons/express.svg';
import { ReactComponent as MongoDbSvg } from './icons/mongodb.svg';
import { ReactComponent as ReactSvg } from './icons/react.svg';
import { ReactComponent as SocketIoSvg } from './icons/socket-io.svg';
import { ReactComponent as MaterialUiSvg } from './icons/material-ui.svg';
import { ReactComponent as FirebaseSvg } from './icons/firebase.svg';

export const worksDetails = [
    {
        title: 'Medical appointments Application',
        description: `This application was built with the purpose of facilitating the management of medical appointments in a clinic. It provides tables and calendars to organize the appoiments of each member of the staff and display them in a nice way, alogn with statistics and pacients data storage, among other features.

There is a web version and a desktop version for this App. The first one was built on Angular, NGRX, Node.js, Nest.js, and MongoDb. The second one on Angular, NGRX, Firebase, and Electron. Both implements Angular Material to reach a beatifull UI accordingly Material Design guidelines.
        
        `,
        image: 'images/consultorio-app.png',
        techs: [
            <AngularSvg />,
            <NgrxSvg />,
            <RxjsSvg />,
            <NodejsSvg />,
            <NestjsSvg />,
            <MongoDbSvg />
        ],
        href: 'https://angular-nestjs-consultorio-demo.vercel.app/'
    },
    {
        title: 'Angular Social Chat Networking',
        description: `This is a Social Networking that allows the user to share posts and images, chat with others, follow peole, be followed, like and comment posts. It was developed using Angular, Node.js, Express, MongoDb, and Socket Io. Since web sockets were implemented, the application interacts with the server on a real time basis.

It's full responsive, so that is completely adaptable to any device viewport.`,
        image: 'images/angular-social-app.jpg',
        techs: [
            <AngularSvg />,
            <NodejsSvg />,
            <ExpressSvg />,
            <MongoDbSvg />,
            <SocketIoSvg />
        ],
        href: 'https://angular-social-chat-app.vercel.app'
    },
    {
        title: `React Social Chat Networking`,
        description: `A Social Networking Application conceived on React by which a user can interact with other people sharing post, commenting, or chatting. 

Node.js was implemented as a Backend along with MongoDb and Socket Io. 

The UI is adaptable to any device viewport.`,
        image: 'images/react-social-app.jpeg',
        techs: [
            <ReactSvg />,
            <NodejsSvg />,
            <ExpressSvg />,
            <MongoDbSvg />,
            <SocketIoSvg />
        ],
        href: 'https://social-media-react.vercel.app'
    },
    {
        title: 'Instagram Clone',
        description: `This application were developed when I was taking my first steps in React. I tried to imitate instagram functionalities making a "clone". So it provides a similar UI and features.
          
Firestore were implemented as the database, so that the data is kept in sync across client apps through realtime listeners that Firestore provides. 

The UI is adaptable to any device viewport.`,
        image: 'images/react-instagram.jpeg',
        techs: [
            <ReactSvg />,
            <MaterialUiSvg />,
            <FirebaseSvg />
        ],
        href: 'https://react-instagram-clone-3ec83.web.app/'
    },
    {
        title: 'Spotify Clone',
        description: 'This application utilizes the Spotify API to consume data and display it through a nice UI. There many things that a user can do, such as play songs, follow artists, follow playlists ,search albums, playlist and songs, etc. The UI was developed on Angular',
        techs: [
            <AngularSvg />,
            <RxjsSvg />,
        ],
        image: 'images/spotify-clone.png',
        href: 'https://angular-spotify-clone.vercel.app'
    },
    {
        title: 'Chat App',
        description: 'A desktop chat application built on Angular, firebase and Electron by which a user can chat with other user and create chat groups in real-time basis. It implements Angular Material to reach a beatifull UI accordingly Material Design guidelines',
        image: 'images/chat-app.png',
        techs: [
            <AngularSvg />,
            <RxjsSvg />,
            <FirebaseSvg />
        ],
        href: 'https://chatapp-edd7e.web.app'
    },
]