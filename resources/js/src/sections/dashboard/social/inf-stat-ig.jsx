import {
	Card,
	CardContent,
	CardHeader, List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	SvgIcon,
	Divider,
	CardActions,
	Stack, Box,
	Button,
	Unstable_Grid2 as Grid,
	Container,
	Typography
} from '@mui/material';
import PlusIcon from '@untitled-ui/icons-react/build/esm/Plus';
import { addDays, subDays, subHours, subMinutes } from 'date-fns';
import { usePageView } from '@/hooks/use-page-view';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useSettings } from '@/hooks/use-settings';

import { OverviewBanner } from '@/sections/dashboard/overview/overview-banner';
import { OverviewDoneTasks } from '@/sections/dashboard/overview/overview-done-tasks';
import { OverviewEvents } from '@/sections/dashboard/overview/overview-events';
import { OverviewInbox } from '@/sections/dashboard/overview/overview-inbox';
import { OverviewTransactions } from '@/sections/dashboard/overview/overview-transactions';
import { OverviewPendingIssues } from '@/sections/dashboard/overview/overview-pending-issues';
import { OverviewSubscriptionUsage } from '@/sections/dashboard/overview/overview-subscription-usage';
import { OverviewHelp } from '@/sections/dashboard/overview/overview-help';
import { OverviewJobs } from '@/sections/dashboard/overview/overview-jobs';
import { OverviewOpenTickets } from '@/sections/dashboard/overview/overview-open-tickets';
import { OverviewTips } from '@/sections/dashboard/overview/overview-tips';
const now = new Date();

