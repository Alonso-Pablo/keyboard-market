import { useState, useEffect } from 'react';
import axios from 'axios'

const useGoogleAddress = address => {
   const [ map, setMap ] = useState({})
   const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${process.env.CLIENT_ID_PAYPAL}&key=TuKey`
}

export default useGoogleAddress;