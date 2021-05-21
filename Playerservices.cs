using AtpPlayersApiWithAngular.Data;
using AtpPlayersApiWithAngular.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtpPlayersApiWithAngular.Services
{

    public class Playerservices : IPlayers
    {
        private readonly AtpDbContext context;

        public Playerservices(AtpDbContext _context)
        {
            context = _context;
        }

        public async Task<Player> CreatePlayer(Player player1)
        {
            context.Players.Add(player1);
            await  context.SaveChangesAsync();
            return player1;
        }

        public async Task DeletePlayer(Player player)
        {
            context.Players.Remove(player);
            await context.SaveChangesAsync();
        }

        public async Task<Player> GetPlayerById(int id)
        {
            return await context.Players.Include(x => x.Nathionality).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Player>> GetPlayersList()
        {
            return await context.Players.Include(x => x.Nathionality).ToListAsync();
        }

        public async  Task UpdatePlayer(Player player)
        {
            context.Players.Update(player);
            await context.SaveChangesAsync();
        }
    }
}
