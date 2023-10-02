import PropTypes from 'prop-types';
import { AiFillPlayCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className='flex items-center'><AiFillPlayCircle className='text-purple-600 mr-2 '></AiFillPlayCircle>{feature}</p>
        </div>
    );
};
Feature.PropTypes = {
    feature: PropTypes.string
}


export default Feature;