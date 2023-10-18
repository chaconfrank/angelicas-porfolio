import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';
import home1 from './assets/home_1.png'
import home2 from './assets/home_2.gif'
import home3 from './assets/home_3.png'



export function Home() {
    return (
        <Box>
            <Box>
                <Stack spacing={2}>
                    <Typography variant="h1" gutterBottom>¡HOLA!</Typography>
                    <Typography>Soy diseñadora de producto, combino creatividad y
                        empatía para crear soluciones que realmente conectan con los usuarios.</Typography>
                    <Grid container direction="row" alignItems="left">
                        <Grid item>
                            <Icon>location_on</Icon>
                        </Grid>
                        <Grid item>
                            <Typography>Valencia - España</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Box>
            <Box >
                <Grid
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    container spacing={4}>
                    <Grid item xs={4}>
                        <Typography style={{fontSize:36}}>Además de mi pasión por el diseño,
                            soy una amante de los viajes, una orgullosa madre y disfruto al
                            máximo compartiendo momentos especiales con mi familia</Typography>
                    </Grid>
                    <Grid display="flex"
                        flexDirection="row"
                        alignItems="center" item xs={8}>
                        <Box>
                            <Stack>
                                <img src={home1} loading="lazy" width={355}/>
                                
                            </Stack>
                        </Box>
                        <Box padding={5}>
                            <Stack spacing={5}>
                                <img src={home2} loading="lazy" width={230} style={{borderRadius:12}}/>
                                <img src={home3} loading="lazy" width={230}/>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}