using Models;
using Models.DAL;
using Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly Repository _repository;

        public HomeController()
        {
            this._repository = new Repository();
        }

        public ActionResult Index()
        {
            return View();
        }

        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public JsonResult GetTitleList()
        {
            var tl = new List<List>
            {
                new List
                {
                    Id = 1,
                    Count = 1,
                    CountEnded = 1,
                    Name = "something",
                    Tasks = new List<Task>
                    {
                        new Task
                        {
                            Ended = false,
                            Id = 1,
                            ListId = 1,
                            Name = "some task"
                        }
                    }
                }
            };
                //this._repository.Entity<List>().OrderBy(o => o.Id).ToList();

            return Json(tl, JsonRequestBehavior.AllowGet);
        }
    }
}