using System;
using System.Collections.Generic;
using MongoDB.Bson;
using Simufit.Domain.Entities;

namespace Simufit.DataAccess.Services.Contracts
{
    public interface IEntryService
    {
        IEnumerable<Entry> GetEntriesByUser(User user);
        void AddEntry(Entry entry);
        void UpdateEntry(Entry entry);
        void Delete(ObjectId id);
    }
}