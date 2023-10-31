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
import { useState } from 'react';
import { connect } from 'react-redux';
const InfStatPt = (props) => {
    const show_percentage = (value) => {

        return Number(value) <= 1 ? Number(value).toFixed(2) + '%' : Number(value).toFixed(1) + '%'
    }
    const ranges = [
        { divider: 1e18, suffix: 'E' },
        { divider: 1e15, suffix: 'P' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'K' }
    ];
    const formatNumber = n => {
        for (var i = 0; i < ranges.length; i++) {
            if (n >= ranges[i].divider) {
                return Number(n / ranges[i].divider).toFixed(1).toString() + ranges[i].suffix;
            }
        }
        return n.toString();
    }
    const plusFormatNumber = n => {
        return n + "+";
    }
    const reachFormat = (a, b) => {
        return a + "-" + b
    }
    const [show_follower_color, SetFollowerColor] = useState("normal-letter");
    const [show_following_color, SetFollowingColor] = useState("normal-letter");
    const [show_interval_color, SetIntervalColor] = useState("normal-letter");
    const [show_spread_color, SetSpreadColor] = useState("normal-letter");
    const [show_avg_save_color, SetAvgColor] = useState("normal-letter");
    const [show_engagement_color, SetEngagementColor] = useState("normal-letter");
    const [show_likes_color, SetLikesColor] = useState("normal-letter");
    const [show_comments_color, SetCommentsColor] = useState("normal-letter");
    const getShowing = (count, category) => {

        switch (category) {
            case "follower":
                if (count <= 2500) { show_follower_color == "verylow-letter" ? "" : SetFollowerColor("verylow-letter"); return "Pico" }
                else if (count > 2500 && count <= 10000) { show_follower_color == "verylow-letter" ? "" : SetFollowerColor("verylow-letter"); return "Nano" }
                else if (count > 10000 && count <= 100000) { show_follower_color == "low-letter" ? "" : SetFollowerColor("low-letter"); return "Micro" }
                else if (count > 100000 && count <= 500000) { show_follower_color == "normal-letter" ? "" : SetFollowerColor("normal-letter"); return "Mid" }
                else if (count > 500000 && count <= 2500000) { show_follower_color == "high-letter" ? "" : SetFollowerColor("high-letter"); return "Macro" }
                else if (count > 2500000) { show_follower_color == "veryhigh-letter" ? "" : SetFollowerColor("veryhigh-letter"); return "Mega" }
            case "following":
                if (count <= 2500) { show_following_color == "verylow-letter" ? "" : SetFollowingColor("verylow-letter"); return "Pico" }
                else if (count > 2500 && count <= 10000) { show_following_color == "verylow-letter" ? "" : SetFollowingColor("verylow-letter"); return "Nano" }
                else if (count > 10000 && count <= 100000) { show_following_color == "low-letter" ? "" : SetFollowingColor("low-letter"); return "Micro" }
                else if (count > 100000 && count <= 500000) { show_following_color == "normal-letter" ? "" : SetFollowingColor("normal-letter"); return "Mid" }
                else if (count > 500000 && count <= 2500000) { show_following_color == "high-letter" ? "" : SetFollowingColor("high-letter"); return "Macro" }
                else if (count > 2500000) { show_following_color == "veryhigh-letter" ? "" : SetFollowingColor("veryhigh-letter"); return "Mega" }
            case "post_interval":
                if (count <= 0.1) { show_interval_color == "low-letter" ? "" : SetIntervalColor("low-letter"); return "Low post interval" }
                else if (count > 0.1 && count <= 0.5) { show_interval_color == "normal-letter" ? "" : SetIntervalColor("normal-letter"); return "Average/Good post interval" }
                else if (count > 0.5 && count <= 1) { show_interval_color == "high-letter" ? "" : SetIntervalColor("high-letter"); return "High average post interval" }
                else if (count > 1) { show_interval_color == "veryhigh-letter" ? "" : SetIntervalColor("veryhigh-letter"); return "Very high post interval" }
            case "like_spread":
                if (count <= 3) { show_spread_color == "low-letter" ? "" : SetSpreadColor("low-letter"); return "Low spread" }
                else if (count > 3 && count <= 7) { show_spread_color == "normal-letter" ? "" : SetSpreadColor("normal-letter"); return "Average/Good spread" }
                else if (count > 7 && count <= 10) { show_spread_color == "high-letter" ? "" : SetSpreadColor("high-letter"); return "High spread" }
                else if (count > 10) { show_spread_color == "veryhigh-letter" ? "" : SetSpreadColor("veryhigh-letter"); return "Very high spread" }
            case "avg_saves":
                if (count <= 1) { show_avg_save_color == "low-letter" ? "" : SetAvgColor("low-letter"); return "Low average saves" }
                else if (count > 1 && count <= 5) { show_avg_save_color == "normal-letter" ? "" : SetAvgColor("normal-letter"); return "Average/Good average saves" }
                else if (count > 5 && count <= 10) { show_avg_save_color == "high-letter" ? "" : SetAvgColor("high-letter"); return "High average saves" }
                else if (count > 10) { show_avg_save_color == "veryhigh-letter" ? "" : SetAvgColor("veryhigh-letter"); return "Very high average saves" }
            case "engagement_rate":
                if (count <= 0.5) { show_engagement_color == "low-letter" ? "" : SetEngagementColor("low-letter"); return "Low engagement rate" }
                else if (count > 0.5 && count <= 0.75) { show_engagement_color == "normal-letter" ? "" : SetEngagementColor("normal-letter"); return "Average/Good engagement rate" }
                else if (count > 0.75 && count <= 1.25) { show_engagement_color == "high-letter" ? "" : SetEngagementColor("high-letter"); return "High engagement rate" }
                else if (count > 1.25) { show_engagement_color == "veryhigh-letter" ? "" : SetEngagementColor("veryhigh-letter"); return "Very high engagement rate" }
            case "avg_like":
                if (count <= 2) { show_likes_color == "low-letter" ? "" : SetLikesColor("low-letter"); return "Low average likes" }
                else if (count > 2 && count <= 5) { show_likes_color == "normal-letter" ? "" : SetLikesColor("normal-letter"); return "Average/Good average likes" }
                else if (count > 5 && count <= 10) { show_likes_color == "high-letter" ? "" : SetLikesColor("high-letter"); return "High average likes" }
                else if (count > 10) { show_likes_color == "veryhigh-letter" ? "" : SetLikesColor("veryhigh-letter"); return "Very high average likes" }
            case "average_comment":
                if (count <= 0.1) { show_comments_color == "low-letter" ? "" : SetCommentsColor("low-letter"); return "Low average comments" }
                else if (count > 0.1 && count <= 1) { show_comments_color == "normal-letter" ? "" : SetCommentsColor("normal-letter"); return "Average/Good average comments" }
                else if (count > 1 && count <= 5) { show_comments_color == "high-letter" ? "" : SetCommentsColor("high-letter"); return "High average comments" }
                else if (count > 5) { show_comments_color == "veryhigh-letter" ? "" : SetCommentsColor("veryhigh-letter"); return "Very high average comments" }
            default:
                return "";
        }
    }
    const {
        socialinfo, ...other
    } = props;

    return (
        <Stack
            spacing={3}
            {...other}>
            <Grid container spacing={3}
            >
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
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
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
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
                                                    {socialinfo && socialinfo.follower_count ? formatNumber(socialinfo.follower_count) : '0'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_follower_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {socialinfo && socialinfo.follower_count ? getShowing(socialinfo.follower_count, "follower") : ''}
                                                        </Grid>

                                                    </Grid>
                                                </Typography>
                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            {socialinfo && socialinfo.follower_count ? socialinfo.follower_count : '0'} follwers
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
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
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
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
                                                    {socialinfo && socialinfo.following_count ? formatNumber(socialinfo.following_count) : '0'}
                                                </Typography>

                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            {socialinfo && socialinfo.follower_count ? socialinfo.follower_count : '0'} follwers
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
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
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
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
                                                    {socialinfo && socialinfo.avg_likes ? show_percentage(Number(socialinfo.avg_likes) / Number(socialinfo.follower_count) * 100) : '0%'}

                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_likes_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >

                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {socialinfo && socialinfo.avg_likes ? getShowing(Number(socialinfo.avg_likes) / Number(socialinfo.follower_count) * 100, "avg_like") : ''}
                                                        </Grid>

                                                    </Grid>

                                                </Typography>
                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            Average {socialinfo && socialinfo.avg_like ? socialinfo.avg_like : 0} likes per post
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/chat.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Average Comments
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.avg_comment ? show_percentage(Number(socialinfo.avg_comment) / Number(socialinfo.follower_count) * 100) : '0%'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_comments_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {socialinfo && socialinfo.avg_comment ? getShowing(Number(socialinfo.avg_comment) / Number(socialinfo.follower_count) * 100, "average_comment") : ''}

                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            Average {socialinfo && socialinfo.avg_comment ? socialinfo.avg_comment : 0} comments per post
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/engagement.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Engagement Rate
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.engagement_rate ? show_percentage(socialinfo.engagement_rate) : '0%'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_engagement_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {socialinfo && socialinfo.engagement_rate ? getShowing(socialinfo.engagement_rate, "engagement_rate") : ''}
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            {socialinfo && socialinfo.engagement_rate ? socialinfo.engagement_rate : 0}%
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/avg_save.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Average Saves
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.avg_saves ? Number(socialinfo.avg_saves).toFixed(0) : '0'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_avg_save_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {socialinfo && socialinfo.avg_saves ? getShowing(socialinfo.avg_saves, "avg_saves") : ''}
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                                {/* <Accordion sx={{ boxShadow: 'none' }}>
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
                                                            {socialinfo && socialinfo.lc_ratio ? socialinfo.lc_ratio : 0}%
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion> */}

                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/board_count.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Board Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.board_count ? plusFormatNumber(socialinfo.board_count) : '0'}
                                                </Typography>


                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/pin_count.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Pin Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.pin_count ? plusFormatNumber(socialinfo.pin_count) : '0'}
                                                </Typography>


                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/reach_count.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Profile Reach - Posts
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.profile_reach && socialinfo.posts ? reachFormat(socialinfo.profile_reach, socialinfo.posts) : '0-0'}
                                                </Typography>


                                            </>
                                        )}

                                    />


                                </ListItem>

                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12}
                    className='custom-grid'
                >
                    <Card className='stat-card'>
                        <CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
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
                                                // height: 100,
                                                justifyContent: 'center',
                                                overflow: 'hidden',
                                                // width: 100,
                                                '& img': {
                                                    width: '100%',
                                                    height: 'auto'
                                                }
                                            }}
                                        >
                                            <img
                                                alt="ss"
                                                src='/assets/stats/reach_count.png'
                                            />
                                        </Box>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ pl: 6 }}
                                        primary={(
                                            <Typography
                                                color="text.stat"

                                                sx={{ fontWeight: 400, fontSize: '16px' }}
                                                variant="subtitle2"
                                            >
                                                Profile Reach - Stories
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {socialinfo && socialinfo.profile_reach && socialinfo.stories ? reachFormat(socialinfo.profile_reach, socialinfo.stories) : '0-0'}
                                                </Typography>


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
export default connect(mapStateToProps)(InfStatPt);