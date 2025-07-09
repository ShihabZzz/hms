namespace hms_api.Models.DTO
{
    public class BookingDTO
    {
        public Guid id { get; set; }

        public string cus_id { get; set; }

        public string name { get; set; }

        public string email { get; set; }

        public string room_type { get; set; }

        public int q_room { get; set; }

        public double cost { get; set; }

        public string booking_date { get; set; }
    }
}
