import React from 'react';
import i18next from 'i18next';

export default function Footer() {
    return (
        <div data-demo='footer'>
            <div>
                <div>{i18next.t('footer.klee.powered')}</div>
            </div>
            <div>
                <ul>
                    <li><a href='http://getfocus.io' target='_blank'>GETFOCUS.IO</a></li>
                    <li><a href='http://focus-doc.dev.klee.lan.net' target='_blank'>BLOG</a></li>
                    <li><a href='http://getfocus.io/focus-documentation/' target='_blank'>DOCUMENTATION</a></li>
                </ul>
            </div>
        </div>
    );
}
