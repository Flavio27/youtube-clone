import React from 'react'
import useStyles from './Styles'
import {
  Toolbar, Drawer,
  List, ListItem, ListItemIcon,
  ListItemText, Divider, Box,
  ListSubheader,
  Hidden,
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

export default function ToolBar() {

  const classes = useStyles();


  return (
    <Box display="flex" >
      <Hidden mdDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer} >
            <List >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Inicio'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Em Alta'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Inscrições'} />
              </ListItem>
            </List>

            <Divider />
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<OndemandVideoIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Seus vídeos'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Histórico'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<WatchLaterIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Assistir mais tarde'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<PlaylistPlayIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Playlist'} />
              </ListItem>
            </List>

            <Divider />

            <List>
              <Box fontWeight={900}>
                <ListSubheader>
                  <Box fontWeight="fontWeightBold">
                    MAIS DO YOUTUBE
               </Box>
                </ListSubheader>
              </Box>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'YouTube Premium'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<TheatersIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Filmes'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Jogos'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Ao vivo'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<EmojiObjectsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Aprender'} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<SettingsIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Configurações'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<FlagIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Histórico de denúncias'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<HelpIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Ajuda'} />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>{<FeedbackIcon />}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText
                  }}
                  primary={'Enviar feedback'} />
              </ListItem>
            </List>
            <Divider />
            <Box classes={{ root: classes.links }}>
              <Box>Sobre Impresa</Box>
              <Box> Direitos autorais</Box>
              <Box> Entre em contato</Box>
              <Box> Criadores de conteúdo</Box>
              <Box> Publicidade Desenvolvedores</Box>
              <br />
              <Box> Termos Privacidade </Box>
              <Box> Política e segurança</Box>
              <Box> Como funciona o YouTube </Box>
            </Box>
            <br />
            <Box classes={{ root: classes.cr }}>© 2020 Google LLC</Box>
          </div>
        </Drawer>
      </Hidden>
    </Box>
  )
}
