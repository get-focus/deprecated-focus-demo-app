export default {
    movId: {
        domain: 'DO_ID',
        isRequired: false
    },
    keywords: {
        domain: 'DO_LABEL_LONG',
        isRequired: false
    },
    movieType: {
        domain: 'DO_LABEL_SHORT',
        isRequired: true
    },
    originalTitle: {
        domain: 'DO_LABEL_LONG',
        isRequired: false
    },
    productionYear: {
        domain: 'DO_YEAR',
        isRequired: true
    },
    runtime: {
        domain: 'DO_RUNTIME', //to change to runtime
        isRequired: true
    },
    title: {
        domain: 'DO_LABEL_LONG',
        isRequired: true
    }
};
