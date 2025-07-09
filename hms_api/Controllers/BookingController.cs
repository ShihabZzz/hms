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
    public class BookingController : ControllerBase
    {
        private readonly HMS_DbContext dbContext;

        public BookingController(HMS_DbContext DbContext)
        {
            dbContext = DbContext;
        }

        // get-all-details
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            // data from domain - model
            var bookingsDetails = await dbContext.bookings.ToListAsync();

            // convert domain - model to DTOs
            var bookingsDTO = new List<BookingDTO>();
            foreach (var booking in bookingsDetails)
            {
                bookingsDTO.Add(new BookingDTO
                {
                    id = booking.id,
                    cus_id = booking.cus_id,
                    name = booking.name,
                    email = booking.email,
                    room_type = booking.room_type,
                    q_room = booking.q_room,
                    cost = booking.cost,
                    booking_date = booking.booking_date
                });
            }

            // return DTOs
            return Ok(bookingsDTO);

        }

        //get-single-details
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> getSingle([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.bookings.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // convert Domain - To DTO
            var singleData = new BookingDTO
            {
                id = id_check.id,
                cus_id = id_check.cus_id,
                name = id_check.name,
                email = id_check.email,
                room_type=id_check.room_type,
                q_room = id_check.q_room,
                cost = id_check.cost,
                booking_date=id_check.booking_date
            };
            return Ok(singleData);
        }

        // create-booking
        [HttpPost]
        public async Task<IActionResult> create([FromBody] CreateBookingDTO createBookingDTO)
        {
            // convert DTO to domain - model
            var createBooking = new Booking
            {
                cus_id = createBookingDTO.cus_id,
                name = createBookingDTO.name,
                email = createBookingDTO.email,
                room_type = createBookingDTO.room_type,
                q_room = createBookingDTO.q_room,
                cost = createBookingDTO.cost,
                booking_date = createBookingDTO.booking_date
            };

            // apply domain - model in DB
            await dbContext.bookings.AddAsync(createBooking);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(getSingle), new { createBooking.id }, createBookingDTO);
            // return Ok();
        }

        // update-booking
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> update([FromRoute] Guid id, [FromBody] UpdateBookingDTO updateBookingDTO)
        {
            // id checking
            var id_check = await dbContext.bookings.FirstOrDefaultAsync(x => x.id == id);
            if(id_check == null)
            {
                // status code 404
                return NotFound();
            }

            // update values 
            id_check.name = updateBookingDTO.name;
            id_check.email = updateBookingDTO.email;
            id_check.q_room = updateBookingDTO.q_room;
            id_check.room_type = updateBookingDTO.room_type;
            id_check.cost = updateBookingDTO.cost;
            id_check.booking_date = updateBookingDTO.booking_date;

            await dbContext.SaveChangesAsync();

            // convert domain - model to DTO
            var afterUpdate = new BookingDTO
            {
                id = id_check.id,
                name = id_check.name,
                email = id_check.email,
                q_room = id_check.q_room,
                cost = id_check.cost,
                booking_date = id_check.booking_date
            };

            return Ok(afterUpdate);
        }

        // delete - booking
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> delete([FromRoute] Guid id)
        {
            // id checking
            var id_check = await dbContext.bookings.FirstOrDefaultAsync(x => x.id == id);
            if (id_check == null)
            {
                // status code 404
                return NotFound();
            }

            //delete function
            dbContext.bookings.Remove(id_check);
            await dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
