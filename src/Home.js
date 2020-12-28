import React from 'react'
import useStyles from './Styles'
import Lateral from './ToolBar'
import VideoContent from './VideoContent'
import {
  AppBar, Toolbar, InputBase,
  IconButton,
  useTheme, Switch
} from '@material-ui/core'

import MenuIcone from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';



function Home({ darkMode, setDarkMode }) {

  const classes = useStyles();
  const theme = useTheme();

  const backpage = {
    backgroundColor: darkMode ? '#000000' : '#f4f6f8',
  }

  return (
    <div className={classes.root} style={backpage}>
      <AppBar color="inerheit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
            <MenuIcone />
          </IconButton>
          <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo-yt" className={classes.logo} />
          <div className={classes.space} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon>
                Button
              </SearchIcon>
            </div>
            <InputBase
              placeholder="Pesquisar"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.space} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src="/images/avatar.png" />
        </Toolbar>
      </AppBar>
      <Lateral />
      <VideoContent backpage={backpage}/>
    </div>
  )
}

export default Home


