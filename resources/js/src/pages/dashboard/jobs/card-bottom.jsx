import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import { Button, Card, Divider, Stack, Typography,IconButton,Popover,SvgIcon,
    List,
    ListItem,
    ListItemAvatar,Tooltip,
    ListItemText } from '@mui/material';
import DotsVerticalIcon from '@untitled-ui/icons-react/build/esm/DotsVertical';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import "./card_bottom.css"
export const CardBottom = (props) => {
    const { followers, engagement,invited,influencer,createdAt,category, ...other } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handlePopover = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    const renderNiche = (tmp) => {
        let exist = tmp?.category_niche?.includes("[");

        
        if (!exist) {
            return (
                (tmp && tmp.category_niche) ? (< div className='profile-niche' key={tmp.category_niche} > {tmp.category_niche}</div >) : (<></>)
            )
        }
        else if (exist) {
            let niches = (tmp && tmp.category_niche) ? tmp.category_niche : ""
            niches = niches.replace("[", "").replace("]", "")
            niches = niches.split(",")
            const renderingNiches = niches.map(niche =>
                <div className='profile-niche' key={niche} > {niche.replace(/"/g, '')}</div >
            )
            return renderingNiches
        }
    }
    return (
        <Card
            variant="outlined"
            {...other}>
            <Stack divider={<Divider />}>
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    flexWrap="wrap"
                    sx={{
                        px: 2,
                        py: 1.5
                    }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        sx={{
                            px: 2,
                            py: 1.5
                        }}
                    >
                        <Stack
                            alignItems="flex-start"
                            spacing={2}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'column',
                            }}
                            sx={{ mr: 10 }}
                        >
                            <Typography
                                color="text.primary"
                                noWrap
                                variant="overline"
                                sx={{ fontSize: 14, fontWeight: 700 }}
                            >
                                {followers}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                noWrap
                                sx={{ fontSize: 12 }}
                                style={{marginTop:0}}
                            >
                                Followers
                            </Typography>
                        </Stack>
                        <Stack
                            alignItems="flex-start"
                            spacing={2}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'column',
                            }}
                            sx={{ mr: 10 }}
                        >
                            <Typography
                                color="text.primary"
                                noWrap
                                variant="overline"
                                sx={{ fontSize: 14, fontWeight: 700 }}
                            >
                                {engagement}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                noWrap
                                style={{marginTop:0}}
                                sx={{ fontSize: 12 }}
                            >
                                Engagement rate
                            </Typography>
                        </Stack>
                        <Stack
                            alignItems="flex-start"
                            spacing={2}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'column',
                            }}
                            sx={{ mr: 10 }}
                        >
                            <Typography
                                color="text.primary"
                                noWrap
                                variant="overline"
                                sx={{ fontSize: 14, fontWeight: 700 }}
                            >
                                Categories
                            </Typography>
                            <Typography
                                color="text.secondary"
                                style={{marginTop:0}}
                                noWrap
                                sx={{ fontSize: 12 }}
                            >
                                {category}
                            </Typography>
                        </Stack>
                        {invited=="1"?(
                        <Stack
                            alignItems="flex-start"
                            spacing={2}
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'column',
                            }}
                            sx={{ mr: 10 }}
                        >
                            <Typography
                                color="text.primary"
                                noWrap
                                variant="overline"
                                sx={{ fontSize: 14, fontWeight: 700 }}
                            >
                                {[new Date(createdAt).getMonth() + 1, new Date(createdAt).getDate(), new Date(createdAt).getFullYear()].join('/')}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                style={{marginTop:0}}
                                noWrap
                                sx={{ fontSize: 12 }}
                            >
                                Invited Date
                            </Typography>
                        </Stack>
                        ):(<>
                        </>)}
                    </Stack>

           
                    <Stack
                        // alignItems="flex-start"
                        justifyContent="flex-end"
                        spacing={2}
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                        }}
                        sx={{ 
                            px: 2,
                            py: 1.5
                        }}
      
                    >
                        <Typography
                            color="#2ECC71"
                            noWrap
                            sx={{ fontSize: 14 }}
                        >
                            Quick View Profile
                            <IconButton
                                style={{border:"1px solid #2ECC71",padding:"0",marginLeft:7}}
                                onClick={e=>handlePopover(e)}
                                aria-describedby={id}
                            >
                                <SvgIcon fontSize="small" >
                                    <KeyboardArrowDownIcon style={{color:"#2ECC71"}}/>
                                </SvgIcon>
                            </IconButton>
                        </Typography>
                        
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            transformOrigin={{
                                horizontal:'right'
                            }}
                            anchorOrigin={{
                                horizontal:"right",
                                vertical: 'bottom'
                            }}
                        >
                            <List >
                                <ListItem
                                    disableGutters
                                    divider
                                    className='custom-item'
                                >
                                    <ListItemAvatar>
                                        <div className='global-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {influencer ? "Language: " + influencer.language.charAt(0).toUpperCase() + influencer.language.slice(1) : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>
                                <ListItem
                                    className='custom-item'
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='male-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {influencer ? "Gender: " + influencer.gender.charAt(0).toUpperCase() + influencer.gender.slice(1) : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    className='custom-item'
                                    disableGutters
                                    divider
                                >
                                    <ListItemAvatar>
                                        <div className='age-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2" className='about-list-font'>
                                                {influencer ? "Age: " + influencer.age : ''}
                                            </Typography>
                                        )}
                                    />
                                </ListItem>

                                <ListItem
                                    className='custom-item'
                                    disableGutters
                               
                                >
                                    <ListItemAvatar>
                                        <div className='ethnicity-icon'></div>
                                    </ListItemAvatar>
                                    <ListItemText
                                        disableTypography
                                        primary={(
                                            <Typography variant="subtitle2"
                                                className='about-list-font'>
                                                {influencer ? "Ethnicity: " + influencer.ethnicity : ''}
                                            </Typography>
                                        )}

                                    />
                                </ListItem>
                                <Typography 
                                    variant="subtitle2"
                                    sx={{fontSize:18,fontWeight:700,paddingLeft:'20px',py:3}}
                                >
                                    Niche
                                </Typography>
                                {renderNiche(influencer)}
                            </List>
                        </Popover>
                    </Stack>
                </Stack>


            </Stack>
        </Card>
    );
};

// CardBottom.propTypes = {
//     jobs: PropTypes.array
// };
