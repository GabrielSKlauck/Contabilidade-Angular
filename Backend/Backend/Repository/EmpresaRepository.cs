using Backend.Contracts.Repository;
using Backend.Entity;
using Backend.Tools;
using Dapper;

namespace Backend.Repository
{
    public class EmpresaRepository : Connection, IEmpresaRepository
    {
        public async Task<EmpresaEntity> getEmpresa(int id)
        {
            string sql = "SELECT * FROM EMPRESA WHERE ID = @id";
            return await GetConnection().QueryFirstAsync<EmpresaEntity>(sql, new { id });
        }

        public async Task<double> getEmpresaValue(int id)
        {
            string sql = "SELECT VALUE FROM EMPRESA WHERE ID = @id";
            return await GetConnection().QueryFirstAsync<double>(sql, new { id });
        }
    }
}
