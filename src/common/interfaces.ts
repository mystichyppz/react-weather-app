import {GET_WEATHER, SET_ALERT, SET_ERROR, SET_LOADING} from "../store/types";

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface WeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

export interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
}

export interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}

export interface AlertProps {
    message: string;
    onClose: () => void
}

export interface SearchProps {
    title: string;
}

export interface WeatherProps {
    data: WeatherData;
}