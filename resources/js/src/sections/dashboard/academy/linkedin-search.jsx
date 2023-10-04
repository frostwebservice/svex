import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Box, Button, Card, Stack, SvgIcon, TextField, Unstable_Grid2 as Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];

export const LinkedinSearch = () => {
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
                                defaultValue=""
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
                                defaultValue="web"
                                fullWidth
                                label="Category"
                                name="category"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Location"
                                name="location"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Language"
                                name="language"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Followers"
                                name="followers_from"
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
                                defaultValue="web"
                                fullWidth
                                label="Followers"
                                name="followers_to"
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
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Engagement rate"
                                name="engagement"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Connections"
                                name="connections"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Industry"
                                name="industry"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue="web"
                                fullWidth
                                label="Skills"
                                name="Skills"
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
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} sm={4}
                        className='custom-grid'
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <TextField
                                defaultValue=""
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
                                defaultValue=""
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

                        <FormControlLabel control={<Checkbox defaultChecked />} label="Has Phone number" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Is Verified" />
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
