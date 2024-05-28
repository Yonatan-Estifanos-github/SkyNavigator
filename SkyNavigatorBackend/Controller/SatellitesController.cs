using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SkyNavigatorBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SatellitesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Satellite> Get()
        {
            // Mock data for testing
            return new List<Satellite>
            {
                new Satellite { Id = 1, Name = "Hubble Space Telescope", Latitude = 28.5, Longitude = -80.6 },
                new Satellite { Id = 2, Name = "International Space Station", Latitude = 51.6, Longitude = -0.1 }
            };
        }
    }

    public class Satellite
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
