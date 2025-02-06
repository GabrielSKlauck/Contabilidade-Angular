using Backend.DTO;

namespace Backend.Contracts.Repository
{
    public interface IUserRepository
    {
        Task addUser(UserDTO user);

        Task<UserTokenDTO> Login(UserLoginDTO user);
    }
}
