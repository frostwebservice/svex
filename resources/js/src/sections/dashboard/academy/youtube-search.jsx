import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Box, Button, Card, Stack, SvgIcon, TextField, Unstable_Grid2 as Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { categoryOptions, locationOptions, subscribersOptions, ageOptions, genderOptions, languageOptions, engagementOptions, avgViewsOptions, avglikesOptions, avgDislikesOptions, avgcommentsOptions, totallikesOptions } from './data'
import { useState } from 'react';
const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];

export const YoutubeSearch = () => {
    const [searchParams, setSearchParams] = useState(
        {
            tab: "youtube",
            keywords: "",
            category: "",
            location: "",
            subscribers_from: "",
            subscribers_to: "",
            language: "",
            engagement: "",
            age: "",
            gender: "",
            avg_views: "",
            avg_likes: "",
            avg_dislikes: "",
            avg_comments: "",
            total_likes: "",
            username: "",
            url: "",
            hasPhone: true,
            verified: true
        }
    )
    const onSearch = () => {
        axios
            .post("/api/search_infs", { searchParams })
            .then((response) => {
                console.log(response)
                if (response.data.status === 200) {

                }
            });
    }
    return (
        <>
            <Stack
                // alignItems="center"
                // direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ p: 3 }}
            >
                <Grid container spacing={3}>

                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.keywords}
                                onChange={(e) => setSearchParams({ ...searchParams, keywords: e.target.value })}
                                fullWidth
                                label="Search"
                                name="keywords"
                                placeholder="Keywords"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.category}
                                onChange={(e) => setSearchParams({ ...searchParams, category: e.target.value })}
                                fullWidth
                                label="Category"
                                name="category"
                                select
                                SelectProps={{ native: true }}
                            >
                                {categoryOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.location}
                                onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                                fullWidth
                                label="Location"
                                name="location"
                                select
                                SelectProps={{ native: true }}
                            >
                                {locationOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.subscribers_from}
                                onChange={(e) => setSearchParams({ ...searchParams, subscribers_from: e.target.value })}
                                fullWidth
                                label="Subscribers"
                                name="subscribers_from"
                                select
                                SelectProps={{ native: true }}
                            >
                                {subscribersOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
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
                                value={searchParams.subscribers_to}
                                onChange={(e) => setSearchParams({ ...searchParams, subscribers_to: e.target.value })}
                                fullWidth
                                label="Subscribers"
                                name="subscribers_to"
                                select
                                SelectProps={{ native: true }}
                            >
                                {subscribersOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.age}
                                onChange={(e) => setSearchParams({ ...searchParams, age: e.target.value })}
                                fullWidth
                                label="Age"
                                name="age"
                                select
                                SelectProps={{ native: true }}
                            >
                                {ageOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.gender}
                                onChange={(e) => setSearchParams({ ...searchParams, gender: e.target.value })}
                                fullWidth
                                label="Gender"
                                name="gender"
                                select
                                SelectProps={{ native: true }}
                            >
                                {genderOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.language}
                                onChange={(e) => setSearchParams({ ...searchParams, language: e.target.value })}
                                fullWidth
                                label="Language"
                                name="language"
                                select
                                SelectProps={{ native: true }}
                            >
                                {languageOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.engagement}
                                onChange={(e) => setSearchParams({ ...searchParams, engagement: e.target.value })}
                                fullWidth
                                label="Engagement rate"
                                name="engagement"
                                select
                                SelectProps={{ native: true }}
                            >
                                {engagementOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.avg_views}
                                onChange={(e) => setSearchParams({ ...searchParams, avg_views: e.target.value })}
                                fullWidth
                                label="Avg views"
                                name="avg_views"
                                select
                                SelectProps={{ native: true }}
                            >
                                {avgViewsOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.avg_likes}
                                onChange={(e) => setSearchParams({ ...searchParams, avg_likes: e.target.value })}
                                fullWidth
                                label="Avg likes range"
                                name="avg_likes"
                                select
                                SelectProps={{ native: true }}
                            >
                                {avglikesOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.avg_dislikes}
                                onChange={(e) => setSearchParams({ ...searchParams, avg_dislikes: e.target.value })}
                                fullWidth
                                label="Avg dislikes range"
                                name="avg_dislikes"
                                select
                                SelectProps={{ native: true }}
                            >
                                {avgDislikesOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.avg_comments}
                                onChange={(e) => setSearchParams({ ...searchParams, avg_comments: e.target.value })}
                                fullWidth
                                label="Avg comments range"
                                name="avg_comments"
                                select
                                SelectProps={{ native: true }}
                            >
                                {avgcommentsOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.total_likes}
                                onChange={(e) => setSearchParams({ ...searchParams, total_likes: e.target.value })}
                                fullWidth
                                label="Total likes"
                                name="total_likes"
                                select
                                SelectProps={{ native: true }}
                            >
                                {totallikesOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.username}
                                onChange={(e) => setSearchParams({ ...searchParams, username: e.target.value })}
                                fullWidth
                                label="Search"
                                name="username"
                                placeholder="Username"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                value={searchParams.url}
                                onChange={(e) => setSearchParams({ ...searchParams, url: e.target.value })}
                                fullWidth
                                label="Search"
                                name="url"
                                placeholder="URL"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <FormGroup>
                    <Box sx={{ flexGrow: 1 }}>

                        <FormControlLabel control={<Checkbox value={searchParams.hasPhone} onChange={(e) => setSearchParams({ ...searchParams, hasPhone: !searchParams.hasPhone })} checked={searchParams.hasPhone == 1 ? true : false} />} label="Has Phone number" />
                        <FormControlLabel control={<Checkbox value={searchParams.verified} onChange={(e) => setSearchParams({ ...searchParams, verified: !searchParams.verified })} checked={searchParams.verified == 1 ? true : false} />} label="Is Verified" />
                    </Box>
                </FormGroup>



                <Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={2} sm={3}
                            className='custom-grid1'
                        >
                            <Button
                                sx={{ marginRight: 2, height: 53.13 }}
                                className="res-btn"
                                size="large"
                                fullWidth
                                startIcon={(
                                    <SvgIcon>
                                        <SearchMdIcon />
                                    </SvgIcon>
                                )}
                                onClick={onSearch}
                                variant="contained"
                            >
                                Search
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3} sm={3}
                            className='custom-grid1'
                        >
                            <Button
                                sx={{ marginRight: 2, height: 53.13 }}
                                size="large"
                                className="res-btn"
                                fullWidth
                                startIcon={(
                                    <SvgIcon>
                                        <BookmarkBorderIcon />
                                    </SvgIcon>
                                )}
                                variant="contained"
                            >
                                Save this Search
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3} sm={3}
                            className='custom-grid1 hidden-grid'
                        ></Grid>
                        <Grid item xs={12} md={2} sm={3}
                            className='custom-grid1'
                        >
                            <TextField
                                defaultValue="web"
                                // fullWidth
                                sx={{ height: 53.13 }}
                                label="Saved Searchs"
                                name="saved_searchs"
                                fullWidth
                                select
                                SelectProps={{ native: true }}
                            >
                                {platformOptions.map((option) => (
                                    <option
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} md={2} sm={3}
                            className='custom-grid1'
                        >
                            <Button
                                size="large"
                                className="res-btn"
                                fullWidth
                                variant="contained"
                                sx={{ height: 53.13 }}
                            >
                                Run this Search
                            </Button>
                        </Grid>




                    </Grid>

                </Box>
            </Stack >
        </>
    );
};
