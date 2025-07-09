namespace hms_api.Models.DTO
{
    public class UpdateBookingDTO
    {
        public string name { get; set; }

        public string email { get; set; }

        public string room_type { get; set; }

        public int q_room { get; set; }

        public double cost { get; set; }

        public string booking_date { get; set; }
    }
}
