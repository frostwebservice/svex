import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography, Button, Unstable_Grid2 as Grid, } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CardBottom } from './card-bottom';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import { useState, useCallback } from 'react'
export const InfCard = (props) => {
    const { company, ...other } = props;
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = useCallback(() => {
        setIsLiked(true);
        // setLikes((prevLikes) => prevLikes + 1);
    }, []);
    const handleUnlike = useCallback(() => {
        setIsLiked(false);
        // setLikes((prevLikes) => prevLikes - 1);
    }, []);
    return (
        <Card {...other} style={{ marginTop: 30 }}>
            <CardContent>
                <Stack
                    alignItems="center"
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    sx={{
                        px: 2,
                        py: 1.5
                    }}
                >
                    <Stack
                        alignItems="flex-start"
                        spacing={2}
                        direction={{
                            xs: 'column',
                            sm: 'row'
                        }}
                    >
                        <Avatar
                            component={RouterLink}
                            href={paths.dashboard.jobs.companies.details}
                            src={company.logo}
                            sx={{ width: 74, height: 74 }}
                        // variant="rounded"
                        >
                            {getInitials(company.name)}
                        </Avatar>
                        <div>
                            <Link
                                color="#2970FF"
                                component={RouterLink}
                                href={paths.dashboard.jobs.companies.details}
                                variant="h6"
                                style={{ fontSize: 18 }}
                            >
                                {company.name}
                            </Link>
                            <div className='verified-image'></div>
                            <Typography sx={{ color: "text.primary" }} style={{ fontSize: 14 }}>
                                {company.shortDescription}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                className='font-inter location-pointer'
                                variant="overline"
                                style={{ fontSize: 12, marginTop: 17 }}
                            >
                            </Typography>
                            <Typography
                                color="primary"
                                variant="overline"
                                // variant="subtitle2"
                                style={{ fontSize: 10 }}
                            >
                                This is my location
                            </Typography>
                        </div>
                        <div className='custom-reach'>
                            <Grid container>
                                <Grid item sx={{ color: '#2970FF', fontSize: '11px', fontWeight: 300, pl: 1, pr: 1, pt: 0.5, pb: 0.5 }}>
                                    <div>Reach</div>
                                    <div style={{ fontSize: '16px', fontWeight: 700 }}>
                                        500K
                                    </div>
                                </Grid>
                                <Grid item style={{ display: 'flex', alignItems: 'center', margin: '0 auto' }}>
                                    <div className='reach-arrow'></div>
                                </Grid>
                            </Grid>
                        </div>
                    </Stack>

                    <Stack
                        alignItems="center"
                        direction="row"
                        className="right-panel"
                        spacing={2}
                    >
                        {isLiked
                            ? (
                                <>
                                    <Button
                                        onClick={handleUnlike}
                                        className='right-btn'
                                        startIcon={(
                                            <SvgIcon
                                                sx={{
                                                    transform: 'scale(1.8)',
                                                    color: 'error.main',
                                                    '& path': {
                                                        fill: (theme) => theme.palette.error.main,
                                                        fillOpacity: 1
                                                    }
                                                }}
                                            >
                                                <HeartIcon />
                                            </SvgIcon>
                                        )}
                                    >
                                    </Button>

                                    <Button
                                        // onClick={handleInvite}
                                        sx={{ color: "text.primary" }}
                                        size="small"
                                        className='right-btn'
                                        startIcon={(
                                            <>
                                                <img src="/assets/icons/icon-profile.svg" />
                                            </>
                                        )}
                                        variant="outlined"
                                    >
                                        View Profile
                                    </Button>
                                    <Button
                                        component={RouterLink}
                                        href={paths.dashboard.chat}
                                        size="small"
                                        className="right-btn"
                                        startIcon={(
                                            <SvgIcon>
                                                <MessageChatSquareIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                    >
                                        Send Message
                                    </Button>
                                </>
                            )
                            : (
                                <>
                                    <Button
                                        onClick={handleLike}

                                        className='right-btn'
                                        startIcon={(
                                            <SvgIcon sx={{ transform: 'scale(1.8)' }}>
                                                <HeartIcon />
                                            </SvgIcon>
                                        )}
                                    >

                                    </Button>
                                    <Button
                                        // onClick={handleInvite}
                                        size="small"
                                        className='right-btn'
                                        startIcon={(
                                            <>
                                                <img src="/assets/icons/icon-profile.svg" />
                                            </>
                                        )}
                                        variant="outlined"
                                    >
                                        View Profile
                                    </Button>
                                    <Button
                                        component={RouterLink}
                                        href={paths.dashboard.chat}
                                        size="small"
                                        className="right-btn"
                                        startIcon={(
                                            <SvgIcon>
                                                <MessageChatSquareIcon />
                                            </SvgIcon>
                                        )}
                                        variant="contained"
                                    >
                                        Send Message
                                    </Button>
                                </>

                            )}
                    </Stack>
                </Stack>
                <Box sx={{ mt: 2 }}>
                    <CardBottom jobs={company.jobs} />
                </Box>
            </CardContent>
        </Card >
    );
};

InfCard.propTypes = {
    company: PropTypes.object.isRequired
};
