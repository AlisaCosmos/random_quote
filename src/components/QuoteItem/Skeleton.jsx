import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={750}
    height={550}
    viewBox="0 0 750 550"
    backgroundColor="#373737"
    foregroundColor="#f4f4f4"
    {...props}>
    <circle cx="309" cy="250" r="15" />
    <circle cx="353" cy="250" r="15" />
    <circle cx="397" cy="250" r="15" />
  </ContentLoader>
);

export default Skeleton;
