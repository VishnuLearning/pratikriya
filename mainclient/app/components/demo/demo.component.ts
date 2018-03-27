import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatSlider, MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
  })
export class DemoComponent implements OnInit {
  @ViewChild('pencil') pencil: HTMLImageElement;
  @ViewChild(MatSlideToggle) toggleDemoSlider: MatSlideToggle;

  ctx:CanvasRenderingContext2D; //canvas context
  options:number[];
  penciltop:number;
  pencilInterval:any;
  smiley:string;
  score:number;
  lastscore:number;

  constructor() { }

  ngOnInit() {  
    this.penciltop = 170;
    this.options = [];
    this.score = 5;
  }

  filldemoform() {
    this.clearChoices();
    this.markChoices();
    this.penciltop = -45;
  }

  start() {
    this.filldemoform();
    this.pencilInterval = 
    setInterval(()=>{
      this.filldemoform();
    }, 5000);
  }

  stop() {
    clearInterval(this.pencilInterval);
  }

  toggleDemo() {
    if(this.toggleDemoSlider.checked) {
      this.start();
    } else {
      this.stop();
    }
  }

  setScore(s:number) {
    if (s==-2) {
      s = s-Math.floor(Math.random()*2);
    } else if (s==0) {
      s = -1 + Math.floor(Math.random()*3);
    } else if (s==2) {
      s = s+Math.floor(Math.random()*2);
    }

    this.score = s+5;
  }

  markChoices() {
    for(let i=1; i<=4; i++) {
      setTimeout(()=>{
        this.addChoice();
        if(i<4) this.penciltop += 65;
        else {
          this.penciltop = 170;
          //set score
          let s = 0;
          for(let j=0; j<4; j++) {
            console.log(this.options[j]);
            s += this.options[j];
          }
          //console.log(s);
          this.setScore(s);
        }
        
      }, 500*i);
    }
  }

  addChoice() {
    let c = Math.floor(Math.random()*2);
    this.options.push(c==0?-1:1);
  }

  clearChoices() {
    this.options = [];
  }

}