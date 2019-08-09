using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class RecordDBContext:DbContext
    {

        public RecordDBContext() { }
        public RecordDBContext(DbContextOptions<RecordDBContext> options)
            :base()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=EFGetStarted.ConsoleApp.NewDb;Trusted_Connection=True;");
        }

        public DbSet<Record> Record { get; set; }

    }

    


}
