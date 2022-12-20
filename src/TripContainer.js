//the purpose of this component is to display destinations, and initialize routing 

import TripBox from './TripBox';
import WelcomeMessage from './WelcomeMessage';
import './App.scss';



const TripContainer = (props) => {

    //array to hold initial destination information
    const tripArray = [
        {
            destName: "The Sword of Orion",
            imgCode: "PIA08653"
        },
        {
            destName: "Crab Nebula",
            imgCode: "PIA03606"
        },
        {
            destName: "Milky way",
            imgCode: "PIA12348"
        },
        {
            destName: "Mercury",
            imgCode: "PIA11766"
        },
        {
            destName: "Venus",
            imgCode: "PIA00104"
        },
        {
            destName: "Uranus",
            imgCode: "PIA18182"
        },
        {
            destName: "Pluto",
            imgCode: "PIA09113"
        },
        {
            destName: "Saturn",
            imgCode: "PIA01383"
        },
        {
            destName: "Sun",
            imgCode: "GSFC_20171208_Archive_e001434"
        },
    ]



    return (
        <>
            <WelcomeMessage />
            <div className='wrapper'>
                <ul className="tripContainer">
                    {
                        tripArray.map((trip) => {
                            return (
                                <TripBox
                                    key={trip.imgCode}
                                    tripInfo={trip}
                                    handleClick={props.handleClick}
                                    buttonClass={props.buttonClass}
                                    tripCounter={props.tripCounter}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default TripContainer;