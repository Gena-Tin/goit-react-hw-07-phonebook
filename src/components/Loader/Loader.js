import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MyLoader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#75a7a7"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default MyLoader;
