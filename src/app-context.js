import React from 'react';

export const context = {
    upvotes: 0,
    addUpVote: () => {},
};

export const AppContext = React.createContext(context);
