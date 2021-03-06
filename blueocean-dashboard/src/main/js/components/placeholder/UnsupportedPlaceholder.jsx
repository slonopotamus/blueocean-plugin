import React, { PropTypes } from 'react';
import { PlaceholderTable } from '@jenkins-cd/design-language';

import { PlaceholderContent } from './PlaceholderContent';
import { PlaceholderDialog } from './PlaceholderDialog';
import Icon from './Icon';

export function UnsupportedPlaceholder(props) {
    const { linkHref, linkText, message, title } = props;

    const columns = [
        { width: 40, head: { text: 40 }, cell: { icon: 20 } },
        { width: 50, head: { text: 40 }, cell: { text: 30 } },
        { width: 50, head: { text: 50 }, cell: { text: 80 } },
        { width: 50, head: { text: 50 }, cell: { text: 60 } },
        { width: 200, isFlexible: true, head: { text: 60 }, cell: { text: 150 } },
        { width: 100, head: { text: 60 }, cell: { text: 60 } },
        { width: 100, head: { text: 60 }, cell: { text: 60 } },
        { width: 20, head: {}, cell: { icon: 20 } },
    ];

    const content = {
        icon: Icon.WARNING,
        title,
        message,
        linkText,
        linkHref,
    };

    return (
        <PlaceholderContent className="Unsupported u-fill u-fade-bottom" style={{ top: 72 }}>
            <PlaceholderTable columns={columns} rowCount={20} />
            <PlaceholderDialog width={375} content={content} />
        </PlaceholderContent>
    );
}

UnsupportedPlaceholder.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    linkText: PropTypes.string,
    linkHref: PropTypes.string,
};
