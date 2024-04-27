import {Link} from "react-router-dom";


export default function Footer(){



    return(
        <footer>
            <div className="footer-section">
            <Link to="/" className="logo">THE BOOKSHELF</Link>
            <span></span>
                <ul> About me
                    <li>Home</li>
                    <li>All Articles</li>
                    <li>Cookies Policy</li>
                </ul>
                <ul> Follow me :
                    <li>Instagram</li>
                    <li>Pinterest</li>
                    <li>Youtube</li>
                </ul>

            </div>
        </footer>
    );


}