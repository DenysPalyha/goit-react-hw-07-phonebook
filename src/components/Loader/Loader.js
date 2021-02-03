import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class LoaderContacts extends React.Component {
  //other logic
  render() {
    return <Loader 
    type="ThreeDots"
    color="#00BFFF" 
    height={80} 
    width={80} />;
  }
}
