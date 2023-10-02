// import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOptions = ({options}) => {
    const {name, price, features} = options;
    return (
        <div className='bg-blue-300 rounded-md p-4 flex flex-col' >
           <h2 className='text-center '>
            <span className='text-4xl'>{price}</span>
            <span className='text-xl'>/mon</span>
           </h2>
           <h4 className='text-2xl'>{name}</h4>
          <div className='pl-6 flex-grow '>
          {
            features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
           }
          </div>
          <button className='mt-12 bg-purple-800 text-white font-bold rounded-lg hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

PriceOptions.PropTypes = {
    options: PropTypes.object
}

export default PriceOptions;