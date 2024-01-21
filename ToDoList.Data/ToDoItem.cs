using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data
{
    public class ToDoItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime DateCreated { get; set; }
        public ToDoItem() { }
        public ToDoItem(string name, string description)
        {
            Name = name;
            Description = description;
            IsCompleted = false;
            DateCreated = DateTime.Now.ToUniversalTime();
        }
    }
}
