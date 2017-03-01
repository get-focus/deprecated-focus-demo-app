import moment from 'moment';

export default () => {
    console.info('|--- MOMENT');
    moment().utcOffset(0);
};
