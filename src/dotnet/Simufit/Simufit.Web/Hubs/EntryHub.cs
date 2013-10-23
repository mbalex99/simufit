using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Simufit.DataAccess.Services.Contracts;

namespace Simufit.Web.Hubs
{
    public class EntryHub: Hub
    {
        private readonly IUserService _userService;
        private readonly IEntryService _entryService;

        public EntryHub(IUserService userService, IEntryService entryService)
        {
            _userService = userService;
            _entryService = entryService;
        }
    }
}