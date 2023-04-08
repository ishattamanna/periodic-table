import React from 'react';

const ElementCard = ({ element }) => {

    console.log(element);

    const { name, symbol } = element;


    return (
        <div className="w-[75px] h-[100px] bg-blue-300 border-2 border-gray-500 border-solid">
            <p className="font-bold text-3xl mt-5">{symbol}</p>
            <p>{name}</p>
        </div>
    );
};

export default ElementCard;