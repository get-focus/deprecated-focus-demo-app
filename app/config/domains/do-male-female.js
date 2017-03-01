import {component as SelectRadio} from 'focus-components/select-radio';

export default {
    SelectComponent: SelectRadio,
    refContainer: {maleFemaleList: [{code: "M", label: 'select.male'}, {code: "F", label: 'select.female'}]},
    listName: 'maleFemaleList'
};
