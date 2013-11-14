using Microsoft.AspNet.SignalR;
using Simufit.DataAccess.Services;
using Simufit.DataAccess.Services.Contracts;


namespace Simufit.Web.Hubs
{
    public class UserHub:Hub
    {
        private readonly IUserService _userService;

        public UserHub()
        {
            _userService = new UserService();
        }

        public void GetUser()
        {
            Clients.All.gotUser(Context.User);
        }
    }
}