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
                <Grid container>
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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
                                        src={company.logo}
                                        sx={{ width: 40, height: 40 }}
                                    // variant="rounded"
                                    >
                                        {getInitials(company.name)}
                                    </Avatar>
                                    <div>
                                        <Link
                                            component={RouterLink}
                                            href={paths.dashboard.jobs.companies.details}
                                            variant="h6"
                                            style={{ fontSize: 14 }}
                                            sx={{ color: "text.primary" }}
                                        >
                                            {company.name}
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
                                            This is my location
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    className="right-panel vertical-dots"
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

                </Grid>

            </CardContent>
        </Card >
    );
};

OutreachMemberCard.propTypes = {
    company: PropTypes.object.isRequired
};
