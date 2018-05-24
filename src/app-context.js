import React from 'react';

export const context = {
    title: 'My Very First Blog Post',
    content: 'Vim ex mucius tincidunt, at quo justo ceteros facilisis, te erat offendit cum.' +
      'Errem oportere cu nam. An tale modus omittantur per, sed fierent detracto ne.' +
      'Semper inermis reprimique an mei, qui at probo illum accumsan.' +
      'Id quo quod tincidunt scriptorem, et solet prodesset sea.' +
      'Sea an ullum similique interesset.',
    savePost: () => {},
    upvotes: 0,
    addUpVote: () => {},
};

export const AppContext = React.createContext(context);
