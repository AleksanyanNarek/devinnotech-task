export const enum Units {
    c = 'metric',
    f = 'imperial',
}

type Icon = {
    id: number;
    main: string;
    icon: string;
}

export type WeatherItem = {
    dt: string;
    main: { temp: number },
    weather: Icon[];
    dt_txt: string;
}