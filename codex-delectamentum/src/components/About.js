import { Link } from 'react-router-dom'

const About = () => {

    return(
        <div className="aboutContainer">
            <div className="about">
            <h1><em>Hail, Traveler!</em> ⚜️</h1>
            <h2>Welcome to Codex Delectamentum™, the sacred tome of ancient recipes</h2>
            <h3>Search through our culinary lorem and discover dazzling delectable delights</h3>
            <p>It's dangerous to travel on an empty stomach!</p>
        </div>
        <span>
            <div>
                <Link className="viewButton" to="/recipes">
                ⚔️ Come hither, swine! Feast! ⚔️
                </Link>
            </div>
        </span>
        <div className="iconContainer">
            <a target="_blank" href="https://www.youtube.com/@TastingHistory">
                <button className="icon">🧙🏻‍♂️</button>
            </a>    
            <a target="_blank" href="https://medievalinamodernkitchen.tumblr.com/">
                <button className="icon">🥔</button>
            </a>    
            <a target="_blank" href="https://www.poetryfoundation.org/collections/145091/poetry-and-food">
                <button className="icon">📖</button>
            </a>    
        </div>
    </div>
    )
}

export default About