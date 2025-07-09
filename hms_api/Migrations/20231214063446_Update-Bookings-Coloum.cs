using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace hms_api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBookingsColoum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "cus_id",
                table: "bookings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "room_type",
                table: "bookings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cus_id",
                table: "bookings");

            migrationBuilder.DropColumn(
                name: "room_type",
                table: "bookings");
        }
    }
}
