using Backend.Entity;

namespace Backend.Contracts.Repository
{
    public interface IEmpresaRepository
    {
        Task<EmpresaEntity> getEmpresa(int id);

        Task<Double> getEmpresaValue(int id);
    }
}