const InfStatIg = (props) => {
	const settings = useSettings();
	usePageView();

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
	const [show_follower_color, SetFollowerColor] = useState("normal-letter");
	const [show_following_color, SetFollowingColor] = useState("normal-letter");
	const [show_interval_color, SetIntervalColor] = useState("normal-letter");
	const [show_spread_color, SetSpreadColor] = useState("normal-letter");
	const [show_lc_color, SetLcColor] = useState("normal-letter");
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
			case "lc_ratio":
				if (count <= 1) { show_lc_color == "low-letter" ? "" : SetLcColor("low-letter"); return "Low balance" }
				else if (count > 1 && count <= 5) { show_lc_color == "normal-letter" ? "" : SetLcColor("normal-letter"); return "Average/Good balance" }
				else if (count > 5 && count <= 10) { show_lc_color == "high-letter" ? "" : SetLcColor("high-letter"); return "High balance" }
				else if (count > 10) { show_lc_color == "veryhigh-letter" ? "" : SetLcColor("veryhigh-letter"); return "Very high balance" }
			case "engagement_rate":
				if (count <= 1) { show_engagement_color == "low-letter" ? "" : SetEngagementColor("low-letter"); return "Low engagement rate" }
				else if (count > 1 && count <= 3.5) { show_engagement_color == "normal-letter" ? "" : SetEngagementColor("normal-letter"); return "Average/Good engagement rate" }
				else if (count > 3.5 && count <= 6) { show_engagement_color == "high-letter" ? "" : SetEngagementColor("high-letter"); return "High engagement rate" }
				else if (count > 6) { show_engagement_color == "veryhigh-letter" ? "" : SetEngagementColor("veryhigh-letter"); return "Very high engagement rate" }
			case "avg_like":
				if (count <= 2) { show_likes_color == "low-letter" ? "" : SetLikesColor("low-letter"); return "Low average likes" }
				else if (count > 2 && count <= 5) { show_likes_color == "normal-letter" ? "" : SetLikesColor("normal-letter"); return "Average/Good average likes" }
				else if (count > 5 && count <= 10) { show_likes_color == "high-letter" ? "" : SetLikesColor("high-letter"); return "High average likes" }
				else if (count > 10) { show_likes_color == "veryhigh-letter" ? "" : SetLikesColor("veryhigh-letter"); return "Very high average likes" }
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
	let tmp = total == "total" ? socialinfo["instagram"] : socialinfo
	return (
		<>
			{/* <Stack
                spacing={3}
                {...other}> */}

			<Grid container spacing={3}>
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
												// height: 'auto',
												justifyContent: 'center',
												overflow: 'hidden',
												// width: '100%',
												'& img': {
													width: '100%',
													height: 'auto'
												}
											}}
										>
											<img className="custom-img"
												alt="ss"
												src='/assets/stats/group.png'
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
												Followers Count
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
													className={`custom-typo ${show_follower_color}`}
												>
													<Grid container>
														<Grid item xs={1} md={1} sm={1}
															className='bullet-img'
														>
														</Grid>
														<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
															{tmp && tmp.follower_count ? getShowing(tmp.follower_count, "follower") : ''}
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
												src='/assets/stats/following.png'
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
												Following Count
											</Typography>
										)}
										secondary={(
											<>

												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
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
												src='/assets/stats/chat.png'
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
												Average Comments
											</Typography>
										)}
										secondary={(
											<>
												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
													variant="body1"
												>
													{tmp && tmp.avg_comment ? show_percentage(Number(tmp.avg_comment) / Number(tmp.follower_count) * 100) : '0%'}
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
														<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
															{tmp && tmp.avg_comment ? getShowing(Number(tmp.avg_comment) / Number(tmp.follower_count) * 100, "average_comment") : ''}

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
                                                            Average {tmp && tmp.avg_comment ? tmp.avg_comment : 0} comments per post
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
												src='/assets/stats/discuss.png'
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
												Like/Comment Ratio
											</Typography>
										)}
										secondary={(
											<>
												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
													variant="body1"
												>
													{tmp && tmp.lc_ratio ? show_percentage(tmp.lc_ratio) : '0%'}
												</Typography>
												<Typography
													color="text.secondary"
													sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
													variant="body1"
													className={`custom-typo ${show_lc_color}`}
												>
													<Grid container>
														<Grid item xs={1} md={1} sm={1}
															className='bullet-img'
														>
														</Grid>
														<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
															{tmp && tmp.lc_ratio ? getShowing(tmp.lc_ratio, "lc_ratio") : ''}
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
                                                            {tmp && tmp.lc_ratio ? tmp.lc_ratio : 0}%
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
												Like Spread
											</Typography>
										)}
										secondary={(
											<>
												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
													variant="body1"
												>
													{tmp && tmp.likes_spread ? show_percentage(tmp.likes_spread) : '0%'}
												</Typography>
												<Typography
													color="text.secondary"
													sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
													variant="body1"
													className={`custom-typo ${show_spread_color}`}
												>
													<Grid container>
														<Grid item xs={1} md={1} sm={1}
															className='bullet-img'
														>
														</Grid>
														<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
															{tmp && tmp.likes_spread ? getShowing(tmp.likes_spread, "like_spread") : ''}
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
												src='/assets/stats/clock.png'
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
												Average Post Interval
											</Typography>
										)}
										secondary={(
											<>
												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
													variant="body1"
												>
													{tmp && tmp.avg_post_interval ? show_percentage(tmp.avg_post_interval) : '0%'}
												</Typography>
												<Typography
													color="text.secondary"
													sx={{ mt: 1, fontSize: '14px', color: '#008EAD', fontWeight: 600, wordWrap: 'break-word' }}
													variant="body1"
													className={`custom-typo ${show_interval_color}`}
												>
													<Grid container>
														<Grid item xs={1} md={1} sm={1}
															className='bullet-img'
														>
														</Grid>
														<Grid item xs={10} md={10} sm={10} className='custom-sub-panel' sx={{ fontSize: "1em" }}>
															{tmp && tmp.avg_post_interval ? getShowing(tmp.avg_post_interval, "post_interval") : ''}
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
                                                            {tmp && tmp.avg_post_interval ? tmp.avg_post_interval : 0}%
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
												Reels Count
											</Typography>
										)}
										secondary={(
											<>

												<Typography
													color="text.secondary"
													sx={{ fontSize: '2.3em', color: '#4466F2', fontWeight: 700, wordWrap: 'break-word' }}
													variant="body1"
												>
													{tmp && tmp.reels ? formatNumber(tmp.reels) : '0'}
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

			{/* </Stack> */}
		</>
	);
};

const mapStateToProps = state => ({
	socialinfo: state.profile.socialinfo
})
export default connect(mapStateToProps)(InfStatIg);