import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Typography, Box, Button, Card, Stack, SvgIcon, TextField, Unstable_Grid2 as Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { doSearch } from '@/actions';
import { useDispatch, connect } from "react-redux";
import { useState, useEffect } from 'react'
import { RouterLink } from '@/components/router-link';
import { runSavedSearch } from '@/actions'
import { useNavigate } from 'react-router-dom';
const PinterestSave = (props) => {
    const { search } = props
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const email = JSON.parse(localStorage.getItem('email'))
    let data = {
        email: email,
        searchParams: search
    }

    const dispatchSavedSearch = () => {
        dispatch(runSavedSearch("pinterest", search.id))
        navigate("/inf-finder")
    }
    return (
        <>
            <Stack
                flexWrap="wrap"
                gap={1}
                sx={{ p: 3 }}
            >
                <Box>
                    <Stack
                        alignItems="center"
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="space-between"
                    >
                        <Stack
                            alignItems="flex-start"
                            // spacing={2}
                            direction={{
                                xs: 'column',
                                sm: 'column'
                            }}
                        >
                            <Typography sx={{ color: "text.primary" }} style={{ fontSize: 24, fontWeight: 700 }}>
                                Search Name
                            </Typography>
                            <Typography sx={{ color: "text.secondary" }} style={{ fontSize: 20 }}>
                                {search.tab.charAt(0).toUpperCase() + search.tab.slice(1) + " Influencers"}
                            </Typography>
                        </Stack>
                        <Stack
                            alignItems="center"
                            direction="row"
                            spacing={2}
                        >
                            <Button
                                size="large"
                                fullWidth
                                onClick={dispatchSavedSearch}
                                variant="contained"
                                sx={{ height: 53.13 }}
                            >
                                Run this Search
                            </Button>
                        </Stack>
                    </Stack>



                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: "text.primary" }} style={{ fontSize: 18, fontWeight: 600 }}>
                        Filters Selected
                    </Typography>
                </Box>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.keywords}
                                fullWidth
                                label="Search"
                                name="keywords"
                                placeholder="Keywords"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.category}
                                fullWidth
                                label="Category"
                                name="category"
                                placeholder="Category"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.location}
                                fullWidth
                                label="Location"
                                name="location"
                                placeholder="Location"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.language}
                                fullWidth
                                label="Language"
                                name="language"
                                placeholder="Language"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.followers_from}
                                fullWidth
                                label="Followers"
                                name="followers_from"
                                placeholder="Followers"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >


                        <Box sx={{
                            flexGrow: 1, display: 'flex'
                        }}>
                            <span style={{
                                fontWeight: 700, whiteSpace: 'normal', marginRight: 5, display: 'flex'
                                , alignItems: 'center', mr: 5
                            }}>To</span>
                            <TextField
                                value={search.followers_to}
                                fullWidth
                                label="Followers"
                                name="followers_to"
                                placeholder="Followers"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.engagement}
                                fullWidth
                                label="Engagement rate"
                                name="engagement"
                                placeholder="Engagement rate"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.avg_likes}
                                fullWidth
                                label="Avg likes range"
                                name="avg_likes"
                                placeholder="Avg likes range"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.avg_comments}
                                fullWidth
                                label="Avg comments range"
                                name="avg_comments"
                                placeholder="Avg comments range"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.total_likes_count}
                                fullWidth
                                label="Total likes count"
                                name="total_likes_count"
                                placeholder="Total likes count"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.username}
                                fullWidth
                                label="Search"
                                name="username"
                                placeholder="Username"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={search.url}
                                fullWidth
                                label="Search"
                                name="url"
                                placeholder="URL"
                                InputLabelProps={{ shrink: true }}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />
                        </Box>
                    </Grid>
                </Grid>
                <FormGroup>
                    <Box sx={{ flexGrow: 1 }}>

                        <FormControlLabel control={<Checkbox value={search.hasPhone} checked={search.hasPhone == 1 ? true : false} />} label="Has Phone number" />
                        <FormControlLabel control={<Checkbox value={search.verified} checked={search.verified == 1 ? true : false} />} label="Is Verified" />
                    </Box>
                </FormGroup>
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: "text.primary" }} style={{ fontSize: 18, fontWeight: 600 }}>
                        Number of Influencers fall in this search
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{ fontSize: 18, color: "#2970FF" }}>
                        {search.counter}
                    </Typography>
                </Box>
            </Stack >
        </>
    );
};
const mapStateToProps = state => ({
    // results: state.searchresult
})
export default connect(mapStateToProps)(PinterestSave);