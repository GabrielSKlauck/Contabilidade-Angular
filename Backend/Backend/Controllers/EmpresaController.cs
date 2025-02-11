using Backend.Contracts.Repository;
using Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class EmpresaController : ControllerBase
    {
        private readonly IEmpresaRepository _empresaRepository;

        public EmpresaController(IEmpresaRepository empresaRepository)
        {
            _empresaRepository = empresaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> getEmpresa(int id)
        {
            await _empresaRepository.getEmpresa(id);
            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> getEmpresaValue(int id)
        {
            await _empresaRepository.getEmpresaValue(id);
            return Ok();
        }
    }
}
