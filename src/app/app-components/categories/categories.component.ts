import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

interface categoryData {
  category: string; 
  names: string[]; 
} 

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})



export class CategoriesComponent implements OnInit {

  changeColor: boolean[] = [];
  selected:boolean = false;
  searchWord : string = "";
    lib = {
    categories: [
    'Performance', 'Investments', 'Operations'
    ],
    applets: [
    {
    name: 'Performance Snapshot',
    categories: ['Performance']
    },
    {
    name: 'Commitment Widget',
    categories: ['Investments']
    },
    {
    name: 'CMS',
    categories: ['Investments', 'Performance' ]
    }
    ]
    };
  list : string[] = ["AAA","BBB"];

  categories : string[] = []



  categories1 : categoryData[] = []


   applets : string[] = []
  ngOnInit(): void {
     // this.categories = this.lib.categories;
      this.lib.categories.forEach((t1,i)=>{

        console.log("categories  AAAAA ---  ", t1);

        let names = this.lib.applets.filter(t=>t.categories.includes(t1)).map(t=>t.name);

        console.log("categories  AAAAA ---  ", {t1, names});

        this.categories1.push({category:t1, names:names});
        

      });

      this.categories1.forEach((t,i)=>{
        this.changeColor.push(false);
       });
      let applets1  = this.lib.applets;

      console.log("categories   ", this.categories);

      console.log("applets1   ",  applets1); 
      
  }

  seletCategory(category:string, index:number){
    
    console.log("selet Category   index",  {category, index});
    console.log("this.changeColor -----  AA ", this.changeColor);

    //let c1 = [...this.changeColor]

    this.changeColor = this.changeColor.map(t=>t=false);

    this.changeColor[index] = true;
  //  c1.forEach((t,i)=>
  //     {
  //       if(i == index){          
  //         t = true
  //         //console.log("forEach  AAA true--- ",  {t, i});
  //       }else{
  //         t= false
  //         //console.log("forEach  NOT true--- ", {t, i});
  //       }
        
  //       console.log("forEach RRR  index ", {t, i}); 
  //     }
  //     );
     /// console.log("this.changeColor -----  BB ", this.changeColor);
    setTimeout(() => { 
    //  this.changeColor[index] =true;
      console.log("this.changeColor -----  CC ",this.changeColor);
     }, 100);
     
   // 
    console.log("this.changeColor -----   B ", this.changeColor);

    let result = this.lib.applets.filter(t=>t.categories.includes(category)).map(t=>t.name);

    this.applets = result;
    console.log("result   ", result);

  
   //  this.lib.applets["category"]
  }

  searchApplets(event: any){
    console.log("searchApplets applet---------   ", event.target.value);
    console.log("searchWord ---------   ", this.searchWord);
    
    if(event.target.value){

      let applet  = event.target.value;
      let result = this.lib.applets.filter(t=>t.name.toLowerCase().includes(applet.toLowerCase())).map(t=>t.name);
      this.applets = result;

      console.log("applets   ", result);
    }
  }

  // changeListColor(index:number){
  //   console.log("changeListColor -----A  index ",index);
  //   this.changeColor.forEach(t=>
  //     {
  //       t=false

  //       console.log("forEach  index ",t);
  //     }
  //     );


  //   this.changeColor[index] =true;
  //   console.log("this.changeColor -----   ", this.changeColor);
  // }
}
