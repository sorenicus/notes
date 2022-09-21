using Dapper.Contrib.Extensions;
using Notes.Web.Models;

namespace Notes.Web.DTOs;


public class UpdateNoteDTO
{
    public string Text {get;set;} = string.Empty;

    public NoteModel ToModel(int id)
    {
        var model = new NoteModel();
        model.Id = id;
        model.Text = this.Text;

        return model;
    }
}