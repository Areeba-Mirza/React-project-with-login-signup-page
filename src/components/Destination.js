import Mountain1 from "../assets/mountain1.jpg";
import Mountain2 from "../assets/mountain2.jpg";
import Mountain3 from "../assets/mountain3.jpg";
import Mountain4 from "../assets/mountain4.jpg";
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
            className="first-des"
            heading = "Mount Godwin-Austen"
            text = "K2, also known as Mount Godwin-Austen, is an awe-inspiring peak that towers above the Baltoro Glacier in Pakistan’s Gilgit-Baltistan region. Located in the Karakoram Range, this mighty mountain rises to a height of 28,251 feet (8,611 metres), making it the second-highest mountain in the world after Mount Everest. K2’s pyramid-shaped summit and steep ridges dominate the surrounding landscape, while its glaciers and snowfields feed vital water systems across the region. The mountain is bordered by the Godwin-Austen Glacier and the Savoia Glacier, forming one of the most spectacular high-altitude environments on Earth. Due to its extreme weather, challenging routes, and technical difficulty, K2 has earned the title of the “Savage Mountain.” Despite its dangers, it continues to attract climbers, researchers, and adventurers from around the world, symbolizing Pakistan’s untamed natural beauty and its place at the heart of global mountaineering history.
."
            img1 = {Mountain1}
            img2 = {Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Nanga Parbat"
            text = "Nanga Parbat, the world's ninth-hihest mountain, stands as one of Pakistan's most iconic and awe-inspiring natural landmarks. Located in the western Himalayas, the majestic peak shoecases extraordinarygeological formations and continues to shape the landscape through ongoing glacial and tectonic processes. Known as the Killer Mountain due to its challenging climbs and dramatic weather conditions, Nanga Parbat has fascinated explorers,geological ."
            img1 = {Mountain3}
            img2 = {Mountain4}
            />
            
        </div>

    )
}

export default Destination