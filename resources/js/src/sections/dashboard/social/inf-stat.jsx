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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from 'react-redux';
export const InfStat = (props) => {
    const {
        socialinfo, ...other
    } = props;

    return (
        <Stack
            spacing={3}
            {...other}>
            <Grid container spacing={3}
            >
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.follower_count ? socialinfo.follower_count : '0'}K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    &#x2022; dgadsgadsg asdgsdgsdgdsgsdgfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            { }
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                                src='/assets/stats/following.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Following Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.following_count ? socialinfo.following_count : '0'}K
                                                </Typography>
                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                                src='/assets/stats/heart.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Average Likes
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={4}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
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
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                sx={{ fontWeight: 400, fontSize: '16px', color: '#9D9D9D' }}
                                                variant="subtitle2"
                                            >
                                                Followers Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    500K
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className='custom-typo'
                                                >
                                                    Macrosdafasdfasdfasdfasfasdfasdfasdfasdfasdfasfd
                                                </Typography>
                                                <Accordion sx={{ boxShadow: 'none' }}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                        sx={{ padding: 0, width: 'max-content' }}
                                                    >
                                                        <Typography
                                                            color="text.secondary"
                                                            sx={{ fontSize: '12px', fontWeight: 600, color: '#2970FF' }}

                                                        >
                                                            Details
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </Stack>
    );
};

const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo
})
export default connect(mapStateToProps)(InfStat);