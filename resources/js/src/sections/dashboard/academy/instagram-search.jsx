import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import { Box, Button, Card, Stack, SvgIcon, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];

export const InstagramSearch = () => {
    return (
        <>
            <Stack
                alignItems="center"
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ p: 3 }}
            >
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue=""
                        fullWidth
                        label="Search"
                        name="keywords"
                        placeholder="Keywords"
                    />
                </Box>
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue=""
                        fullWidth
                        label="Search"
                        name="hashtags"
                        placeholder="Hashtags"
                    />
                </Box>
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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

                <div style={{ fontWeight: 700 }}>To</div>
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue="web"
                        fullWidth
                        label="Age"
                        name="age"
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue="web"
                        fullWidth
                        label="Gender"
                        name="gender"
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
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
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue=""
                        fullWidth
                        label="Search"
                        name="username"
                        placeholder="Username"
                    />
                </Box>
                <Box sx={{ flexGrow: 1, width: 170 }}>
                    <TextField
                        defaultValue=""
                        fullWidth
                        label="Search"
                        name="url"
                        placeholder="URL"
                    />
                </Box>
                {/* <div>
                    <DatePicker
                        inputFormat="dd/MM/yyyy"
                        label="From"
                        onChange={() => { }}
                        renderInput={(inputProps) => <TextField {...inputProps} />}
                        value={new Date()}
                    />
                </div>
                <div>
                    <DatePicker
                        inputFormat="dd/MM/yyyy"
                        label="To"
                        onChange={() => { }}
                        renderInput={(inputProps) => <TextField {...inputProps} />}
                        value={new Date()}
                    />
                </div> */}
                <Button
                    size="large"
                    startIcon={(
                        <SvgIcon>
                            <SearchMdIcon />
                        </SvgIcon>
                    )}
                    variant="contained"
                >
                    Search
                </Button>
            </Stack>
        </>
    );
};
