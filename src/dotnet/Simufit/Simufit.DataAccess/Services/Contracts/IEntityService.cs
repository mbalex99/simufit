using Simufit.Domain.Entities;

namespace Simufit.DataAccess.Services.Contracts
{
    public interface IEntityService<T> where T : IMongoEntity
    {
        void Create(T entity);

        void Delete(string id);

        T GetById(string id);

        void Update(T entity);
    }
}