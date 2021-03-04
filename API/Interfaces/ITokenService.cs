using API.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace API.Interfaces
{
    public interface ITokenService
    {
        
         string CreateToken(AppUser user);
    }
}