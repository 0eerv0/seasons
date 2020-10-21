import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    Summer : {
        text : "It's Hot in here 🥵",
        iconName : 'sun'
    },
    Winter : {
        text : "It's cold in here 🥶",
        iconName : 'snowflake'}
}

const getSeason=(lat,month)=>{
    if(month>2 && month<9)
        return lat > 0 ? 'Summer' : 'Winter';
    else
    return lat > 0 ? 'Winter' : 'Summer';
}

const SeasonDisplay =(props)=>{
    const season=getSeason(props.lat,new Date().getMonth())
    const {text,iconName}=seasonConfig[season]
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h2>{text}</h2>
        <i className={`icon-right massive ${iconName} icon`}/>
        </div>
};

export default SeasonDisplay;