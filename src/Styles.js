import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',

  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,

  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  space: {
    flexGrow: 1,

  },
  icons: {
    paddingRight: theme.spacing(2)

  },
  menuIcon: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(1)
  },
  logo: {
    height: '25px',

  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  links: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: 550,
    cursor: 'pointer',
    color: 'rgb(96, 96, 96)'
  },
  cr: {
    fontSize: 12,
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: 500,
    color: 'rgb(96, 96, 96)',
    cursor: 'pointer',
  },
  search: {
    flexGrow: 1,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid rgba(0, 0, 0, 0.28)',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

export default useStyles