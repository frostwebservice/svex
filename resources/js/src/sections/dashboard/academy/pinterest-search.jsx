import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Box, Button, Card, Stack, SvgIcon, TextField, Unstable_Grid2 as Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, useEffect } from 'react';
import { categoryOptions, locationOptions, followersOptions, ageOptions, genderOptions, languageOptions, engagementOptions, avglikesOptions, avgcommentsOptions, totallikesOptions } from './data'
import { useDispatch, connect } from "react-redux";
import { getSearchs } from '@/actions';
const PinterestSearch = (props) => {
    const { searchs } = props
    const email = JSON.parse(localStorage.getItem('email'));
    const [selectedSearch, setSelectedSearch] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSearchs({ email: email }));

    }, [dispatch])
    const [savedSearchs, setSavedSearchs] = useState(searchs);
    const saveSearch = () => {
        let values = searchParams
        values["email"] = email;
        axios
            .post("/api/save_search", { values })
            .then((response) => {
                if (response.data.status === 200) {
                    dispatch(getSearchs({ email: email }));

                }
            });
    }
    const runSearch = () => {
        console.log(selectedSearch)
        if (selectedSearch > 0) {
            searchs.map((search) => {
                if (search.id == selectedSearch) {
                    setSearchParams({
                        ...searchParams,
                        keywords: search.keywords == null ? "" : search.keywords,
                        category: search.category == null ? "" : search.category,
                        location: search.location == null ? "" : search.location,
                        followers_from: search.followers_from == null ? "" : search.followers_from,
                        followers_to: search.followers_to == null ? "" : search.followers_to,
                        age: search.age == null ? "" : search.age,
                        gender: search.gender == null ? "" : search.gender,
                        language: search.lanugage == null ? "" : search.language,
                        engagement: search.engagement == null ? "" : search.engagement,
                        avg_likes: search.avg_likes == null ? "" : search.avg_likes,
                        avg_comments: search.avg_comments == null ? "" : search.avg_comments,
                        total_likes: search.total_likes == null ? "" : search.total_likes,
                        username: search.username == null ? "" : search.username,
                        url: search.url == null ? "" : search.url,
                        hasPhone: search.hasPhone == 1 ? true : false,
                        verified: search.verified == 1 ? true : false

                    })
                    return;
                }
            })
        }
    }
    const [searchParams, setSearchParams] = useState(
        {
            email: "",
            tab: "pinterest",
            keywords: "",
            category: "",
            location: "",
            followers_from: "",
            followers_to: "",
            age: "",
            gender: "",
            language: "",
            engagement: "",
            avg_likes: "",
            total_likes: "",
            avg_comments: "",
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
                                value={searchParams.followers_from}
                                onChange={(e) => setSearchParams({ ...searchParams, followers_from: e.target.value })}
                                fullWidth
                                label="Followers"
                                name="followers_from"
                                select
                                SelectProps={{ native: true }}
                            >
                                {followersOptions.map((option) => (
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
                                value={searchParams.followers_to}
                                onChange={(e) => setSearchParams({ ...searchParams, followers_to: e.target.value })}
                                fullWidth
                                label="Followers"
                                name="followers_to"
                                select
                                SelectProps={{ native: true }}
                            >
                                {followersOptions.map((option) => (
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
                                label="Total likes count"
                                name="total_likes_count"
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
                                onClick={saveSearch}
                                variant="outlined"
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
                                value={selectedSearch}
                                onChange={(e) => setSelectedSearch(e.target.value)}
                                // fullWidth
                                sx={{ height: 53.13 }}
                                label="Saved Searchs"
                                name="saved_searchs"
                                fullWidth
                                select
                                SelectProps={{ native: true }}
                            >
                                <option
                                    key="0"
                                    value=""
                                >

                                </option>
                                {searchs && searchs.map((option) => {
                                    if (option["tab"] == "pinterest")
                                        return (
                                            <option
                                                key={option["id"]}
                                                value={option["id"]}
                                            >
                                                {option["tab"].charAt(0).toUpperCase() + option["tab"].slice(1) + " Influencers"}
                                            </option>
                                        )
                                }

                                )}
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
                                onClick={runSearch}
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
const mapStateToProps = state => ({
    searchs: state.searchs.searchs
})
export default connect(mapStateToProps)(PinterestSearch);
