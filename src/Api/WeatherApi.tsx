import React from "react";
import axios from "axios";

interface TimeApi {
    dateTime: string
}

const getCurrentTime = async () => {
    const response = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Moscow')
    return new Date(response.data.dateTime)
}

getCurrentTime().then((time) => {
    console.log(`Current time is ${time.toLocaleTimeString()}`);
});