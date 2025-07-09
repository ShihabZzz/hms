using hms_api.Data;
using hms_api.Models.Domain;
using hms_api.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace hms_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly HMS_DbContext dbContext;

        public StaffController(HMS_DbContext DbContext)
        {
            dbContext = DbContext;
        }

        // get-all-details
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            // data from domain - model
            var staffsDetails = await dbContext.staffs.ToListAsync();

            // convert domain - model to DTOs
            var staffsDTO = new List<StaffDTO>();
            foreach (var staff in staffsDetails)
            {
                staffsDTO.Add(new StaffDTO
                {
                    id = staff.id,
                    name = staff.name,
                    email = staff.email,
                    age = staff.age,
                    salary = staff.salary
                });
            }

            // return DTOs
            return Ok(staffsDTO);

        }

        //get-single-details
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getSingle([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.staffs.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // convert Domain - To DTO
            var singleData = new StaffDTO
            {
                id = id_check.id,
                name = id_check.name,
                email = id_check.email,
                age = id_check.age,
                salary = id_check.salary,
            };
            return Ok(singleData);
        }

        // create-staff
        [HttpPost]
        public async Task<IActionResult> create([FromBody] CreateStaffDTO createStaffDTO)
        {
            // convert DTO to domain - model
            var createStaff = new Staff
            {
                name = createStaffDTO.name,
                email = createStaffDTO.email,
                age = createStaffDTO.age,
                salary = createStaffDTO.salary
            };

            // apply domain - model in DB
            await dbContext.staffs.AddAsync(createStaff);
            await dbContext.SaveChangesAsync();

            return Ok();
        }

        // update-staff
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> update([FromRoute] Guid id, [FromBody] UpdateStaffDTO updateStaffDTO)
        {
            // id checking
            var id_check = await dbContext.staffs.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // update values
            id_check.name = updateStaffDTO.name;
            id_check.email = updateStaffDTO.email;
            id_check.age = updateStaffDTO.age;
            id_check.salary = updateStaffDTO.salary;

            await dbContext.SaveChangesAsync();

            // convert domain - model to DTO
            var afterUpdate = new StaffDTO
            {
                id = id_check.id,
                name = id_check.name,
                email = id_check.email,
                age = id_check.age,
                salary = id_check.salary
            };

            return Ok(afterUpdate);
        }

        // delete - staff
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> delete([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.staffs.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            //delete function
            dbContext.staffs.Remove(id_check);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
