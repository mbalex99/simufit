using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Simufit.Domain.Entities
{
    public class User:MongoEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string FacebookId { get; set; }
        [BsonRepresentation(BsonType.String)]
        public Role Role { get; set; }
    }
}
