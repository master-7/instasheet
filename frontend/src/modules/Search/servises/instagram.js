// @flow

import rest from 'rest'

export const getPhotoByTags = (tag: string, token: string) => {
    return rest(`https://api.instagram.com/v1/tags/${tag}?access_token=${token}`);
};
