using Microsoft.AspNetCore.Mvc;
using Notes.Web.Repos;
using Notes.Web.Models;
using Notes.Web.DTOs;

namespace Notes.Web.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : ControllerBase
{
    INotesRepo _notesRepo;
    
    public NotesController(INotesRepo notesRepo)
    {
        _notesRepo = notesRepo;
    }

    [HttpGet]
    [Route("/notes")]
    public async Task<IEnumerable<NoteModel>> Get()
    {
        return await _notesRepo.GetNotes();
    }
    
    [HttpGet]
    [Route("/notes/{id}")]
    public async Task<NoteModel> Get(int id)
    {
        return await _notesRepo.GetNote(id);
    }

    [HttpPost]
    [Route("/notes")]
    public async Task Create(CreateNoteDTO dto)
    {
        var model = dto.ToModel();
        await _notesRepo.CreateNote(model);
    }

    [HttpPut]
    [Route("/notes/{id}")]
    public async Task Update(int id, UpdateNoteDTO dto)
    {
        var model = dto.ToModel(id);
        await _notesRepo.EditNote(model);
    }

    [HttpDelete]
    [Route("/notes/{id}")]
    public async Task Delete(int id)
    {
        await _notesRepo.DeleteNote(id);
    }
}
