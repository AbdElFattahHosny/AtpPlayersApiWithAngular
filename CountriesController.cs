using AtpPlayersApiWithAngular.Models;
using AtpPlayersApiWithAngular.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AtpPlayersApiWithAngular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PositionsController : ControllerBase
    {
        private readonly ICountries _CountriesService;

        public PositionsController(ICountries CountriesService)
        {
            _CountriesService = CountriesService;
        }

        // GET: api/Positions

        [HttpGet]
        public async Task<IEnumerable<Country>> Get()
        {
            return await _CountriesService.GetCountriesList();
        }
    }
}
