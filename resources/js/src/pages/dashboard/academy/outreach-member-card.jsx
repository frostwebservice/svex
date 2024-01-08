import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import DotsVerticalIcon from '@untitled-ui/icons-react/build/esm/DotsVertical';

import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography, IconButton, Unstable_Grid2 as Grid, } from '@mui/material';
import { RouterLink } from '@/components/router-link';
import { paths } from '@/paths';
import { getInitials } from '@/utils/get-initials';
import { CardBottom } from './card-bottom';
import MessageChatSquareIcon from '@untitled-ui/icons-react/build/esm/MessageChatSquare';
import HeartIcon from '@untitled-ui/icons-react/build/esm/Heart';
import { useState, useCallback } from 'react'
export const OutreachMemberCard = (props) => {
    const { company,order, ...other } = props;
    console.log(company)
    return (
        <Card {...other} style={{ marginTop: 30 }}>
            <CardContent>
                <Grid container>
                    {company.map((group,index) => (
                    <Grid item className="custom-grid-item" xs={12} md={4} sm={6}>
                    <Card>
                        <Stack
                            // alignItems="center"
                            direction="row"
                            flexWrap="wrap"
                            justifyContent="space-between"
                            sx={{
                                px: 2,
                                py: 1.5
                            }}
                            style={{position:"relative"}}
                        >
                            <Stack
                                // alignItems="flex-start"
                                spacing={2}
                                direction={{
                                    xs: 'column',
                                    sm: 'row'
                                }}
                            >
                                <Avatar
                                    component={RouterLink}
                                    href={paths.dashboard.jobs.companies.details}
                                    src={group.detail.profile_pic_url_hd}
                                    sx={{ width: 40, height: 40 }}
                                // variant="rounded"
                                >
                                    {/* {getInitials(company.name)} */}
                                </Avatar>
                                
                                <div>
                                    <Link
                                        component={RouterLink}
                                        href={paths.dashboard.jobs.companies.details}
                                        variant="h6"
                                        style={{ fontSize: 14 }}
                                        sx={{ color: "text.primary" }}
                                    >
                                        {group.detail.username}
                                    </Link>
                                    {/* <div className='verified-image'></div> */}
                                    <Typography sx={{ color: "text.primary" }} style={{ fontSize: 14 }}>
                                        Social Media Influencer
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
                                        {group.detail.city+","+group.detail.Country}
                                    </Typography>
                                </div>
                            </Stack>

                            <Stack
                                alignItems="center"
                                direction="row"
                                className="right-panel vertical-dots"
                                style={{position:"absolute",right:5,top:5}}
                            // spacing={2}
                            >
                                <IconButton>
                                    <SvgIcon>
                                        <DotsVerticalIcon />
                                    </SvgIcon>
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Card>

                </Grid>
                    ))}


                </Grid>

            </CardContent>
        </Card >
    );
};

OutreachMemberCard.propTypes = {
    company: PropTypes.object.isRequired
};
