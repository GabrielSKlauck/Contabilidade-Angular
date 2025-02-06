using Backend.Contracts.Repository;
using Backend.DTO;
using Backend.Entity;
using Backend.Tools;
using Dapper;
using System.Security.Cryptography;


namespace Backend.Repository
{
    public class UserRepository : Connection, IUserRepository
    {
        private Cryptography crypto = new Cryptography(SHA512.Create());
        public async Task addUser(UserDTO user)
        {
            user.Password = crypto.CriptografarSenha(user.Password);

            string sql = @$"INSERT INTO USER (Name, Email, Password, Empresa_Id)
                        VALUES(@Name, @Email, @Password, @Empresa_Id)";
            await Execute(sql, user);
        }

        public async Task<UserTokenDTO> Login(UserLoginDTO user)
        {
            
            user.Password = crypto.CriptografarSenha(user.Password);

            string sql = @"SELECT USER.* FROM USER, EMPRESA WHERE USER.Email = @Email AND
                user.Password = @Password AND
                user.id = (SELECT ID FROM EMPRESA WHERE EMPRESA.CNPJ = @CNPJ)";
            UserEntity userLogin = await GetConnection().QueryFirstAsync<UserEntity>(sql, user);

            return new UserTokenDTO
            {
                Token = Authentication.GenerateTokenUser(userLogin),
                User = userLogin
            };
        }
    }
}
