

import { toast } from 'react-toastify';
import {
    FilterContainer,
    InputBlock,
    Label,
    MileageInputLeft,
    MileageInputRight,
    MileageInputWrapper,
    ModelDropdown, ModelInput,
    ModelInputBtn,
    ModelList,
    PriceInput,
    PriceInputBtn,
    PriceList,
    SearchBtn,
    InputsWrapper,
    PriceDropdown,
    ArrowUp,
    ArrowDown,
    ModelListItem,
    PriceListItem,
    MileageFirstText,
    MileageSecondText
} from './Search.style';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice/filterSlice';


export const SearchSection = ({ adverts, updateFilteredAdverts }) => {

    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [model, setModel] = useState('');
    const [cars, setCars] = useState([]);
    const [price, setPrice] = useState('');
    const [startMileage, setStartMileage] = useState('');
    const [endMileage, setEndMileage] = useState('');



    const getUniqueModels = useCallback(() => {
        const make = adverts.map((advert) => advert.make);
        const uniqueModels = [...new Set(make)];
        setCars(uniqueModels);
    }, [adverts]);
    
    useEffect(() => {
        getUniqueModels();
    }, [getUniqueModels]);


    useEffect(() => {
        dispatch(setFilter({ model, price, startMileage, endMileage }));
    }, [model, price, startMileage, endMileage, dispatch])

    


    const minPrice = 30;
    const maxPrice = 500;
    const step = 10;

    const priceOptions = [];
    for (let i = minPrice; i <= maxPrice; i += step) {
        priceOptions.push(i);
    }
    const sortCars = cars.filter((car) =>
        car.toLowerCase().includes(model.toLowerCase())).sort((a, b) => a.localeCompare(b))



    const handleSearch = async () => {
        if (filter.model !== '') {
            const isBrandValid = /^[a-zA-Z\s]+$/i.test(filter.model);
            if (!isBrandValid) {
                toast.error('Car brand should contain only EN letters !');
                return;
            }

        }

        const filteredCars = adverts.filter((advert) => {
            if (model && filter.model && !advert.make.toLowerCase().includes(filter.model.toLowerCase())) {
                return false;
            }

            if (price && !isNaN(price) && parseFloat(advert.price) === parseFloat(filter.price)) {
                if (Number(price) < minPrice) {
                    toast.warn(`Price cannot be less than ${minPrice}!`);
                    return false;
                } else if (Number(price) > maxPrice) {
                    toast.warn(`Price cannot be greater than ${maxPrice}!`);
                    return false;
                }
            }

            if (startMileage !== '' && endMileage !== '') {
                const numberStartMileage = Number(startMileage);
                const numberEndMileage = Number(endMileage);
                if (numberStartMileage >= numberEndMileage) {
                    toast.warn('Start mileage should be less than end mileage!');
                    return false;
                }
            }
            if (startMileage < 1000 || endMileage > 7000) {
                toast.error('Mileage should be in the range of 1000 to 7000!');
                return;
            }

            return true;
        });

        updateFilteredAdverts(filteredCars);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (field) => {
        setIsDropdownOpen(isDropdownOpen === field ? null : field);
    };


    const reset = () => {

        setModel('');
        setPrice('');
        setStartMileage('');
        setEndMileage('');
        updateFilteredAdverts(adverts)
    };


    const handleChange = (e) => {
        const inputValue = e.target.name;
        switch (inputValue) {
            case 'model':
                setModel(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
            case 'endMileage':
                setEndMileage(e.target.value);
                break;
            case 'startMileage':
                setStartMileage(e.target.value);
                break;
            default:
                return;
        }
        // if (!isDropdownOpen) {
        //     setIsDropdownOpen(true);
        // }
    }


    return (
        <FilterContainer >
            <InputsWrapper>
                <InputBlock>
                    <Label htmlFor="modelTitle">Car brand</Label>
                    <ModelInput
                        id="modelTitle"
                        name='model'
                        placeholder="Enter the text"
                        value={model}
                        onChange={handleChange}
                        onClick={() => toggleDropdown('model')} />
                    <ModelInputBtn onClick={() => toggleDropdown('model')} type="button">
                        {isDropdownOpen === 'model' ? <ArrowUp /> : <ArrowDown />}
                    </ModelInputBtn>
                    {isDropdownOpen === 'model' && (
                        <ModelDropdown>
                            <ModelList>
                                {sortCars.map((car, index) => (
                                        <ModelListItem
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setModel(car);
                                                setIsDropdownOpen(false); 
                                            }}
                                        >{car}</ModelListItem >
                                    ))}
                            </ModelList>
                        </ModelDropdown>
                    )}
                </InputBlock>
                <InputBlock>
                    <Label htmlFor="priceTitle">Price/ 1 hour </Label>
                    <PriceInput
                        id="priceTitle"
                        name='price'
                        placeholder="To $"
                        value={price}
                        onChange={handleChange}
                        onClick={() => toggleDropdown('price')}
                    />
                    <PriceInputBtn type="button" onClick={() => toggleDropdown('price')}>
                        {isDropdownOpen === 'price' ? <ArrowUp /> : <ArrowDown />}
                    </PriceInputBtn>
                    {isDropdownOpen === 'price' && (
                        <PriceDropdown>
                            <PriceList>
                                {priceOptions.map((priceOption, index) => (
                                    <PriceListItem
                                        key={index}
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        setPrice(priceOption)
                                        setIsDropdownOpen(false)}}
                                    >
                                        {priceOption}
                                    </PriceListItem>
                                ))}
                            </PriceList>
                        </PriceDropdown>
                    )}
                </InputBlock>
                <InputBlock>
                    <Label htmlFor="mileageTitle">Сar mileage / km </Label>
                    <MileageInputWrapper> 
                        <MileageFirstText>from</MileageFirstText>
                        <MileageInputLeft
                            id="mileageTitle"
                            name='startMileage'
                            value={startMileage}
                            onChange={handleChange}
                        />
                        < MileageSecondText>to</ MileageSecondText>
                        <MileageInputRight
                            type="number"
                            name='endMileage'
                            value={endMileage}
                            onChange={handleChange}
                        />
                    </MileageInputWrapper>
                </InputBlock>
                <SearchBtn type="button" onClick={handleSearch} >
                    Search
                </SearchBtn>
                <SearchBtn type="button" onClick={reset}>
                    Reset
                </SearchBtn>
            </InputsWrapper>

        </FilterContainer>

    )
};

export default SearchSection;













// onKeyDown={event => handleInputKeyPress(event, 'mileage')}
//   onKeyDown={event => handleInputKeyPress(event, 'price')}
// onKeyDown={event => handleInputKeyPress(event, 'mileage')}
