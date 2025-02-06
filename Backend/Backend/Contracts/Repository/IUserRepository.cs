using Backend.DTO;

namespace Backend.Contracts.Repository
{
    public interface IUserRepository
    {
        Task<UserTokenDTO> Login(UserLoginDTO user);
    }
}
