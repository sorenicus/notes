using Dapper;
using Microsoft.Data.Sqlite;

namespace Notes.Web.Repos;

public static class SqliteBootStrapper
{    
    public static void Setup(string databaseName)
    {
        var connection = new SqliteConnection(databaseName);

        using(connection)
        {
            connection.Open();
            var table = connection.Query<string>($"SELECT name FROM sqlite_master WHERE type='table' AND name = 'Notes';");
            var name = table.FirstOrDefault();
            
            if (!(!string.IsNullOrEmpty(name) && name == "Notes"))
            {
                connection.Execute($"CREATE TABLE Notes (Id INTEGER PRIMARY KEY, Text VARCHAR(1000) NOT NULL);");
            }
        }
    }
}