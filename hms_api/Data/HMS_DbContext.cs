using hms_api.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace hms_api.Data
{
    public class HMS_DbContext : DbContext
    {
        public HMS_DbContext(DbContextOptions arg) : base(arg)
        {
            
        }

        public DbSet<Booking> bookings { get; set; }

        public DbSet<Staff> staffs { get; set; }

        public DbSet<Customer> customers { get; set; }
    }
}
