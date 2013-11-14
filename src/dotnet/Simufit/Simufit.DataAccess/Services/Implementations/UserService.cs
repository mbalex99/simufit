using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using Simufit.DataAccess.Services.Contracts;
using Simufit.Domain.Entities;

namespace Simufit.DataAccess.Services
{
    public class UserService:EntityService<User>, IUserService
    {
        public IEnumerable<User> GetUsers()
        {
            var users = this.MongoConnectionHandler.MongoCollection.FindAllAs<User>();
            return users;
        }

        public User GetUserByFacebookId(string facebookId)
        {
            var query = Query.EQ("FacebookId", facebookId);
            return this.MongoConnectionHandler.MongoCollection.FindOne(query);
        }

        public void Upsert(User entity)
        {
            var userCollection = MongoConnectionHandler.MongoCollection;
            IMongoQuery query = Query.EQ("FacebookId", entity.FacebookId);
            IMongoUpdate update = MongoDB.Driver.Builders.Update.Replace(entity);

            userCollection.Update(query, update, UpdateFlags.Upsert);
        }
    }
}
