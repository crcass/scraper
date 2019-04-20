const showNotesBtn = document.querySelectorAll('.show-notes');

const toggleNotes = function() {
  const { button } = this.dataset;
  const target = document.querySelector(`[data-key="${button}"]`);

  target.classList.toggle('expand');

  const { article } = document.querySelector(`[data-id="${button}"]`).dataset;

  if (target.classList.contains('expand')) {
    axios.get(`/articles/${article}`).then(data => console.log(data.data));
  }
};

showNotesBtn.forEach(button => button.addEventListener('click', toggleNotes));

const addNoteBtn = document.querySelectorAll('.add-note');

const newNote = e => {
  e.preventDefault();
  const { article } = e.target.dataset;
  const { id } = e.target.dataset;
  const title = document.querySelector(`#title-${id}`).value;
  const body = document.querySelector(`#body-${id}`).value;
  const note = { title, body };
  const form = document.querySelector(`#form-${id}`);
  const notesDisplay = document.querySelector(`#notes-${id}`);

  axios.post(`/articles/${article}`, note).then(data => {
    const articleNote = `<button class="delete-note" data-note="${
      data.data.note
    }" data-articlekey=${id}>&times</button> <div class="note-text"><h3 class="note-title">${
      note.title
    }</h3> <p class="note-body">${note.body}</p></div>`;
    notesDisplay.innerHTML = articleNote;
  });
  form.reset();
};

addNoteBtn.forEach(button => button.addEventListener('click', e => newNote(e)));

const notesDisplay = document.querySelectorAll('.notes-display');

const removeNote = e => {
  if (e.target.classList.contains('delete-note')) {
    const { note } = e.target.dataset;
    const key = e.target.dataset.articlekey;
    const notesContainer = document.querySelector(`#notes-${key}`);

    axios.delete(`/notes/${note}`, { note }).then(data => {
      console.log(data);
    });

    while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
    }
  }
};

notesDisplay.forEach(button =>
  button.addEventListener('click', e => removeNote(e))
);
