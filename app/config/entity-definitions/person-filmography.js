export default {
    code: {
        domain: 'DO_ID',
        isRequired: true
    },
    movies: {
        domain: 'DO_COMMENT',
        isRequired: false
    },
    movieLinks: {
        domain: 'DO_COMMENT',
        redirect: ['movieLink']
    }
};
