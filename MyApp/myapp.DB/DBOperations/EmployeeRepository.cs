using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyApp.Models;

namespace myapp.DB.DBOperations
{
    public class EmployeeRepository
    {
        public int AddEmployee(EmployeeModel model)
        {
            using(var context = new EmployeeDBEntities())
            {
                employee emp = new employee()
                {
                    //EmployeeID = model.EmployeeID,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Code = model.Code,
                    Address = model.Address
                };
                context.employee.Add(emp);

                context.SaveChanges();

                return emp.EmployeeID;
            }
        }

        public List<EmployeeModel> Getallemployee()
        {
            using(var context = new EmployeeDBEntities())
            {
                var result = context.employee
                    .Select(x => new EmployeeModel()
                    {
                        EmployeeID = x.EmployeeID,
                        Address = x.Address,
                        FirstName = x.FirstName,
                        LastName = x.LastName,
                        Email = x.Email,
                        Code = x.Code
                    }).ToList();

                return result;
            }
        }

        public EmployeeModel GetEmployee(int id)
        {
            using (var context = new EmployeeDBEntities())
            {
                var result = context.employee
                    .Where(x =>x.EmployeeID == id)
                    .Select(x => new EmployeeModel()
                    {
                        EmployeeID = x.EmployeeID,
                        Address = x.Address,
                        FirstName = x.FirstName,
                        LastName = x.LastName,
                        Email = x.Email,
                        Code = x.Code
                    }).FirstOrDefault();

                return result;
            }
        }

        public bool UpdateEmployee(int id,EmployeeModel model)
        {
            using(var context = new EmployeeDBEntities())
            {
                var res = context.employee.FirstOrDefault(x => x.EmployeeID == id);
                if(res !=null)
                {
                    res.FirstName = model.FirstName;
                    res.LastName = model.LastName;
                    res.Address = model.Address;
                    res.Code = model.Code;
                    res.Email = model.Email;

                }
                context.SaveChanges();

                return true;
            }
        }

        public bool DeleteEmployee(int id)
        {
            using(var context = new EmployeeDBEntities())
            {
                var emp = context.employee.FirstOrDefault(x=>x.EmployeeID==id);
                if(emp!=null)
                {
                    context.employee.Remove(emp);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}
