class Note{
	constructor (author,content){		
		this.author = author;
		this.content = content;

	}
}

class NotesApplication{
	constructor () {
		this.notes = [];
	}

	
	create (note){
		this.notes.push(note);
	}

	listNotes () {
		for (var i=0; i<this.notes.length; i++){
			console.log("node_id " + i);
			console.log("content " +this.notes[i].content);
			console.log("author " + this.notes[i].author);
		}
	}
	
	getNote (note_id){
		if (this.notes[note_id]){
			return this.notes[note_id];
		
		}
		console.log("NO NOTE WITH SUCH ID");
	}
	
	
	search(search_text){
		for (var i = 0; i < this.notes.length; i++){
			if (this.notes[i].content.indexOf(search_text)> -1){
				console.log("you are searching for: " + search_text);
				console.log("Note ID " + i);
				console.log("Content: " + this.notes[i].content);
				console.log("author: " + this.notes[i].author);
			}
		
		}
	
			
		}

	deleteNote(note_id) {
		this.notes.pop[note_id];
		
	}

	editNote(note_id, new_content){
		if(this.notes[note_id]){
			this.notes[note_id].content = new_content;
			console.log("old content is now eidted to: " + this.notes[note_id].content);
		}
		
	}
	
}

var ade = new Note("toheeb", "first prepared notes");

var toh = new Note("toheeb", "second prepared notes");

not.create(ade);

not.create(toh);

var not = new NotesApplication()

//console.log(ade)

console.log("listing note: " + not.listNotes());
console.log();
console.log("getting note: " + not.getNote(0));
console.log();
console.log("eidting note: " + not.editNote(0, "this is the noteid i edited"));

//console.log(not.search("prepared"))
