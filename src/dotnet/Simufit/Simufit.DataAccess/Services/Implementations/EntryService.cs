using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Simufit.DataAccess.Services.Contracts;
using Simufit.Domain.Entities;

namespace Simufit.DataAccess.Services.Implementations
{
    public class EntryService : EntityService<Entry>, IEntryService
    {
        public IEnumerable<Entry> GetEntriesByUser(User user)
        {
            MongoCollection<Entry> entriesCollection = MongoConnectionHandler.MongoCollection;
            var query = Query.EQ("UserId", user.Id);
            var entries = entriesCollection.Find(query);

            return entries;
        }

        public void AddEntry(Entry entry)
        {
            MongoCollection<Entry> entriesCollection = MongoConnectionHandler.MongoCollection;
            entriesCollection.Save(entry);
        }

        public void UpdateEntry(Entry entry)
        {
            MongoCollection<Entry> entriesCollection = MongoConnectionHandler.MongoCollection;
            entriesCollection.Save(entry);
        }

        public void Delete(ObjectId id)
        {
            MongoCollection<Entry> entriesCollection = MongoConnectionHandler.MongoCollection;
            var query = Query.EQ("Id", id);
            entriesCollection.Remove(query);
        }

    }
}
