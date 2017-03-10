using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace SimpleWebAppAngular1
{
    public abstract class DataAccessBase<T> : IDataAccess<T>
    {
        private readonly SqlConnection _connection;

        protected DataAccessBase(string connectionString)
        {
            _connection = new SqlConnection(connectionString);
        }

        public abstract string GetAllSp();

        public abstract string GetByIdSp();

        public abstract string QueryBySp();

        public abstract string GetUpdateSp();

        public List<T> GetAll()
        {
            if (!string.IsNullOrEmpty(GetAllSp()))
            {
                using (_connection)
                {
                    return new List<T>();//_connection.Query<T>(GetAllSp()).ToList();
                }
            }
            else
            {
                throw new NotImplementedException();
            }

        }

        public T Get(int id)
        {
            if (!string.IsNullOrEmpty(GetByIdSp()))
            {
                using (_connection)
                {
                    return default(T);//_connection.Query<T>(GetByIdSp()).FirstOrDefault();
                }
            }
            else
            {
                throw new NotImplementedException();
            }
        }


        public List<T> Query(int id)
        {
            if (!string.IsNullOrEmpty(QueryBySp()))
            {
                using (_connection)
                {
                    return new List<T>();
                    //;_connection.Query<T>(QueryBySp()).ToList();
                }
            }
            else
            {
                throw new NotImplementedException();
            }
        }
    }
}
