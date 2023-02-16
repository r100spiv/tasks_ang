export  class FamousService{
    private data:  string[] =  [ "Mark Twen",  "Steven King",	"Alexander Pope"];  getData(): string[] {
    
    return this.data;
    }
    addData(name: string){
    
    this.data.push(name);
    }
    }