import momentInitializer from './scripts/moment-initializer';
import translationInitializer from './scripts/translation-initializer';
import storeInitializer from './scripts/store-initializer';


export const initialize = () => {
    console.info('[INITIALIZATIONS]');
    momentInitializer();
    translationInitializer();
    storeInitializer();
};
