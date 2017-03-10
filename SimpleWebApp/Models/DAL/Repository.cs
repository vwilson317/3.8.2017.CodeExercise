namespace Models.DAL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Validation;
    using System.Linq;
    public class Repository
    {
        private readonly TitleListContext dbContext;

        public Repository()
        {
            this.dbContext = new TitleListContext();
        }

        public DbSet<T> Entity<T>()
            where T : class
        {
            return this.dbContext.Set<T>();
        }

        public void Insert<T>(T entity) where T : class
        {
            this.dbContext.Set<T>().Add(entity);
        }
    }
}