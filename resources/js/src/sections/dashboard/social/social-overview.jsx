import PropTypes from 'prop-types';
import { Stack, Unstable_Grid2 as Grid, Typography, Box } from '@mui/material';
import { SocialPostAdd } from './social-post-add';
import { SocialPostCard } from './social-post-card';
import { SocialAbout } from './social-about';
import urlicon from './images/urlicon.png';


export const SocialOverview = (props) => {
  const { posts = [], profile, ...other } = props;

  return (
    <div {...other}>
     <Grid>
      <Grid xs={8}>
        <Stack>
          <Typography
           sx={{
            fontFamily: 'Plus Jakarta Sana',
            fontSize: '18px',
            fontWeight: '700'
           }}
          >
            About
          </Typography>
          <Typography
           sx={{
            fontFamily: 'Inner',
            fontSize: '18px',
            fontWeight: '500'
           }}
          >
            Canada Goose is a premium Canadian clothing brand that
             was founded in 1957. The brand is known for its high-quality
              and stylish outerwear that is designed to withstand extreme 
              weather conditions. The company initially started as a 
              manufacturer of woolen vests, raincoats, and snowmobile 
              suits for Canadian Rangers and police officers. However, 
              in recent years, Canada Goose has gained widespread popularity
               as a luxury fashion brand and is now considered a status symbol.
          </Typography>
        </Stack>
        <Stack>
           <Box 
            sx={{display: 'flex'}}
           >
            <img src={urlicon}/>
            <Typography>
              dfsdf
            </Typography>
           </Box>
        </Stack>
      </Grid>
      <Grid xs={4}></Grid>
     </Grid>
      {/* <Grid
        container
        spacing={4}
      >
        <Grid
          lg={4}
          xs={12}
        >
          <SocialAbout
            currentCity={profile.currentCity}
            currentJobCompany={profile.currentJobCompany}
            currentJobTitle={profile.currentJobTitle}
            email={profile.email}
            originCity={profile.originCity}
            previousJobCompany={profile.previousJobCompany}
            previousJobTitle={profile.previousJobTitle}
            profileProgress={profile.profileProgress}
            quote={profile.quote}
          />
        </Grid>
        <Grid
          lg={8}
          xs={12}
        >
          <Stack spacing={3}>
            <SocialPostAdd />
            {posts.map((post) => (
              <SocialPostCard
                key={post.id}
                authorAvatar={post.author.avatar}
                authorName={post.author.name}
                comments={post.comments}
                createdAt={post.createdAt}
                isLiked={post.isLiked}
                likes={post.likes}
                media={post.media}
                message={post.message}
              />
            ))}
          </Stack>
        </Grid>
      </Grid> */}
    </div>
  );
};

SocialOverview.propTypes = {
  posts: PropTypes.array,
  profile: PropTypes.object.isRequired
};
