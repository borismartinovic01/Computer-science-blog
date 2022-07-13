import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-txt-editor',
  templateUrl: './txt-editor.component.html',
  styleUrls: ['./txt-editor.component.css']
})
export class TxtEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  newPostForm: any;
  currentStyle: any;
  paragraphActive: boolean;
  heading3Active: boolean;
  public contentDiv: any;
  firstFocus: boolean;
  testN: any;
  currentElement: any;

  ngOnInit() {
    this.newPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: [''],
      author: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.currentStyle = "paragraph";
    this.paragraphActive = true;
    this.heading3Active = false;
    this.firstFocus = true;
    //this.onNameChange(this.contentDiv);
    this.currentElement = 'p';
  }
  public toggleDrop = false;
  toggleDropdown() {
    //evo ga ovo stavis u change style i onda vidi kako da promenis tag iz p u h3 naprimer
    var selection = window.getSelection();
    //ovo ti treba za boldovanje italic i to
    let selectedText = selection.toString();
    //console.log(selectedText);
    //ako je paragraf prazan onda ce ti ovo uhvatiti div a ne p element
    //console.log(selection.focusNode.parentNode);
    this.toggleDrop = !this.toggleDrop;
  }
  disableFocus() {
    return false;
  }
  changeStyle(clickedStyle: any) {
    if (clickedStyle !== this.currentStyle) {

      var selection = window.getSelection();
      console.log(selection.anchorNode.nodeName);
      console.log(selection.focusNode.nodeName);
      if (selection.anchorNode.nodeName === "#text") {
        if (clickedStyle === 'paragraph') {
          selection.focusNode.parentElement.outerHTML = selection.focusNode.parentElement.outerHTML.replace(/h3/g, "p");
        }
        else {
          selection.focusNode.parentElement.outerHTML = selection.focusNode.parentElement.outerHTML.replace(/p/g, "h3");
        }
      }
      else if (selection.anchorNode.nodeName === "P" || selection.anchorNode.nodeName === "H3") {
        //ne postoji focusnode.currentelement pa onda idem do onog dummyBr taga pa se vracam gore
        if (clickedStyle === 'paragraph') {
          selection.focusNode.firstChild.parentElement.outerHTML = selection.focusNode.firstChild.parentElement.outerHTML.replace(/h3/g, "p");
        }
        else {
          selection.focusNode.firstChild.parentElement.outerHTML = selection.focusNode.firstChild.parentElement.outerHTML.replace(/p/g, "h3");
        }
      }
        //ako je selectionnode DIV kako onda da dohvatis curent ako on kao selekciju uhvati div iz nekog razloga
      else {

      }

      this.paragraphActive = !this.paragraphActive;
      this.heading3Active = !this.heading3Active;
      this.currentStyle = clickedStyle;
    }
    this.toggleDrop = false;
  }
  onNameChange(target: any,el:any) {
    let content = target.innerHTML;
    if (content === '') {
      let innerp = document.createElement('p');
      let dummyBr = document.createElement('br');
      innerp.appendChild(dummyBr);
      //innerp.innerText = "\u00A0";
      target.appendChild(innerp);
      this.setCaret(innerp);
      return;
    }
    
  }
  setCaret(el: any) {
    var range = document.createRange();
    /*el.childNodes[0], 0*/
    range.setStart(el,0);
    range.collapse(true);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  }
  setContentDiv(target:any,el:any) {
    if (this.firstFocus) {
      this.onNameChange(target,el);
    }
    this.firstFocus = false;
  }
}
