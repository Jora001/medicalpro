import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ServiceCard = ({ item, index }) => {
  // Destructure properties from the item object
  // eslint-disable-next-line react/prop-types
  const { name, desc, bgColor, textColor } = item;

  // Apply dynamic styles
  const cardStyles = {
    backgroundColor: bgColor || 'transparent', // Default to transparent if bgColor is not provided
    color: textColor || 'inherit' // Default to inherit if textColor is not provided
  };

  return (
    <div className="py-[30px] px-3 lg:px-5" style={cardStyles}>
      <h2 className="text-[26px] leading-9 font-[700]">{name}</h2>
      <p className="text-[16px] leading-7 font-[400] mt-4">{desc}</p>

<div className='flex items-center justify-between mt-[30px]'>
<Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
                <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]' style={{
                    background:`${bgColor}`,
                    color:`${textColor}`,
                    borderRdius:'6px 0 0 6px'}}>
                    {index + 1}
                </span>
</div>

    </div>
  );
};

export default ServiceCard;
