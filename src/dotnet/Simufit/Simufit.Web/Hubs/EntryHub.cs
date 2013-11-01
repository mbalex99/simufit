using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;
using Simufit.DataAccess.Services.Implementations;
using Simufit.Domain.Entities;
using Simufit.Web.Infrastructure;

namespace Simufit.Web.Hubs
{
    public class EntryHub : Hub
    {
        private readonly IUserService _userService;
        private readonly IEntryService _entryService;

        public EntryHub()
        {
            _userService = new UserService();
            _entryService = new EntryService();
        }

        public void SaveEntry(Entry entry)
        {
            var user = Context.GetUser();
            entry.UserId = user.Id;
            _entryService.UpdateEntry(entry);
            Clients.Caller.savedEntry(entry);
        }
    }
}