using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Simufit.Domain.Entities
{
    public class Entry
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime? EndDateTime { get; set; }
        public ICollection<Gig> Gigs { get; set; }
        public ICollection<Measurement> Measurements { get; set; } 
    }
}
