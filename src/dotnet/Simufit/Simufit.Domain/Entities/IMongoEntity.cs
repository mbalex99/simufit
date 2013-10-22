using MongoDB.Bson;

namespace Simufit.Domain.Entities
{
    public interface IMongoEntity
    {
        ObjectId Id { get; set; } 
    }
}