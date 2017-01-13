import translationInitializer from './scripts/translation-initializer';
import momentInitializer from './scripts/moment-initializer';
import userInitializer from './scripts/user-initializer';


export const initialize = () => {
    console.info('[INITIALIZATIONS]');
    momentInitializer();
    translationInitializer();
    userInitializer();
};
