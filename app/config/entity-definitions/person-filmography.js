export default {
    perId: {
        domain: 'DO_ID',
        isRequired: false
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
