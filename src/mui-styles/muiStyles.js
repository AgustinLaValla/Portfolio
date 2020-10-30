
export const appTheme = {
    palette: {
        primary: {
            light: '#A382FF',
            main: '#7c4dff',
            dark: '#693DFF',
            contrastText: '#fff'
        }
    }
}

export const setStyles = (theme) => ({

    tooltip: {
        fontSize: '16px'
    },

    root: {
        color: '#fff'
    },

    navbar__coderIcon: {
        fontSize: '50px',
        fill: '#333'
    },

    list: {
        width: 400,
        transition: '0.3s',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            transition: '0.3s'
        }
    },

    listFullScreen: {
        width: '100vw',
        transition: '0.3s'
    },

    listHeader: {
        height: '250px',
        backgroundColor: '#7c4dff',
        padding: '0 30px',
        margin: 0,
        position: 'relative'
    },

    listHeaderCloseIcon: {
        position: 'absolute',
        top: 20,
        left: 30,
        color: '#fff',
        cursor: 'pointer'
    },

    listHeaderFullScreenIcon: {
        position: 'absolute',
        top: 20,
        right: 30,
        color: '#fff',
        cursor: 'pointer'
    },

    listHeaderAvatar: {
        width: 100,
        height: 100
    },

    listContact: {
        padding: '40px 50px 20px 30px',
        display: 'block !important'
    },

    formGroupGridContainer: {
        marginBottom: 25
    },

    contactFormBtn: {
        padding: '11px 29px',
        fontWeight: 'bold'
    },

    sidebarList: {
        width: 350,
        [theme.breakpoints.down('xs')]: {
            width: '100vw'
        }
    },
    mySvgStyle: {
        fillColor: theme.palette.primary.main
    },

    sidebarListItem: {
        padding: '20px 20px'
    },

    footer__contactContainer: {
        '& h4': {
            color: 'white',
            marginBottom: 5,
            textAlign: 'center'
        },
        '& h5': {
            color: 'white',
            marginBottom: 5,
            textAlign: 'center'
        },

    },
    footer__conenectContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        }
    },

    home__dataContainer: {
        minHeight: '100vh',
        backgroundColor: "#f5f5f5",
        padding: '20px 20px 0px',
    },

    home__dataLeft: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 20px',
        flex: 'auto auto 50%',

        '& h1': {
            fontSize: '45px',
            transform: 'translateY(-30px)',

        },

        '& p': {
            textAlign: 'justify'
        },

        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            '& h1': {
                fontSize: '30px',
                textAlign: 'center',
                transform: 'translateY(0px)',
            },

            '& p': {
                marginTop: 30,
            }
        }
    },

    home__dataRight: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0px 20px',

        flex: 'auto auto 50%',
        [theme.breakpoints.down('sm')]: {
            marginTop: 60
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },

    skillsContainer: {
        width: '100%',
        backgroundColor: "#f5f5f5",
        padding: '35px 100px',
        margin: 0,

        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            padding: '30px 100px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '20px 20px'
        }
    },

    paper: {
        width: '100%',
        minHeight: 780,
        position: 'relative',
        boxSizing: 'border-box',
        padding: '50px 45px'
    },

    skils__fabIcon: {
        position: 'absolute',
        top: '-25px',
        left: '50%',
        transform: 'translateX(-50%)'
    },

    skills__techIconsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        gridColumnGap: '10px',
        gridRowGap: '10px',
        justifyItems: 'center',

        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: 'auto'
        },

        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto'
        },
    },

    //About
    about: {
        minHeight: '100vh',
        backgroundColor: "#f5f5f5",
        padding: '0px 20px 40px',
    },
    about__paper: {
        width: '80%',
        display: 'box',
        margin: '0px auto 20px',
        padding: '35px',
        transform: 'translateY(30px)'

    },
    about__fabIcon: {
        transition: '0.3s',
        '&:hover': {
            transform: 'translateY(-4px)'
        }
    },

    about__svgIcon: {
        fill: 'white'
    },

    about__userDataXs: {
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    // --------------------------------- WORKS ---------------------------------

    works: {
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '15px 7.5% 20px',
    },

    works__card: {
        padding: '0px 15px',
        marginTop: 20,
    },

    works__modalContainer: {
        overflowY: 'auto',
    },

    works__modalPaper: {
        margin: '40px 0px',
        width: '40%',
        height: 'auto',
        color: '#868686',
        fontWeight: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        border: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            width: '60%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        }
    },

    works__modalTitle: {
        color: '#363636',
        fontSize: 24,
        lineHeight: '30px',
        fontWeight: 400,
        margin: '10px 0',
        marginTop: '15px'
    },

    works__modalDescription: {
        color: '#454545',
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: 300,
        marginTop: '15px',
        whiteSpace: 'pre-wrap'
    },

    // ---------------------------------- CONTACT ----------------------------------
    contact__paper: {
        width: '60%',
        display: 'block',
        margin: '0px auto 20px',
        transform: 'translateY(40px)',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },

    contact__textField: {
        margin: '15px 0'
    },

})