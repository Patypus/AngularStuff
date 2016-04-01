using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppTets.Startup))]
namespace WebAppTets
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
