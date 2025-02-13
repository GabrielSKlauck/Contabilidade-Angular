using Backend.Contracts.Repository;
using Backend.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("empresa")]
    public class EmpresaController : ControllerBase
    {
        private readonly IEmpresaRepository _empresaRepository;

        public EmpresaController(IEmpresaRepository empresaRepository)
        {
            _empresaRepository = empresaRepository;
        }

        [HttpGet("GetById")]
        public async Task<IActionResult> getEmpresa(int id)
        {
            
            return Ok(await _empresaRepository.getEmpresa(id));
        }

        [HttpGet("GetValueById")]
        public async Task<IActionResult> getEmpresaValue(int id)
        {
            
            return Ok(await _empresaRepository.getEmpresaValue(id));
        }
    }
}
