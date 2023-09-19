import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Typography, Box, Button, Card, Stack, SvgIcon, TextField, Unstable_Grid2 as Grid, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];

export const TwitterSave = () => {
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
                                Influeners with XYZ properties
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
                                label="Avg likes range"
                                name="avg_likes"
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
                                label="Avg comments range"
                                name="avg_comments"
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
                                label="Total favorites count"
                                name="total_favorites_count"
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
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: "text.primary" }} style={{ fontSize: 18, fontWeight: 600 }}>
                        Number of Influencers fall in this search
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{ fontSize: 18, color: "#2970FF" }}>
                        42
                    </Typography>
                </Box>
            </Stack >
        </>
    );
};
