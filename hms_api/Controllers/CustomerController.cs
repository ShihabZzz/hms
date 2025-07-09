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
    public class CustomerController : ControllerBase
    {
        private readonly HMS_DbContext dbContext;

        public CustomerController(HMS_DbContext DbContext)
        {
            dbContext = DbContext;
        }

        // get-all-details
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            // data from domain - model
            var customersDetails = await dbContext.customers.ToListAsync();

            // convert domain - model to DTOs
            var customersDTO = new List<CustomerDTO>();
            foreach (var customer in customersDetails)
            {
                customersDTO.Add(new CustomerDTO
                {
                    id = customer.id,
                    name = customer.name,
                    email = customer.email,
                    mobile = customer.mobile,
                    address = customer.address,
                });
            }

            // return DTOs
            return Ok(customersDTO);

        }

        //get-single-details
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getSingle([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.customers.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // convert Domain - To DTO
            var singleData = new CustomerDTO
            {
                id = id_check.id,
                name = id_check.name,
                email = id_check.email,
                mobile = id_check.mobile,
                address= id_check.address,
            };
            return Ok(singleData);
        }

        // create-customer
        [HttpPost]
        public async Task<IActionResult> create([FromBody] CreateCustomerDTO createCustomerDTO)
        {
            // convert DTO to domain - model
            var createCustomer = new Customer
            {
                name = createCustomerDTO.name,
                email = createCustomerDTO.email,
                mobile = createCustomerDTO.mobile,
                address = createCustomerDTO.address,
            };

            // apply domain - model in DB
            await dbContext.customers.AddAsync(createCustomer);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(getSingle), new { createCustomer.id }, createCustomerDTO);
            // return Ok();
        }

        // update-customer
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> update([FromRoute] Guid id, [FromBody] UpdateCustomerDTO updateCustomerDTO)
        {
            // id checking
            var id_check = await dbContext.customers.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // update values 
            id_check.name = updateCustomerDTO.name;
            id_check.email = updateCustomerDTO.email;
            id_check.mobile = updateCustomerDTO.mobile;
            id_check.address = updateCustomerDTO.address;

            await dbContext.SaveChangesAsync();

            // convert domain - model to DTO
            var afterUpdate = new CustomerDTO
            {
                id = id_check.id,
                name = id_check.name,
                email = id_check.email,
                mobile = id_check.mobile,
                address = id_check.address,
            };

            return Ok(afterUpdate);
        }

        // delete - customer
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> delete([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.customers.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            //delete function
            dbContext.customers.Remove(id_check);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
