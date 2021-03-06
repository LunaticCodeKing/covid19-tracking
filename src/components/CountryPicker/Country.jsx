import React, {useEffect,useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './Country.module.css';
import {fetchCountries} from '../../api/indexAPI';

const Country = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());    
        }

        fetchAPI();
    }, []);

    
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option  value = "global" className="global">Global</option>  
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
    
}

export default Country; 