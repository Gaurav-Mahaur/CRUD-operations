using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyApp.Models;
using myapp.DB.DBOperations;

namespace MyApp.Controllers
{
    public class HomeController : Controller
    {
        EmployeeRepository repository = null;

        public HomeController()
        {
            repository = new EmployeeRepository();
        }

        // GET: Home
        public ActionResult Index()
        {

            return RedirectToAction("GetAllRecord");
           // return View();
        }


        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(EmployeeModel model)
        {
            if(ModelState.IsValid)
            {
                int id = repository.AddEmployee(model);
                if(id>0)
                {
                    ModelState.Clear();
                    ViewBag.Issucess = "Data Added";
                }
            }
            return View();
        }
        public ActionResult GetAllRecord()
        {
            var result = repository.Getallemployee();
            return View(result);
            // return View();
        }
        public ActionResult Details(int id)
        {
            var employee = repository.GetEmployee(id);
            return View(employee);
        }
       [HttpGet]
        public ActionResult Edit(int id)
        {
            var emp = repository.GetEmployee(id);
            return View(emp);
        }

       [HttpPost]
        public ActionResult Edit(EmployeeModel model)
        {
            if(ModelState.IsValid)
            {
                repository.UpdateEmployee(model.EmployeeID, model);
                return RedirectToAction("GetAllRecord");
            }
            return View();
        }

       
        public ActionResult Delete(int id)
        {
            repository.DeleteEmployee(id);
            return RedirectToAction("GetAllRecord");
        }

    }
}