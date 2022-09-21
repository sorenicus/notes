using Dapper.Contrib.Extensions;
using Notes.Web.Models;

namespace Notes.Web.DTOs;


public class CreateNoteDTO
{
    public string Text {get;set;} = string.Empty;

    public NoteModel ToModel()
    {
        var model = new NoteModel();
        model.Text = this.Text;

        return model;
    }
}