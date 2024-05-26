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
            return new List<Satellite>
            {
                new Satellite { Id = 1, Name = "Hubble Space Telescope" },
                new Satellite { Id = 2, Name = "International Space Station" }
            };
        }
    }

    public class Satellite
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
