using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace Simufit.Domain.Entities
{
    public class Entry:MongoEntity
    {
        public Entry()
        {
            Gigs = new List<Gig>();
            Measurements = new List<Measurement>();
        }

        public ObjectId UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public List<Gig> Gigs { get; set; }
        public List<Measurement> Measurements { get; set; } 
    }
}
