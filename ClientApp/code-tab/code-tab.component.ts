import { Component, Input, OnInit,Directive, Renderer2,ElementRef, ViewChild } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-code-tab',
  templateUrl: './code-tab.component.html',
  styleUrls: ['./code-tab.component.css']
})
export class CodeTabComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.selectedList = this.menuLists[0];
    if (this.codeCSS != null) {
      this.codeLists.push(this.codeCSS);
    }
    if (this.codeCplus != null) {
      this.codeLists.push(this.codeCplus);
    }
    if (this.codePython != null) {
      this.codeLists.push(this.codePython);
    }
    this.activeCode = this.codeLists[0];
    this.isCopied = false;
  }
  @Input() menuLists: any;
  codeLists: any=[];
  @Input() codeCSS: any;
  @Input() codeCplus: any;
  @Input() codePython: any;
  isCopied: boolean;
  selectedList: any;
  activeCode: any;
  response: HighlightResult;

  //onHighlight(e) {
  //  this.response = {
  //    language: e.language,
  //    relevance: e.relevance,
  //    second_best: '{...}',
  //    top: '{...}',
  //    value: '{...}'
  //  }
  //}


  openMenuList(menuList: any) {
    if (this.selectedList === menuList) {
      return;
    }
    this.selectedList = menuList;
    let i;
    for (i = 0; i < this.menuLists.length; i++) {
      if (this.menuLists[i] === this.selectedList) {
        break;
      }
    }
    this.activeCode = this.codeLists[i];
    console.log(this.selectedList);
  }
  @ViewChild('copyBtn', { static: false }) copyBtn: ElementRef;
  @ViewChild('copySuccess', { static: false }) copySuccess: ElementRef;
  changeIcon() {
    if (this.isCopied) {
      this.renderer.addClass(this.copyBtn.nativeElement, 'copy-btn-opacity');
      setTimeout(()=> {
        this.renderer.addClass(this.copyBtn.nativeElement, 'copy-btn-display');
      }, 200);
      setTimeout(() => {
        this.renderer.addClass(this.copySuccess.nativeElement, 'copy-success-display');
      }, 200);
      setTimeout(() => {
        this.renderer.addClass(this.copySuccess.nativeElement, 'copy-success-opacity');
      }, 400);
      setTimeout(() => {
        this.renderer.removeClass(this.copySuccess.nativeElement, 'copy-success-opacity');
      }, 1400);
      setTimeout(() => {
        this.renderer.removeClass(this.copySuccess.nativeElement, 'copy-success-display');
      }, 1600);
      setTimeout(() => {
        this.renderer.removeClass(this.copyBtn.nativeElement, 'copy-btn-display');
      }, 1600);
      setTimeout(() => {
        this.renderer.removeClass(this.copyBtn.nativeElement, 'copy-btn-opacity');
      }, 1800);
    }
  }
  //changeIcon() {
  //  if (this.isCopied) {
  //    let copyBtn = document.querySelector(".copy-btn");
  //    let copySuccess = document.querySelector(".copy-success");
  //    copyBtn.classList.add("copy-btn-opacity");
  //    setTimeout(function () {
  //      copyBtn.classList.add("copy-btn-display");
  //    }, 200);
  //    setTimeout(function () {
  //      copySuccess.classList.add("copy-success-display");
  //    }, 200);
  //    setTimeout(function () {
  //      copySuccess.classList.add("copy-success-opacity");
  //    }, 400);
  //    setTimeout(function () {
  //      copySuccess.classList.remove("copy-success-opacity");
  //    }, 1400);
  //    setTimeout(function () {
  //      copySuccess.classList.remove("copy-success-display");
  //    }, 1600);
  //    setTimeout(function () {
  //      copySuccess.classList.add("copy-success");
  //    }, 1600);
  //    setTimeout(function () {
  //      copyBtn.classList.remove("copy-btn-display");
  //    }, 1600);
  //    setTimeout(function () {
  //      copyBtn.classList.remove("copy-btn-opacity");
  //    }, 1800);
  //  }
  //}
}
