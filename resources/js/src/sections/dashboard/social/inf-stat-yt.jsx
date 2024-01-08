import {
	Card,
	CardContent,
	CardHeader, List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack, Box,
	Unstable_Grid2 as Grid,
	Typography
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { connect } from 'react-redux';
const InfStatYt = (props) => {
	const show_percentage = (value) => {

		return Number(value) <= 1 ? Number(value).toFixed(2) + '%' : formatNumber(Number(value).toFixed(1)).replace(".0", "") + '%'
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
				return Number(n / ranges[i].divider).toFixed(1).toString().replace(".0", "") + ranges[i].suffix;
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
	const [show_comment_view_color, SetCommentViewColor] = useState("normal-letter");
	const [show_avg_view_color, SetAvgViewsColor] = useState("normal-letter");
	const [show_view_subscriber_color, SetViewSubscriberColor] = useState("normal-letter");
	const [show_comments_color, SetCommentsColor] = useState("normal-letter");
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
			case "avg_view":
				if (count <= 50) { show_avg_view_color == "low-letter" ? "" : SetAvgViewsColor("low-letter"); return "Low average views" }
				else if (count > 50 && count <= 60) { show_avg_view_color == "normal-letter" ? "" : SetAvgViewsColor("normal-letter"); return "Average/Good average views" }
				else if (count > 60 && count <= 70) { show_avg_view_color == "high-letter" ? "" : SetAvgViewsColor("high-letter"); return "High average views" }
				else if (count > 70) { show_avg_view_color == "veryhigh-letter" ? "" : SetAvgViewsColor("veryhigh-letter"); return "Very high average views" }
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
				if (count <= 0.5) { show_engagement_color == "low-letter" ? "" : SetEngagementColor("low-letter"); return "Low engagement rate" }
				else if (count > 0.5 && count <= 3) { show_engagement_color == "normal-letter" ? "" : SetEngagementColor("normal-letter"); return "Average/Good engagement rate" }
				else if (count > 3 && count <= 5.5) { show_engagement_color == "high-letter" ? "" : SetEngagementColor("high-letter"); return "High engagement rate" }
				else if (count > 5.5) { show_engagement_color == "veryhigh-letter" ? "" : SetEngagementColor("veryhigh-letter"); return "Very high engagement rate" }
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

			case "comment_view_ratio":
				if (count <= 0.01) { show_comment_view_color == "low-letter" ? "" : SetCommentViewColor("low-letter"); return "Low comment to view ratio" }
				else if (count > 0.01 && count <= 0.04) { show_comment_view_color == "normal-letter" ? "" : SetCommentViewColor("normal-letter"); return "Average/Good comment to view ratio" }
				else if (count > 0.04 && count <= 0.16) { show_comment_view_color == "high-letter" ? "" : SetCommentViewColor("high-letter"); return "High comment to view ratio" }
				else if (count > 0.16) { show_comment_view_color == "veryhigh-letter" ? "" : SetCommentViewColor("veryhigh-letter"); return "Very high comment to view ratio" }
			case "average_comment":
				if (count <= 0.3) { show_comments_color == "low-letter" ? "" : SetCommentsColor("low-letter"); return "Low average comments" }
				else if (count > 0.3 && count <= 1) { show_comments_color == "normal-letter" ? "" : SetCommentsColor("normal-letter"); return "Average/Good average comments" }
				else if (count > 1 && count <= 3) { show_comments_color == "high-letter" ? "" : SetCommentsColor("high-letter"); return "High average comments" }
				else if (count > 3) { show_comments_color == "veryhigh-letter" ? "" : SetCommentsColor("veryhigh-letter"); return "Very high average comments" }
			default:
				return "";
		}
	}
	const {
		socialinfo, total, ...other
	} = props;
	let tmp = total == "total" ? socialinfo["youtube"] : socialinfo

	return (

		<Grid container spacing={3}
		>
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/subscribers.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Subscribers
										</Typography>
									)}
									secondary={(
										<>

											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.follower_count ? formatNumber(tmp.follower_count) : '0'}
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
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.follower_count ? getShowing(tmp.follower_count, "subscribers") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/avg_view.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Average Views
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.avg_view ? show_percentage(Number(tmp.avg_view) / Number(tmp.follower_count) * 100) : '0%'}

											</Typography>
											<Typography
												color="text.secondary"
												sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
												variant="body1"
												className={`custom-typo ${show_views_color}`}
											>
												<Grid container>
													<Grid item xs={1} md={1} sm={1}
														className='bullet-img'
													>

													</Grid>
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.avg_view ? getShowing(Number(tmp.avg_view) / Number(tmp.follower_count) * 100, "avg_view") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/heart.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Average Likes
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.avg_like ? show_percentage(Number(tmp.avg_like) / Number(tmp.follower_count) * 100) : '0%'}

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
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.avg_like ? getShowing(Number(tmp.avg_like) / Number(tmp.follower_count) * 100, "avg_like") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/like_dislike.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Like/Dislike Rate
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.avg_like ? show_percentage(Number(tmp.avg_like) / Number(tmp.avg_dislike) * 100) : '0%'}

											</Typography>
											<Typography
												color="text.secondary"
												sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
												variant="body1"
												className={`custom-typo ${show_like_dislike_color}`}
											>
												<Grid container>
													<Grid item xs={1} md={1} sm={1}
														className='bullet-img'
													>

													</Grid>
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.avg_like ? getShowing(Number(tmp.avg_like) / Number(tmp.avg_dislike) * 100, "like_dislike") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/like_view.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Like/View Rate
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.like_view_ratio ? show_percentage(tmp.like_view_ratio) : '0%'}
											</Typography>
											<Typography
												color="text.secondary"
												sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
												variant="body1"
												className={`custom-typo ${show_like_view_color}`}
											>
												<Grid container>
													<Grid item xs={1} md={1} sm={1}
														className='bullet-img'
													>
													</Grid>
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.like_view_ratio ? getShowing(tmp.like_view_ratio, "like_view_ratio") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/comment_view.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Comment/View Rate
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.comment_view_ratio ? show_percentage(tmp.comment_view_ratio) : '0%'}
											</Typography>
											<Typography
												color="text.secondary"
												sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
												variant="body1"
												className={`custom-typo ${show_comment_view_color}`}
											>
												<Grid container>
													<Grid item xs={1} md={1} sm={1}
														className='bullet-img'
													>
													</Grid>
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.comment_view_ratio ? getShowing(tmp.comment_view_ratio, "comment_view_ratio") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/vote.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											View/Subscriber Rate
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.views ? show_percentage(Number(tmp.views) / Number(tmp.follower_count) * 100) : '0%'}

											</Typography>
											<Typography
												color="text.secondary"
												sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
												variant="body1"
												className={`custom-typo ${show_view_subscriber_color}`}
											>
												<Grid container>
													<Grid item xs={1} md={1} sm={1}
														className='bullet-img'
													>

													</Grid>
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
														{tmp && tmp.views ? getShowing(Number(tmp.views) / Number(tmp.follower_count) * 100, "view_subscriber_ratio") : ''}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/engagement.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Engagement Rate
										</Typography>
									)}
									secondary={(
										<>
											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
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
													<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/total_view.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Total Views
										</Typography>
									)}
									secondary={(
										<>

											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.views ? formatNumber(tmp.views) : '0'}
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
			<Grid item xs={12} md={4}
				className='custom-grid'
			>
				<Card className='stat-card'>
					<CardContent style={{ paddingTop: 0, paddingBottom: 0, width: '-webkit-fill-available' }}>
						<List sx={{ mt: 2 }}>
							<ListItem
								disableGutters
							// key={product.id}
							>
								<ListItemAvatar sx={{ pr: 2, width: '28%' }}>
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
										<img className="custom-img"
											alt="ss"
											src='/assets/stats/media.png'
										/>
									</Box>
								</ListItemAvatar>
								<ListItemText
									sx={{ pl: 1 }}
									primary={(
										<Typography
											color="text.stat"

											sx={{ fontWeight: 400, fontSize: '1.1em', wordWrap: 'break-word' }}
											variant="subtitle2"
										>
											Video Count
										</Typography>
									)}
									secondary={(
										<>

											<Typography
												color="text.secondary"
												sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
												variant="body1"
											>
												{tmp && tmp.videos ? formatNumber(tmp.videos) : '0'}
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


	);
};

const mapStateToProps = state => ({
	socialinfo: state.profile.socialinfo
})
export default connect(mapStateToProps)(InfStatYt);