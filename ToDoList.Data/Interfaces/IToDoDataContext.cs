using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Interfaces
{
    public interface IToDoDataContext
    {
        public DbSet<ToDoItem> items { get; set; }
        public List<ToDoItem> GetItems();
        public int SaveChanges();
    }
}
