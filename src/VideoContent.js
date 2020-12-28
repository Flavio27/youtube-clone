import React from 'react'
import videos from './Videos'
import {Box, Toolbar, Typography, Grid} from '@material-ui/core'

export default function VideoContent({backpage}) {

  return (
    <Box p={1} style={backpage}>
    <Toolbar />
    <Typography
      variant='h5'
      color='textPrimary'
      style={{ fontWeight: 600 }}
    >
      Recomendados
    </Typography>
    <Grid container spacing={2} style={backpage}>
      {
        videos.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12} style={backpage}>
            <Box>
              <img style={{ width: '100%' }} alt={item.tittle} src={item.thumb} />
              <Box>
                <Typography style={{ fontWeight: 600 }} guitterBottom variant='body1' color='textPrimary'>{item.title}</Typography>
                <Typography display='block' variant='body2' color='textSecondary'>{item.channel}</Typography>
                <Typography variant='body2' color='textSecondary'>{`${item.views} • ${item.date}`}</Typography>
              </Box>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </Box>
  )
}
