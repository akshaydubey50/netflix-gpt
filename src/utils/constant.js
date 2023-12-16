export const NetFlix_Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const NetFlix_Banner = "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const Netflix_Avatar = "https://i.pinimg.com/236x/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg"

export const API_Options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};

export const Supported_Language = [
    {
        identifier: "en", name: "English"
    },
    {
        identifier: "hindi", name: "Hindi"
    },
    {
        identifier: "spanish", name: "Spanish"
    },
] 

export const OpenAIKey = process.env.REACT_APP_OPEN_KEY; 