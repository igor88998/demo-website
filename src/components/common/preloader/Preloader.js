import React from 'react';
import classes from './../../users/Users.module.css'
import preloader from './../../../assets/images/preloader.svg'

const Preloader = () => {
    return (
        <div>
            <img className={classes.preloader} src={preloader} alt='preloader' />
        </div>
    );
};

export default Preloader;