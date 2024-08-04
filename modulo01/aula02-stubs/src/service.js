class Service {
  async makeRequests(url) {
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
      appearedIn: data.films.length 
    }
  }
}
module.exports = Service;
