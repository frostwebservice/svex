import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import rehypeRaw from 'rehype-raw';
import './mail.css';
const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.body1.fontFamily,
  '& > p': {
    fontSize: 14,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2)
  }
}));
// const htmlDecode = (input) => {
//   var e = document.createElement('div');
//   e.innerHTML = input;
//   return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
// };
// const renderDiv = (input) => {
//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: htmlDecode(input)
//       }}
//     />
//   );
// };
export const MailThreadMessage = (props) => {
  const { message = '' } = props;

  return (
    // <MarkdownWrapper>
    //   <Markdown children={message} />
    // </MarkdownWrapper>
    <div
      dangerouslySetInnerHTML={{
        __html: message
      }}
    />
    // <></>
  );
};

MailThreadMessage.propTypes = {
  message: PropTypes.string
};
