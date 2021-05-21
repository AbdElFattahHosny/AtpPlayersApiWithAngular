using System;
using System.Collections.Generic;

#nullable disable

namespace AtpPlayersApiWithAngular.Models
{
    public partial class Player
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public int Age { get; set; }
        public int NathionalityId { get; set; }
        public int? ShamionShips { get; set; }

        public virtual Country Nathionality { get; set; }
    }
}
