using System.Collections.Generic;
using Simufit.Domain.Entities;

namespace Simufit.DataAccess.Services.Contracts
{
    public interface IUserService
    {
        IEnumerable<User> GetUsers();
        void Upsert(User entity);
        void Create(User entity);
        void Delete(string id);
        User GetById(string id);
        void Update(User entity);
    }
}