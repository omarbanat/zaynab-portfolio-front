import './Skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3,
    faHtml5,
    faReact,
    faJs,
    faNodeJs,
    faMdb,
    faGit,
    faFigma,
} from "@fortawesome/free-brands-svg-icons";



const Logo = () => {
    return (
        <div className='skills-Logo'>
            <div className='flex_line line-2ss'>
                <div>
                    <FontAwesomeIcon icon={faFigma} size="6x" color='red' />
                    <p> FIGMA </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faNodeJs} size="6x" />
                    <p> faNodeJs </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMdb} size="6x" />
                    <p> MONGODB</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGit} size="6x" />
                    <p> GIT</p>
                </div>
            </div>
            <div className='flex_line line-1s'>
                <div>
                    <FontAwesomeIcon icon={faCss3} size="6x" color='red' />
                    <p> CSS </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHtml5} size="6x" />
                    <p> HTML5 </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faReact} size="6x" />
                    <p> REACT </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faJs} size="6x" />
                    <p> JAVASCRIPT </p>
                </div>
            </div>
        </div>
    )
};
export default Logo