using Backend.Contracts.Repository;
using Backend.DTO;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(UserLoginDTO user)
        {
            try
            {
                return Ok(await _userRepository.Login(user));
            }
            catch (Exception e)
            {
                return Unauthorized("Usuario ou senha invalidos");
            }
        }

    }
}
