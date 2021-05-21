using AtpPlayersApiWithAngular.Data;
using AtpPlayersApiWithAngular.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtpPlayersApiWithAngular.Services
{
    public class Countries : ICountries
    {
        private readonly AtpDbContext _context;

        public Countries(AtpDbContext context)
        {
            this._context = context;
        }
        public async Task<IEnumerable<Country>> GetCountriesList()
        {
            return await _context.Countries
            .OrderBy(x => x.Id)
            .ToListAsync();
        }
    }
}
