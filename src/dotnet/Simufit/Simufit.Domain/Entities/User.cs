﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Simufit.Domain.Entities
{
    public class User:MongoEntity
    {
        public string FacebookId { get; set; }
    }
}
