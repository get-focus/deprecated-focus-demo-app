
export default {
    'uuid': {
        domain: 'DO_ID',
        isRequired: true
    },
    'sender': {
        domain: 'DO_LABEL_SHORT',
        isRequired: true
    },
    'type': {
        domain: 'DO_LABEL_SHORT',
        isRequired: true
    },
    'title': {
        domain: 'DO_LABEL_SHORT',
        isRequired: true
    },
    'content': {
        domain: 'DO_COMMENT',
        isRequired: true
    },
    'targetUrl': {
        domain: 'DO_LABEL_SHORT',
        isRequired: false
    },
    'creationDate': {
        domain: 'DO_DATE',
        isRequired: false
    }
};
