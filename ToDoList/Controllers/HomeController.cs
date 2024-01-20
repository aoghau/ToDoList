using Microsoft.AspNetCore.Mvc;
using ToDoList.Data;
using ToDoList.Data.Interfaces;
using ToDoList.Utility;

namespace ToDoList.Controllers
{
    public class HomeController : Controller
    {
        private IToDoDataContext _context;
        
        public HomeController(IToDoDataContext context)
        {
            _context = context;
        }

        [HttpGet()]
        public IActionResult GetTodoList()
        {
            var wrapper = new ListWrapper<ToDoItem>() { List = _context.items.ToArray() };
            return new JsonResult(wrapper);
        }

        [HttpPost("Add")]
        public IActionResult AddTodo(string name, string description)
        {
            ToDoItem todo = new ToDoItem(name, description);
            _context.items.Add(todo);
            _context.SaveChanges();
            return new OkResult();
        }

        [HttpDelete("id")]
        public IActionResult DeleteToDo(int id)
        {
            var todo = _context.items.Where(x => x.Id == id).FirstOrDefault();
            _context.items.Remove(todo);
            _context.SaveChanges();
            return new OkResult();
        }
    }
}
