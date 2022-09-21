using Notes.Web.Models;
using Notes.Web.Config;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Data.Sqlite;
using System.Data;
using Microsoft.Extensions.Options;

namespace Notes.Web.Repos;

public class SqliteNotesRepo : INotesRepo
{
    string _databaseName = string.Empty;
    public SqliteNotesRepo(IOptions<DatabaseOptions> options)
    {
        _databaseName = options.Value.Name;
    }


    private async Task<SqliteConnection> GetConnection()
    {
        var connection = new SqliteConnection(_databaseName);

        await connection.OpenAsync();

        return connection;
    }

    public async Task CreateNote(NoteModel note)
    {
        var connection = await this.GetConnection();
        using(connection)
        {
            connection.Insert<NoteModel>(note);
        }
    }

    public async Task<IEnumerable<NoteModel>> GetNotes()
    {
        var connection = await this.GetConnection();
        using(connection)
        {
            var notes = await connection.GetAllAsync<NoteModel>();
            return notes;
        }
    }

    public async Task<NoteModel> GetNote(int id)
    {
        var connection = await this.GetConnection();
        using(connection)
        {
            return await connection.GetAsync<NoteModel>(id);
        }
    }

    public async Task DeleteNote(int id)
    {
        var connection = await this.GetConnection();
        using(connection)
        {
            var note = await connection.GetAsync<NoteModel>(id);
            await connection.DeleteAsync<NoteModel>(note);
        }
    }

    public async Task EditNote(NoteModel note)
    {
        var connection = await this.GetConnection();
        using(connection)
        {
            await connection.UpdateAsync<NoteModel>(note);
        }
    }
}