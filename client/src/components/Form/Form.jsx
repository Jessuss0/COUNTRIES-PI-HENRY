import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allCountries, addActivity } from "../../redux/actions";
import validation from "../../SupportFunctions/validation";
import Select from "../Select/Select";
import SelectCountries from "../Select/selectCountries";

export default function Form(props) {
    const countries = useSelector((state) => state.allCountries);
    const dispatch = useDispatch();
    const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        idCountry: [],
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleFieldChange = (event) => {
        handleChange(event);
        updateFormValidity();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setActivity({
            ...activity,
            [name]: name === 'name' ? firstLetter(value) : value
        });

        setErrors(validation({
            ...activity,
            [name]: value
        }));
    }

    const updateFormValidity = () => {
        setIsFormValid(validateSubmit());
    };

    const validateSubmit = () => {
        return activity.name && activity.difficulty && activity.duration && activity.season && activity.idCountry;
    };

    const handleCountry = (event, index) => {
        const selectedCountry = event.target.value;

        // Verificar que el país no haya sido seleccionado en otro select
        const isCountrySelected = activity.idCountry.some((id, i) => i !== index && id === selectedCountry);

        if (!isCountrySelected) {
            const updatedIdCountries = [...activity.idCountry];
            updatedIdCountries[index] = selectedCountry;

            setActivity({
                ...activity,
                idCountry: updatedIdCountries
            });

            updateFormValidity();
        }
    }

    const refresh = async () => {
        if (!countries.length) await dispatch(allCountries());
    };

    useEffect(() => {
        refresh();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addActivity(activity));
        setSuccessMessage("Activity created successfully!"); // Actualizar el mensaje de éxito
    };

    function firstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const onDelete = (index) => {
        setActivity((prevActivity) => {
            const updatedIdCountries = [...prevActivity.idCountry];
                updatedIdCountries.splice(index, 1);
    
            return { ...prevActivity, idCountry: updatedIdCountries };
        });
    
        updateFormValidity();
    };

    const difficulty = [1, 2, 3, 4, 5];
    const duration = [1, 3, 5, 10, 24, 36];
    const season = ['Verano', 'Otoño', 'Invierno', 'Primavera'];

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name:</label>
                <input type="text" name="name" key={"name"} value={activity.name} onChange={handleFieldChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

                <label htmlFor="difficulty">Difficulty:</label>
                <Select name="difficulty" options={difficulty} handleChange={handleFieldChange} state={activity.difficulty} />

                <label htmlFor="duration">Duration(hrs):</label>
                <Select name="duration" options={duration} handleChange={handleFieldChange} state={activity.duration} />

                <label htmlFor="season">Season:</label>
                <Select name="season" options={season} handleChange={handleFieldChange} state={activity.season} />

                <label htmlFor="Countries">Country 1:</label>
                <SelectCountries name="idCountry" onChange={handleCountry} number={0} state={activity} countries={sortedCountries} onDelete={onDelete}/>

                <label htmlFor="Countries">(Optional)Country 2:</label>
                <SelectCountries name="idCountry" onChange={handleCountry} number={1} state={activity} countries={sortedCountries} onDelete={onDelete}/>

                <label htmlFor="Countries">(Optional)Country 3:</label>
                <SelectCountries name="idCountry" onChange={handleCountry} number={2} state={activity} countries={sortedCountries} onDelete={onDelete}/>
                
                <button type="submit" disabled={!isFormValid}>Create activity</button>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    )
};