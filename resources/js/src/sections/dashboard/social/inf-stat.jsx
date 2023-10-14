import {
    Card,
    CardContent,
    CardHeader, List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack, Box,
    Grid,
    Typography
} from '@mui/material';

export const InfStat = (props) => {
    const {
        socialinfo, ...other
    } = props;

    return (
        <Stack
            spacing={3}
            {...other}>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4} sm={4}>
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 20 }}>
                            <List sx={{ mt: 2 }}>
                                <ListItem
                                    disableGutters
                                // key={product.id}
                                >
                                    <ListItemAvatar sx={{ pr: 2 }}>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex',
                                                height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/group.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 'fontWeightBold', fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <Typography
                                                color="text.secondary"
                                                sx={{ mt: 1 }}
                                                variant="body1"
                                            >
                                                fsdfsafd
                                            </Typography>
                                        )} />

                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Stack>
    );
};
export default InfStat;