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
import { OutreachMemberCard } from './outreach-member-card';
import { subDays, subHours, subMinutes, subSeconds } from 'date-fns';
const now = new Date();

export const OutreachCard = (props) => {
    const { company,order, ...other } = props;
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
                        <div>
                            <Typography sx={{ color: "text.primary" }} style={{ fontSize: 24, fontWeight: 600 }}>
                                Group Name
                            </Typography>
                            <Typography sx={{ color: "text.primary" }} style={{ fontSize: 20 }}>
                                {order==0?"Favorites":company[0]['group_name']}
                            </Typography>
                        </div>
                    </Stack>

                    <Stack
                        alignItems="center"
                        direction="row"
                        className="right-panel"
                        spacing={2}
                    >
                        <Button
                            // onClick={handleInvite}
                            size="small"
                            className='right-btn'
                            startIcon={(
                                <>
                                    <img src="/assets/icons/invite.svg" />
                                </>
                            )}
                            variant="outlined"
                        >
                            Invite To Project
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
                            Send Mass Message
                        </Button>
                    </Stack>
                </Stack>
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
                    <Typography sx={{ color: "text.primary" }} style={{ fontSize: 18, fontWeight: 600 }}>
                        Influeners in this group
                    </Typography>
                </Stack>
                <Stack
                // alignItems="center"
                // direction="row"
                // flexWrap="wrap"
                // justifyContent="space-between"
                // sx={{
                //     px: 2,
                //     py: 1.5
                // }}
                >
                    {company[0]&&company[0].detail==null?<></>:<OutreachMemberCard
                        key={order}
                        company={company}
                        order={order}
                    />}

                </Stack>
            </CardContent>
        </Card >
    );
};

OutreachCard.propTypes = {
    company: PropTypes.object.isRequired
};
