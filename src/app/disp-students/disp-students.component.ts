import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {studentApiService} from '../../app/services/studentapi.service';



@Component({
  selector: 'app-disp-students',
  templateUrl: './disp-students.component.html',
  styleUrls: ['./disp-students.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DispStudentsComponent implements OnInit {

 
  studentsList: any
  filteredStudentList: any
  searchTerm: string
  searchTagTerm: string


  private _searchTerm: string

  //calling api get service
  getData() {
    this._studentApiService.getData().subscribe(
      response => {
        this.studentsList = response;
  
         //now we need to modify the studentsList object by averaging the grades
        this.initEverything(this.studentsList?.students);

   

        //initialize filteredStudentList to studentList
        this.filteredStudentList = this.studentsList
      
            

      },
      error => {
        console.error('Error retrieving student properties ', error);
      }
    );
   
   
  }
  
  


  initEverything(unaveragedStudentsList){
    for (let i = 0; i < unaveragedStudentsList.length; i++){
      var grades = unaveragedStudentsList[i].grades
  
      //convert grade strings into grade ints
     grades = grades.map(Number)
      
      //set average for current student's grades
      let sum = grades.reduce((a, b) => b += a);
      let average = sum / grades.length
  
      //update grades with average.
      this.studentsList.students[i].avgGrades = average
  

      //concatenate names here (for searc function), and update for studentsList
      this.studentsList.students[i].concattedName = unaveragedStudentsList[i].firstName.concat(" ",unaveragedStudentsList[i].lastName)

      //tracking expanded boolean for each student
      this.studentsList.students[i].hidden = false

      //create tags array for each student, and index if insertion for new tag
      this.studentsList.students[i].tagsArray = []
      this.studentsList.students[i].tagIndex = 0


      this.studentsList.students[i].conTag = ''


      //we now go to template to display everything
    }
   
  }


  addTag(entered, i){
   
    let tagIndex =  this.filteredStudentList.students[i].tagIndex
    this.filteredStudentList.students[i].tagsArray[tagIndex] = entered

    this.filteredStudentList.students[i].tagIndex++


    
    

//have to concatenate tag for search function.  This is a very brute force, and is not technically correct.  I am using space to separate the tags, which is
//flawed as the user should not be able to search multiple tags at once.
for (let j=0;j<this.filteredStudentList.students[i].tagsArray.length;j++){
  this.filteredStudentList.students[i].conTag= this.filteredStudentList.students[i].conTag.concat(' ', this.filteredStudentList.students[i].tagsArray[j])
//now, the contag property is used for searching, in similar fashion to searching by name
}




  }




  ngOnInit(): void {
    this.getData()
   
   }

   constructor(private _studentApiService: studentApiService){}
 


Search(){

  if (this.searchTerm != ''){
      this.filteredStudentList.students = this.filteredStudentList.students.filter(res=>{
        return res.concattedName.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
            })
    } else if (this.searchTerm == ''){
      this.ngOnInit()
    } 

}

SearchTag(){
  if (this.searchTagTerm != ''){
    this.filteredStudentList.students = this.filteredStudentList.students.filter(res=>{
      return res.conTag.toLowerCase().includes(this.searchTagTerm.toLocaleLowerCase())
          })
  } else if (this.searchTagTerm == ''){
    this.ngOnInit()
  } 
}


}
