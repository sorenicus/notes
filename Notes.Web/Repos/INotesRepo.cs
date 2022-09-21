using Notes.Web.Models;

namespace Notes.Web.Repos;

public interface INotesRepo
{
    Task CreateNote(NoteModel note);

    Task<IEnumerable<NoteModel>> GetNotes();

    Task<NoteModel> GetNote(int id);

    Task DeleteNote(int id);

    Task EditNote(NoteModel note);
}