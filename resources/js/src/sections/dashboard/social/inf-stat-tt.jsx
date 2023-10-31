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
const InfStatTt = (props) => {
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
    const [show_subscribers_color, SetSubscribersColor] = useState("normal-letter");
    const [show_views_color, SetViewsColor] = useState("normal-letter");
    const [show_videos_color, SetVideosColor] = useState("normal-letter");
    const [show_interval_color, SetIntervalColor] = useState("normal-letter");
    const [show_spread_color, SetSpreadColor] = useState("normal-letter");
    const [show_lc_color, SetLcColor] = useState("normal-letter");
    const [show_engagement_color, SetEngagementColor] = useState("normal-letter");
    const [show_likes_color, SetLikesColor] = useState("normal-letter");
    const [show_like_dislike_color, SetLikeDislikeColor] = useState("normal-letter");
    const [show_like_view_color, SetLikeViewColor] = useState("normal-letter");
    const [show_avg_play_video_color, SetAvgPlayVideoColor] = useState("normal-letter");
    const [show_avg_share_color, SetAvgShareColor] = useState("normal-letter");
    const [show_avg_views_color, SetAvgViewsColor] = useState("normal-letter");
    const [show_view_subscriber_color, SetViewSubscriberColor] = useState("normal-letter");
    const [show_avg_comments_color, SetAvgCommentColor] = useState("normal-letter");
    const getShowing = (count, category) => {

        switch (category) {
            case "subscribers":
                if (count <= 5000) { show_subscribers_color == "verylow-letter" ? "" : SetSubscribersColor("verylow-letter"); return "Nano" }
                else if (count > 5000 && count <= 25000) { show_subscribers_color == "low-letter" ? "" : SetSubscribersColor("low-letter"); return "Micro" }
                else if (count > 25000 && count <= 250000) { show_subscribers_color == "normal-letter" ? "" : SetSubscribersColor("normal-letter"); return "Mid" }
                else if (count > 250000 && count <= 1000000) { show_subscribers_color == "high-letter" ? "" : SetSubscribersColor("high-letter"); return "Macro" }
                else if (count > 1000000) { show_subscribers_color == "veryhigh-letter" ? "" : SetSubscribersColor("veryhigh-letter"); return "Mega" }
            case "views":
                if (count <= 5000) { show_views_color == "verylow-letter" ? "" : SetViewsColor("verylow-letter"); return "Nano" }
                else if (count > 5000 && count <= 25000) { show_views_color == "low-letter" ? "" : SetViewsColor("low-letter"); return "Micro" }
                else if (count > 25000 && count <= 250000) { show_views_color == "normal-letter" ? "" : SetViewsColor("normal-letter"); return "Mid" }
                else if (count > 250000 && count <= 1000000) { show_views_color == "high-letter" ? "" : SetViewsColor("high-letter"); return "Macro" }
                else if (count > 1000000) { show_views_color == "veryhigh-letter" ? "" : SetViewsColor("veryhigh-letter"); return "Mega" }
            case "videos":
                if (count <= 5000) { show_videos_color == "verylow-letter" ? "" : SetVideosColor("verylow-letter"); return "Nano" }
                else if (count > 5000 && count <= 25000) { show_videos_color == "low-letter" ? "" : SetVideosColor("low-letter"); return "Micro" }
                else if (count > 25000 && count <= 250000) { show_videos_color == "normal-letter" ? "" : SetVideosColor("normal-letter"); return "Mid" }
                else if (count > 250000 && count <= 1000000) { show_videos_color == "high-letter" ? "" : SetVideosColor("high-letter"); return "Macro" }
                else if (count > 1000000) { show_videos_color == "veryhigh-letter" ? "" : SetVideosColor("veryhigh-letter"); return "Mega" }
            case "avg_views":
                if (count <= 50) { show_avg_views_color == "low-letter" ? "" : SetAvgViewsColor("low-letter"); return "Low average views" }
                else if (count > 50 && count <= 60) { show_avg_views_color == "normal-letter" ? "" : SetAvgViewsColor("normal-letter"); return "Average/Good average views" }
                else if (count > 60 && count <= 70) { show_avg_views_color == "high-letter" ? "" : SetAvgViewsColor("high-letter"); return "High average views" }
                else if (count > 70) { show_avg_views_color == "veryhigh-letter" ? "" : SetAvgViewsColor("veryhigh-letter"); return "Very high average views" }
            case "view_subscriber_ratio":
                if (count <= 6) { show_view_subscriber_color == "low-letter" ? "" : SetViewSubscriberColor("low-letter"); return "Low average views/subscribers ratio" }
                else if (count > 6 && count <= 35) { show_view_subscriber_color == "normal-letter" ? "" : SetViewSubscriberColor("normal-letter"); return "Average/Good average views/subscribers ratio" }
                else if (count > 35 && count <= 40) { show_view_subscriber_color == "high-letter" ? "" : SetViewSubscriberColor("high-letter"); return "High average views/subscribers ratio" }
                else if (count > 40) { show_view_subscriber_color == "veryhigh-letter" ? "" : SetViewSubscriberColor("veryhigh-letter"); return "Very high average views/subscribers ratio" }

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
            case "lc_ratio":
                if (count <= 1) { show_lc_color == "low-letter" ? "" : SetLcColor("low-letter"); return "Low balance" }
                else if (count > 1 && count <= 5) { show_lc_color == "normal-letter" ? "" : SetLcColor("normal-letter"); return "Average/Good balance" }
                else if (count > 5 && count <= 10) { show_lc_color == "high-letter" ? "" : SetLcColor("high-letter"); return "High balance" }
                else if (count > 10) { show_lc_color == "veryhigh-letter" ? "" : SetLcColor("veryhigh-letter"); return "Very high balance" }
            case "engagement_rate":
                if (count <= 7) { show_engagement_color == "low-letter" ? "" : SetEngagementColor("low-letter"); return "Low engagement rate" }
                else if (count > 7 && count <= 12) { show_engagement_color == "normal-letter" ? "" : SetEngagementColor("normal-letter"); return "Average/Good engagement rate" }
                else if (count > 12 && count <= 17) { show_engagement_color == "high-letter" ? "" : SetEngagementColor("high-letter"); return "High engagement rate" }
                else if (count > 17) { show_engagement_color == "veryhigh-letter" ? "" : SetEngagementColor("veryhigh-letter"); return "Very high engagement rate" }
            case "avg_like":
                if (count <= 1) { show_likes_color == "low-letter" ? "" : SetLikesColor("low-letter"); return "Low average likes" }
                else if (count > 1 && count <= 2) { show_likes_color == "normal-letter" ? "" : SetLikesColor("normal-letter"); return "Average/Good average likes" }
                else if (count > 2 && count <= 4) { show_likes_color == "high-letter" ? "" : SetLikesColor("high-letter"); return "High average likes" }
                else if (count > 4) { show_likes_color == "veryhigh-letter" ? "" : SetLikesColor("veryhigh-letter"); return "Very high average likes" }
            case "like_dislike":
                if (count <= 95) { show_like_dislike_color == "low-letter" ? "" : SetLikeDislikeColor("low-letter"); return "Low like/dislike ratio" }
                else if (count > 95 && count <= 97) { show_like_dislike_color == "normal-letter" ? "" : SetLikeDislikeColor("normal-letter"); return "Average/Good like/dislike ratio" }
                else if (count > 97 && count <= 99) { show_like_dislike_color == "high-letter" ? "" : SetLikeDislikeColor("high-letter"); return "High like/dislike ratio" }
                else if (count > 99) { show_like_dislike_color == "veryhigh-letter" ? "" : SetLikeDislikeColor("veryhigh-letter"); return "Very high like/dislike ratio" }
            case "like_view_ratio":
                if (count <= 1.5) { show_like_view_color == "low-letter" ? "" : SetLikeViewColor("low-letter"); return "Low like to view ratio" }
                else if (count > 1.5 && count <= 3.7) { show_like_view_color == "normal-letter" ? "" : SetLikeViewColor("normal-letter"); return "Average/Good like to view ratio" }
                else if (count > 3.7 && count <= 8.4) { show_like_view_color == "high-letter" ? "" : SetLikeViewColor("high-letter"); return "High like to view ratio" }
                else if (count > 8.4) { show_like_view_color == "veryhigh-letter" ? "" : SetLikeViewColor("veryhigh-letter"); return "Very high like to view ratio" }
            case "avg_play_video":
                if (count <= 50) { show_avg_play_video_color == "low-letter" ? "" : SetAvgPlayVideoColor("low-letter"); return "Low average plays" }
                else if (count > 50 && count <= 60) { show_avg_play_video_color == "normal-letter" ? "" : SetAvgPlayVideoColor("normal-letter"); return "Average/Good average plays" }
                else if (count > 60 && count <= 70) { show_avg_play_video_color == "high-letter" ? "" : SetAvgPlayVideoColor("high-letter"); return "High average plays" }
                else if (count > 70) { show_avg_play_video_color == "veryhigh-letter" ? "" : SetAvgPlayVideoColor("veryhigh-letter"); return "Very high average plays" }
            case "avg_share":
                if (count <= 50) { show_avg_share_color == "low-letter" ? "" : SetAvgShareColor("low-letter"); return "Low average shares" }
                else if (count > 50 && count <= 60) { show_avg_share_color == "normal-letter" ? "" : SetAvgShareColor("normal-letter"); return "Average/Good average shares" }
                else if (count > 60 && count <= 70) { show_avg_share_color == "high-letter" ? "" : SetAvgShareColor("high-letter"); return "High average shares" }
                else if (count > 70) { show_avg_share_color == "veryhigh-letter" ? "" : SetAvgShareColor("veryhigh-letter"); return "Very high average shares" }
            case "avg_comments":
                if (count <= 0.5) { show_avg_comments_color == "low-letter" ? "" : SetAvgCommentColor("low-letter"); return "Low average comments" }
                else if (count > 0.5 && count <= 1) { show_avg_comments_color == "normal-letter" ? "" : SetAvgCommentColor("normal-letter"); return "Average/Good average comments" }
                else if (count > 1 && count <= 3) { show_avg_comments_color == "high-letter" ? "" : SetAvgCommentColor("high-letter"); return "High average comments" }
                else if (count > 3) { show_avg_comments_color == "veryhigh-letter" ? "" : SetAvgCommentColor("veryhigh-letter"); return "Very high average comments" }
            default:
                return "";
        }
    }
    const {
        socialinfo, total, ...other
    } = props;
    let tmp = total == "total" ? socialinfo["tiktok"] : socialinfo

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
                                                src='/assets/stats/subscribers.png'
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
                                                Subscribers
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {tmp && tmp.subscribers ? formatNumber(tmp.subscribers) : '0'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_subscribers_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {tmp && tmp.subscribers ? getShowing(tmp.subscribers, "subscribers") : ''}
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
                                                            {tmp && tmp.follower_count ? tmp.follower_count : '0'} follwers
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
                                                    {tmp && tmp.following_count ? formatNumber(tmp.following_count) : '0'}
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
                                                            {tmp && tmp.follower_count ? tmp.follower_count : '0'} follwers
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
                                                    {tmp && tmp.avg_like ? show_percentage(Number(tmp.avg_like.replace(/,/g, '')) / Number(tmp.subscribers) * 100) : '0%'}

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
                                                            {tmp && tmp.avg_like ? getShowing(Number(tmp.avg_like.replace(/,/g, '')) / Number(tmp.subscribers) * 100, "avg_like") : ''}
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
                                                            Average {tmp && tmp.avg_like ? tmp.avg_like : 0} likes per post
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
                                                    {tmp && tmp.avg_comments ? show_percentage(Number(tmp.avg_comments) / Number(tmp.subscribers) * 100) : '0%'}

                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_avg_comments_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >

                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {tmp && tmp.avg_comments ? getShowing(Number(tmp.avg_comments) / Number(tmp.subscribers) * 100, "avg_comments") : ''}
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
                                                            Average {tmp && tmp.avg_like ? tmp.avg_like : 0} likes per post
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
                                                src='/assets/stats/share.png'
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
                                                Average Shared
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {tmp && tmp.avg_share ? show_percentage(100 * Number(tmp.avg_share.replace(/,/g, '')) / Number(tmp.subscribers)) : '0%'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_avg_share_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {tmp && tmp.avg_share ? getShowing(100 * Number(tmp.avg_share.replace(/,/g, '')) / Number(tmp.subscribers), "avg_share") : ''}
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
                                                            {tmp && tmp.likes_spread ? tmp.likes_spread : 0}%

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
                                                src='/assets/stats/play.png'
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
                                                Average Plays
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {tmp && tmp.avg_play_video ? show_percentage(100 * Number(tmp.avg_play_video.replace(/,/g, '')) / Number(tmp.subscribers)) : '0%'}
                                                </Typography>
                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
                                                    variant="body1"
                                                    className={`custom-typo ${show_avg_play_video_color}`}
                                                >
                                                    <Grid container>
                                                        <Grid item xs={1} md={1} sm={1}
                                                            className='bullet-img'
                                                        >
                                                        </Grid>
                                                        <Grid item xs={10} md={10} sm={10} className='custom-sub-panel'>
                                                            {tmp && tmp.avg_play_video ? getShowing(100 * Number(tmp.avg_play_video.replace(/,/g, '')) / Number(tmp.subscribers), "avg_play_video") : ''}
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
                                                            {tmp && tmp.likes_spread ? tmp.likes_spread : 0}%

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
                                                    {tmp && tmp.engagement_rate ? show_percentage(tmp.engagement_rate) : '0%'}
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
                                                            {tmp && tmp.engagement_rate ? getShowing(tmp.engagement_rate, "engagement_rate") : ''}
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
                                                            {tmp && tmp.engagement_rate ? tmp.engagement_rate : 0}%
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
                                                src='/assets/stats/total_like.png'
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
                                                Total Likes
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {tmp && tmp.total_likes ? formatNumber(tmp.total_likes.replace(/,/g, '')) : '0'}
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
                                                            {tmp && tmp.follower_count ? tmp.follower_count : '0'} follwers
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
                                                src='/assets/stats/media_count.png'
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
                                                Media Count
                                            </Typography>
                                        )}
                                        secondary={(
                                            <>

                                                <Typography
                                                    color="text.secondary"
                                                    sx={{ fontSize: '40px', color: '#4466F2', fontWeight: 700 }}
                                                    variant="body1"
                                                >
                                                    {tmp && tmp.video_count ? formatNumber(tmp.video_count) : '0'}
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
                                                            {tmp && tmp.follower_count ? tmp.follower_count : '0'} follwers
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

            </Grid>

        </Stack>
    );
};

const mapStateToProps = state => ({
    socialinfo: state.profile.socialinfo
})
export default connect(mapStateToProps)(InfStatTt);