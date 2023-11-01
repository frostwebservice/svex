import PropTypes from 'prop-types';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import { SeverityPill } from '@/components/severity-pill';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const AccountTeamSettings = (props) => {
  const { userinfo } = props;
  const [members, SetMembers] = useState([]);
  const [invitingemail, SetInvitingemail] = useState("")
  useEffect(() => {
    axios
      .post("/api/get_team_info", { "brand_id": userinfo.id })
      .then((response) => {
        if (response.data.status === 200) {
          SetMembers(response.data.data)
        } else {
          SetMembers([])
        }
      });
  }, []);
  const sendInvite = () => {
    if (invitingemail.match(validRegex)) {
      axios
        .post("/api/send_invite_email", { "brand_id": userinfo.id, "inf_email": invitingemail })
        .then((response) => {
          if (response.data.status === 200) {
            SetMembers(response.data.data)
            SetInvitingemail("")
            alert("Invite sent successfuly!")
          } else {
            SetMembers([])
          }
        });
    }
    else {
      alert("Please input valid email address!")
    }
  }
  return (
    <Card>
      <CardContent>


        <Stack spacing={1}>
          <Typography variant="h6">
            Invite members
          </Typography>

        </Stack>


        <Stack
          alignItems="center"
          direction="row"
          spacing={3}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon>
                    <Mail01Icon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            label="Email address"
            name="email"
            sx={{ flexGrow: 1 }}
            type="email"
            value={invitingemail}
            onChange={(e) => SetInvitingemail(e.target.value)}
          />
          <Button variant="contained"
            onClick={sendInvite}
          >
            Send Invite
          </Button>
        </Stack>

      </CardContent>
      <Scrollbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Member
              </TableCell>
              <TableCell>
                Role
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    <Avatar
                      src={member.profile_pic_url_hd}
                      sx={{
                        height: 40,
                        width: 40
                      }}
                    >
                      <SvgIcon>
                        <User01Icon />
                      </SvgIcon>
                    </Avatar>
                    <div>
                      <Typography variant="subtitle2">
                        {member.full_name}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                      >
                        {member.inf_email}
                      </Typography>
                    </div>
                  </Stack>
                </TableCell>
                <TableCell>
                  {member.role_name == 'OWNER'
                    ? (
                      <SeverityPill>
                        {member.role_name}
                      </SeverityPill>
                    )
                    : member.role_name}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <SvgIcon>
                      <DotsHorizontalIcon />
                    </SvgIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

AccountTeamSettings.propTypes = {
  members: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  userinfo: state.profile.userinfo
});
export default connect(mapStateToProps)(AccountTeamSettings);