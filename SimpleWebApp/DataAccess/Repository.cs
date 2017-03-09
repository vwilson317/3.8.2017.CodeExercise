using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class Repository : IRepository
    {
        private readonly TitlesContext _dbContext;

        public Repository()
        {
            this._dbContext = new TitlesContext();
        }

        public DbSet<T> Entity<T>()
            where T : class
        {
            return this._dbContext.Set<T>();
        }

        public void Insert<T>(T entity) where T : class
        {
            this._dbContext.Set<T>().Add(entity);
        }
    }

    public interface IRepository
    {
        DbSet<T> Entity<T>() where T : class;
    }
}
