using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using cuc.Models; // Thay "cuc" bằng tên dự án của bạn

namespace cuc.Controllers // Thay "cuc" bằng tên dự án của bạn
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // === CÁC TRANG MỚI CHO WEB BÁN VÉ ===
        public IActionResult Booking()
        {
            return View();
        }

        public IActionResult Routes()
        {
            // Trong tương lai bạn có thể tạo view "Routes.cshtml" để hiển thị lộ trình
            return View();
        }

        public IActionResult TicketLookup()
        {
            // Trong tương lai bạn có thể tạo view "TicketLookup.cshtml" để tra cứu vé
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}