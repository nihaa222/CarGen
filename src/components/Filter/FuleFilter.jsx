import React from "react";
import { Checkbox } from "@nextui-org/react";

const FuelType = ({  setFilterCriteria }) => {
  const fuelTypes = ["CNG", "Petrol", "Diesel"];


  const handleCheckboxChange = (value, checked) => {
    let updatedTypes; // Declare the variable outside
   console.log(value,checked);
    setFilterCriteria((prevCriteria) => {
      // Inside the callback function, update the variable based on the checked state
      if (checked) {
        updatedTypes = [...(prevCriteria.fuelType || []), value];
      } else {
        updatedTypes = (prevCriteria.fuelType || []).filter(type => type !== value);
      }
  
      // Return the updated filter criteria
      return {
        ...prevCriteria,
        fuelType: updatedTypes
      };
    });
  };
  

  return (
    <div className="flex flex-col">
      {fuelTypes.map((fuelType) => (
        <Checkbox
          key={fuelType}
          onChange={(event) => handleCheckboxChange(fuelType, event.target.checked)}
        >
          {fuelType}
        </Checkbox>
      ))}
    </div>
  );
}

export default FuelType;
