import PriceOptions from "../PriceOptions/PriceOptions";

const PriceOption = () => {

    const priceOption=[
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Use of cardio and weight equipment",
            "Locker room access"
          ],
          "price": "$29.99 per month"
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Use of cardio and weight equipment",
            "Locker room access",
            "Access to fitness classes (3 times per week)",
            "Personal trainer sessions (2 per month)",
            "Nutrition consultation"
          ],
          "price": "$49.99 per month"
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "features": [
            "Access to gym facilities",
            "Use of cardio and weight equipment",
            "Locker room access",
            "Unlimited access to fitness classes",
            "Personal trainer sessions (4 per month)",
            "Towel service",
            "Sauna and spa access",
            "Free protein shakes"
          ],
          "price": "$79.99 per month"
        }
      ]
      

    return (
        <div className="m-12">
             <h2 className='text-5xl'>Best Prices</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOption.map(option => <PriceOptions key={option} options={option}></PriceOptions>)
            }
            </div>
        </div>
    );
};

export default PriceOption;