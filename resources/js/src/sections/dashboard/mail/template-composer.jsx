import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Attachment01Icon from '@untitled-ui/icons-react/build/esm/Attachment01';
import Expand01Icon from '@untitled-ui/icons-react/build/esm/Expand01';
import Image01Icon from '@untitled-ui/icons-react/build/esm/Image01';
import Minimize01Icon from '@untitled-ui/icons-react/build/esm/Minimize01';
import Link01Icon from '@untitled-ui/icons-react/build/esm/Link01';
import FaceSmileIcon from '@untitled-ui/icons-react/build/esm/FaceSmile';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import { makeStyles } from '@material-ui/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {
    Backdrop,
    Box,
    Button,
    Divider,
    IconButton,
    Input,
    Paper,
    TextField,
    Portal,
    Stack,
    SvgIcon,
    Tooltip,
    Typography
} from '@mui/material';
import { QuillEditor } from '@/components/quill-editor';
const useStyles = makeStyles(() => ({
    noBorder: {
        border: "none",
    },
}));
const platformOptions = ['Web', 'Node.js', 'Python', 'C#'];
const templateString = `<pre>Dear [Influencer's Name],

I hope this email finds you well.I have been following your work as an influential figure in [your niche], and I am truly impressed by the value you provide to your audience.Your expertise and unique perspective have inspired me.

I am reaching out today because I believe there is a great opportunity for us to collaborate and create something meaningful together.As someone who shares a passion for [your niche], I believe our combined efforts can have a significant impact on our respective audiences.
I have an idea for a collaboration that I believe will be mutually beneficial.Here's a brief overview:
[Provide a concise description of your collaboration idea.Highlight the value it will bring to both your audience and the influencer's audience. Be specific about the type of collaboration, such as a joint blog post, podcast interview, video series, or any other creative concept.]
I truly admire your work and believe that your insights and expertise would greatly enhance the collaboration.Your unique perspective would undoubtedly resonate with our shared audience.

I understand that you are likely approached by numerous individuals, so I want to assure you that I am committed to making this collaboration as seamless and valuable as possible.I am open to discussing any ideas or modifications you may have to ensure it aligns with your goals and values.
If you are interested in exploring this collaboration further, I would be delighted to schedule a call or have a more detailed discussion via email.Please let me know your availability, and I will be happy to accommodate your schedule.
    Thank you for considering this opportunity.I look forward to the possibility of working together and creating something exceptional that will benefit both our audiences.

Warm regards,
    [Your Name][Your Email Address][Your Website or Social Media Handles][Contact Number(Optional)]</pre>`
export const TemplateComposer = (props) => {
    const {
        maximize = false,
        message = '',
        onClose,
        onMaximize,
        onMessageChange,
        onMinimize,
        onSubjectChange,
        onToChange,
        open = false,
        subject = '',
        to = ''
    } = props;
    const [isOutreach, SetIsOutreach] = useState(false)
    const classes = useStyles();
    const handleSubjectChange = useCallback((event) => {
        onSubjectChange?.(event.target.value);
    }, [onSubjectChange]);

    const handleToChange = useCallback((event) => {
        onToChange?.(event.target.value);
    }, [onToChange]);

    if (!open) {
        return null;
    }

    return (
        <Portal>
            <Backdrop open={maximize} />
            <Paper
                sx={{
                    bottom: (theme) => `calc((${theme.spacing(20)})/3)`,
                    display: 'flex',
                    flexDirection: 'column',
                    // margin: '30px auto',
                    height: (theme) => `calc(100% - ${theme.spacing(20)})`,
                    width: (theme) => `calc(100% - ${theme.spacing(40)})`,
                    // minHeight: 500,
                    outline: 'none',
                    position: 'fixed',
                    right: (theme) => `calc((${theme.spacing(40)}) / 2)`,
                    // width: 600,
                    zIndex: 1400,
                    overflow: 'hidden',
                    // ...(maximize && {
                    //   borderRadius: 0,
                    //   height: '100%',
                    //   margin: 0,
                    //   maxHeight: '100%',
                    //   maxWidth: '100%',
                    //   width: '100%'
                    // })
                }}
                elevation={12}
            >
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        px: 2,
                        py: 1
                    }}
                >
                    <Typography variant="h6">
                        Default Template
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    <IconButton onClick={onClose}>
                        <SvgIcon>
                            <XIcon />
                        </SvgIcon>
                    </IconButton>
                </Box>

                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <Typography sx={{ mx: 2 }}>To</Typography>

                    <Input
                        disableUnderline
                        fullWidth
                        onChange={handleToChange}
                        // placeholder="Input Address To"
                        sx={{
                            pt: 0.5,
                            borderBottom: 1,
                            borderColor: 'divider'
                        }}
                        value={to}
                    />

                </Stack>

                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                >
                    <Typography sx={{ mx: 2 }}>Subject</Typography>
                    <Input
                        disableUnderline
                        // fullWidth
                        onChange={handleSubjectChange}
                        placeholder="Input Subject"
                        sx={{
                            pt: 0.5,
                            borderBottom: 1,
                            borderColor: 'divider',
                            width: '-webkit-fill-available',
                            fontSize: 18
                        }}
                        value=" Instagram Influencer for a shopping brand - The Rock"
                    />
                </Stack>



                <QuillEditor
                    onChange={onMessageChange}
                    placeholder="Type your text"
                    sx={{
                        border: 'none',
                        flexGrow: 1
                    }}
                    value={templateString}
                />
                {/* <TextField
          // label="Bio"
          // className="title-inter "
          // label='Type your text'
          // size="medium"
          placeholder='Type your text'
          name="aboutbusiness"
          autoComplete='message '
          // disableUnderline={false}
          variant="outlined"
          multiline
          id="message"
          classes={{ notchedOutline: classes.input }}
          className={classes.textField}
          sx={{
            border: 'none',
            flexGrow: 1,
            // p: 2
          }}
          inputProps={{
            style: {
              padding: 0,
              maxHeight: (theme) => `calc(100% - ${theme.spacing(20)})`,
            },
            classes: { notchedOutline: classes.noBorder }
          }}
          fullWidth
          style={{ marginTop: 11 }}
        // helperText="Type your text"
        /> */}
                <Divider />
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                    sx={{ p: 2 }}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                    >
                        <Tooltip title="Attach image">
                            <IconButton size="small">
                                <SvgIcon>
                                    <Image01Icon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Attach file">
                            <IconButton size="small">
                                <SvgIcon>
                                    <Attachment01Icon />
                                </SvgIcon>
                            </IconButton>
                        </Tooltip>

                        <IconButton>
                            <SvgIcon>
                                <Link01Icon />
                            </SvgIcon>
                        </IconButton>
                        <IconButton>
                            <SvgIcon>
                                <FaceSmileIcon />
                            </SvgIcon>
                        </IconButton>

                    </Stack>
                    <div>
                        <Button variant="contained">
                            Save Template
                        </Button>
                    </div>
                </Stack>
            </Paper>
        </Portal >
    );
};

TemplateComposer.propTypes = {
    maximize: PropTypes.bool,
    message: PropTypes.string,
    onClose: PropTypes.func,
    onMaximize: PropTypes.func,
    onMessageChange: PropTypes.func,
    onMinimize: PropTypes.func,
    onSubjectChange: PropTypes.func,
    onToChange: PropTypes.func,
    open: PropTypes.bool,
    subject: PropTypes.string,
    to: PropTypes.string
};
