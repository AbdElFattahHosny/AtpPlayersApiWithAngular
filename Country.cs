using System;
using System.Collections.Generic;

#nullable disable

namespace AtpPlayersApiWithAngular.Models
{
    public partial class Country
    {
        public Country()
        {
            Players = new HashSet<Player>();
        }

        public int Id { get; set; }
        public string CountryName { get; set; }

        public virtual ICollection<Player> Players { get; set; }
    }
}
