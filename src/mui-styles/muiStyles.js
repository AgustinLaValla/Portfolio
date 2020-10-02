
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

    list: {
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: '100vw'
        }
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
    }
})