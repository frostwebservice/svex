const initialState = {
  email: '',
  title: '',
  brief: '',
  niche: 'Acne and Skin Care',
  shoutoutonly: 'shoutoutonly',
  typesarray: [],
  favarray: [],
  socialtypes: '',
  ig: '',
  tt: '',
  yt: '',
  tw: '',
  pt: '',
  li: '',
  bw: '',
  payselected: 'paid',
  paid: 'Under 10USD',
  barter: '',
  revenue: '',
  custom: '',
  businessurl: '',
  socialhandle: '',
  images: '',
  videos: '',
  articles: '',
  totalreach: 'all',
  location: 'all',
  gender: 'all',
  agerange: 'all',
  engagementrate: 'all',
  favorites: '',
  outreachgroups: ''
};
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_JOB':
      return {
        ...state,
        [action.payload.which]: action.payload.value
      };
    case 'CURRENT_JOB':
      let payselected = 'paid';
      if (action.payload.barter) payselected = 'barter';
      else if (action.payload.revenue) payselected = 'revenue';
      else if (action.payload.custom) payselected = 'custom';
      else payselected = 'paid';
      let typesarray = [];
      action.payload.socialtypes.split(',').map((each) => {
        let label = '';
        if (each == 'instagram') label = 'Instagram';
        else if (each == 'youtube') label = 'Youtube';
        else if (each == 'tiktok') label = 'TikTok';
        else if (each == 'twitter') label = 'Twitter';
        else if (each == 'linkedin') label = 'LinkedIn';
        else if (each == 'pinterest') label = 'Pinterest';
        else if (each == 'blogwebsite') label = 'Blog/Website';

        typesarray.push({ value: each, label: label });
      });

      return {
        ...state,
        email: action.payload.email,
        title: action.payload.title,
        brief: action.payload.brief,
        niche: action.payload.niche,
        shoutoutonly: action.payload.shoutoutonly,

        typesarray: typesarray,

        socialtypes: action.payload.socialtypes,
        ig: action.payload.ig,
        tt: action.payload.tt,
        yt: action.payload.yt,
        tw: action.payload.tw,
        pt: action.payload.pt,
        li: action.payload.li,
        bw: action.payload.bw,
        favarray: action.payload.favarray,
        payselected: payselected,
        favorites: action.payload.favorites,
        paid: action.payload.paid,
        barter: action.payload.barter,
        revenue: action.payload.revenue,
        custom: action.payload.custom,
        businessurl: action.payload.businessurl,
        socialhandle: action.payload.socialhandle,
        images: action.payload.images ? action.payload.images : '',
        videos: action.payload.videos ? action.payload.videos : '',
        articles: action.payload.articles ? action.payload.articles : '',
        totalreach: action.payload.totalreach,
        location: action.payload.location,
        gender: action.payload.gender,
        agerange: action.payload.agerange,
        engagementrate: action.payload.engagementrate,
        outreachgroups: action.payload.outreachgroups
      };
    default:
      return state;
  }
};
export default jobReducer;
