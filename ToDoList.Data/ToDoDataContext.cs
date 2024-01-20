using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Data.Interfaces;

namespace ToDoList.Data
{
    public class ToDoDataContext : DbContext, IToDoDataContext
    {
        public ToDoDataContext() :base() { }

        public ToDoDataContext(DbContextOptions<ToDoDataContext> options) : base(options) 
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured){
                optionsBuilder.UseNpgsql("Server=localhost;Database=ToDoDB;Port=5432;User Id=postgres;Password=l'horizon");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }

        public DbSet<ToDoItem> items { get; set; }

        public List<ToDoItem> GetItems() 
        {
            return items.ToList();
        }

        public int SaveChanges()
        {
            return base.SaveChanges();
        }
    } 
}
