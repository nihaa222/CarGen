import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitVehicleDetails } from '../Redux/vehicleSlice.js';
import { useNavigate } from 'react-router-dom';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Radio, RadioGroup, Input, Divider, Select, SelectItem, ScrollShadow, Checkbox } from '@nextui-org/react';

const VehicleSellingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.data);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [stage, setStage] = useState(1);
  const [idProofError, setIdProofError] = useState('');

  const [formData, setFormData] = useState({
    sellerType: 'individual',
    name: '',
    mobile: '',
    address: '',
    registrationYear: '',
    brand: '',
    model: '',
    travelDistance: '',
    transmission: '',
    ownerType: '',
    carLocation: '',
    modification: '',
    pickupLocation: '',
  });

  const [idProof, setIdProof] = useState('');
  const [vehiclePhotos, setVehiclePhotos] = useState([]);
  const handlepickup = (e) => {
    if (e.target.checked) {
      setFormData({ ...formData, pickupLocation: formData.carLocation });
    } else {
      setFormData({ ...formData, pickupLocation: '' });
    }
  }

  const handlePhotoUpload = (files) => {
    const photoFiles = Array.from(files);
    setVehiclePhotos(photoFiles);
  };

  const handelIdproof = (files) => {
    setIdProof(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!idProof) {
        setIdProofError('Please upload your ID proof.');
        return;
      } else {
        setIdProofError('');
      }

      console.log(formData);
      await dispatch(submitVehicleDetails({
        vehicleData:formData,
        vehiclePhotos,
        userId: currentUser.uid,
        idProof
      }));

      setFormData({
        ...formData,
        sellerType: 'individual',
        name: '',
        mobile: '',
        address: '',
        registrationYear: '',
        brand: '',
        model: '',
        travelDistance: '',
        transmission: '',
        ownerType: '',
        carLocation: '',
        modification: '',
        pickupLocation: ''
      });

      onClose();
    } catch (error) {
      console.error('Error submitting vehicle details:', error.message);
    }
  };

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <div>
            <RadioGroup value={formData.sellerType} label="Seller Type" onChange={(value) => setFormData({ ...formData, sellerType: value.target.value })}>
              <div className='flex'>
                <Radio value="dealer" className=' mr-2'>Dealer</Radio>
                <Radio value="individual">Individual</Radio>
              </div>
            </RadioGroup>
            <h2>Seller Information</h2>
            <div className='flex my-2'>
              <Input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                radius='sm'
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className='mr-2'
              />
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                radius='sm'
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              />
            </div>
            <Input
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              radius='sm'
              className='mb-2'
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            {/* Display error message */}
            {idProofError && <p className="text-red-500">{idProofError}</p>}
            {/* File upload for ID proof */}
            <label className="block m-4">
              <span className="text-gray-700">Upload your ID proof</span>
              <div className="mt-1 flex  flex-col">
                <span className="text-gray-500">(PDF, PNG, JPG up to 5MB)</span>
                <span className=" bg-gray-200 rounded-md px-3 py-1 size-2/5 flex items-center justify-center text-sm font-medium text-gray-700 mr-2">
                  Choose file
                </span>
                <input type="file" className="sr-only"  onChange={(e) => handelIdproof(e.target.files[0])} />
              </div>
            </label>
          </div>
        );
      case 2:
        return (
          <ScrollShadow hideScrollBar className="w-[300px] h-[400px]">
            <div>
              <Select
                value={formData.registrationYear}
                onChange={(value) => setFormData({ ...formData, registrationYear: value })}
                placeholder="Select registration year"
                className="mt-2"
                radius="sm"
              >
                {[2022, 2021, 2020, 2019, 2018].map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </Select>
              <Select
                value={formData.brand}
                onChange={(value) => setFormData({ ...formData, brand: value })}
                placeholder="Select vehicle brand"
                radius='sm'
                className='mt-2'
              >
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Ford">Ford</SelectItem>
              </Select>
              <Select
                value={formData.model}
                onChange={(value) => setFormData({ ...formData, model: value })}
                placeholder="Select vehicle model"
                radius='sm'
                className='mt-2'
              >
                {formData.brand === 'Toyota' && (
                  <>
                    <SelectItem value="Corolla">Corolla</SelectItem>
                    <SelectItem value="Camry">Camry</SelectItem>
                  </>
                )}
                {formData.brand === 'Honda' && (
                  <>
                    <SelectItem value="Civic">Civic</SelectItem>
                    <SelectItem value="Accord">Accord</SelectItem>
                    {/* Add more options as needed */}
                  </>
                )}
                {/* Add more brand-specific options as needed */}
              </Select>
              <Input
                type="text"
                placeholder="Travel Distance (in kilometers)"
                value={formData.travelDistance}
                radius='sm'
                className='mt-2'
                onChange={(e) => setFormData({ ...formData, travelDistance: e.target.value })}
              />
              <RadioGroup
                value={formData.transmission}
                label="Transmission Type"
                className="mt-2"
                onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
              >
                <Radio value="auto">Automatic</Radio>
                <Radio value="manual">Manual</Radio>
              </RadioGroup>
              <RadioGroup
                value={formData.ownerType}
                label="Owner Type"
                className="mt-2"
                onChange={(e) => setFormData({ ...formData, ownerType: e.target.value })}
              >
                <Radio value="first">First Owner</Radio>
                <Radio value="second">Second Owner</Radio>
                <Radio value="third">Third Owner</Radio>
              </RadioGroup>
              <Input
                type="text"
                placeholder="Car Location"
                value={formData.carLocation}
                radius='sm'
                className='mt-2'
                onChange={(e) => setFormData({ ...formData, carLocation: e.target.value })}
              />
              <RadioGroup
                value={formData.modification}
                label="Has there been any modification?"
                className="mt-2"
                onChange={(e) => setFormData({ ...formData, modification: e.target.value })}
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </div>
          </ScrollShadow>

        );

      case 3:
        return (
          <div>
            <input
              type="file"
              placeholder="Upload vehicle photos"
              onChange={(e) => handlePhotoUpload(e.target.files)}
              multiple
              radius='sm'
              className='mt-2'
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Pickup Location</h2>
            <div className='flex items-center'>
              <Checkbox
                onChange={handlepickup}  >Same as car location</Checkbox>
            </div>
            <Input
              type="text"
              placeholder="Enter pickup location"
              value={formData.pickupLocation}
              radius='sm'
              onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
            />
          </div>
        );
        case 5:
          return(
            <h1>sure to submit</h1>
          )

     
    }
  };

  return (
    <>
      <h2>Submit Vehicle Details</h2>
      <Button onPress={onOpen}>Add Vehicle</Button>
      <Modal size='2xl' isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Submit Vehicle Details</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              {renderStage()}
              <Divider />
              <div className='my-4 flex items-center justify-end'>

                <Button radius='sm' className='mr-2' onClick={() => setStage((prevStage) => Math.max(prevStage - 1, 1))}>
                  Previous
                </Button>
                <Button type={stage === 5 ? "submit" : "button"} radius='sm' onClick={() => setStage(prevStage => prevStage + 1)}>
                  {stage === 5 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </>
  );
};

export default VehicleSellingForm;
