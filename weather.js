class Weather {
    constructor(city, state) {
        this.appiKey = 'Yourkey';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=${this.appiKey}`);

        const resData = await response.json();

        return resData;
    }

    // Change Weather Location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}