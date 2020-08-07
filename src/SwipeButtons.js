//rafce
import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton'

import './SwipeButtons.css'
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton style={{color: "#f5b748",padding:"3vw" }}>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#ec5e6f",padding:"3vw" }}>
               <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#62b4f9",padding:"3vw" }}>
                 <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#76e2b3",padding:"3vw" }}>
               <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton style={{color: "#915dd1",padding:"3vw" }}>
               <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
