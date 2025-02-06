using Backend.DTO;
using Backend.Entity;
using System.Security.Cryptography;

namespace Backend.Repository
{
    public class UserRepository
    {
        public async Task<UserTokenDTO> Login(UserLoginDTO user)
        {
            var Cryptography = new Cryptography(SHA512.Create());
            user.Password = Cryptography.CriptografarSenha(user.Password);

            string sql = "SELECT * FROM USER WHERE Email = @Email AND Password = @Password";
            UserEntity userLogin = await GetConnection().QueryFirstAsync<UserEntity>(sql, user);

            return new UserTokenDTO
            {
                Token = Authentication.GenerateTokenUser(userLogin),
                User = userLogin
            };
        }
    }
}
