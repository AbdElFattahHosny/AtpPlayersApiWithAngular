using AtpPlayersApiWithAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtpPlayersApiWithAngular.Services
{
    public interface ICountries 
    {
        Task<IEnumerable<Country>> GetCountriesList();
    }
}

