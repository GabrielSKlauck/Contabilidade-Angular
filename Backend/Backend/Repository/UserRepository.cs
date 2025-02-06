using Backend.DTO;
using Backend.Entity;
using Backend.Tools;
using Dapper;
using System.Security.Cryptography;


namespace Backend.Repository
{
    public class UserRepository : Connection
    {
        public async Task<UserTokenDTO> Login(UserLoginDTO user)
        {
            var crypto = new Cryptography(SHA512.Create());
            user.Password = crypto.CriptografarSenha(user.Password);

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
