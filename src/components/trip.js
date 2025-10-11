import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/germany.jpg";
import Trip2 from "../assets/switzerland.jpg";
import Trip3 from "../assets/norway.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className="tripcard">
                <TripData
                imgs = {Trip1}
                heading = "Trip in Hunza valley"
                text = "No holiday in Pakistan is complete without a visit to the breathtaking Hunza valley.  This iconic destination offers stunning mountain veiws rich culture and warm hospitality.  "
                />

                <TripData
                imgs = {Trip2}
                heading = "Trip in Swat valley"
                text = "Nestled in the heart of Pakistans KPK. It packs an incredible variety within its lush green hills and winding rivers. From glittering lakes and snow covere peaks to charming village .It offers a glimps of nature's beauty and cultural richness."
                />

                <TripData
                imgs = {Trip3}
                heading = "Trip in Sakardu"
                text = "With offering view of Karakram a rich blend of Balti culture .Whether You are camping beside Satpara Lake or exploring majestic Deosai plain or gazing at K2 from a distance it promise unforgettable adventure."
                />
            </div>
        </div>
        
    )
}

export default Trip;