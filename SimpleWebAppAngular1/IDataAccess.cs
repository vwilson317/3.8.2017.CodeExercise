using System.Collections.Generic;

namespace SimpleWebAppAngular1
{
    public interface IDataAccess<T>
    {
        List<T> GetAll();
        T Get(int id);
    }
}