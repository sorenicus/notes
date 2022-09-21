using Dapper.Contrib.Extensions;

namespace Notes.Web.Models;

[Table("Notes")]
public class NoteModel
{
    public int Id {get; set;}
    public string Text {get;set;} = string.Empty;
}