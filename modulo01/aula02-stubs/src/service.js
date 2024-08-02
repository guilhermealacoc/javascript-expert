class Service {
  async makeRequests(url) {
    console.log(url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async getPlanets(url) {
    const data = await this.makeRequests(url)
    return {
      name: data.name,
      surfaceWater: data.surface_water,
      appeardIn: data.films.length
    }
  }
}
module.exports = Service;
