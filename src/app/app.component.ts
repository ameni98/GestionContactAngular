import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice4';
  contact=Contact;
  //etat pour  afficher et cacher les formulaires ajouter et modifier
  etat=1;
  //pour récuperer le contact de l'édition(edit)
  conta;
  a;b;
  //ce qui est écrit dans l'input de filter 
  label="";

  filter(event)
  {
    
    let tab=[];
    this.label=this.label+event.key;
    console.log(event.key);
   
    this.contact.forEach(el=>{
      if((el.nom.includes(this.label))||(el.prenom.includes(this.label))||(el.mail.includes(this.label)))
      {console.log(el.nom.includes(event.key));
      
       tab.push(el);
      }
      else{  
        //suppression de l'élément 
        tab.splice(tab.indexOf(this.label),1);

      }
    
    })
    this.contact=tab;
   /* if(event.key=="Backspace")
   {console.log('hi');
    this.contact=Contact;
    this.label="";
   } */
  
  }  

  Ajouter(form)
  {//ajouter un nouveau contact dans le tableau
    this.contact.push(form);
  
  }
  modifier(form)
  {//modifier un contact dans le tableau
    //récupération de l'indice de l'élément à modifier
    const a=this.contact.indexOf(this.conta);
    //remplacer le contact modifié à la place de l'ancien
    this.contact[a]=form;
    
  }
  supprimer(elem)
  {
    //récupération de l'élément supprimé pour pouvoir faire l'annulation de suppression
    this.a=elem;
    //récupération de l'indexe de lélément à supprimer
    this.b=this.contact.indexOf(elem);
    //suppression de l'élément 
    this.contact.splice(this.b,1);
  }
  edit(val)
  {//le variable conta recoit l'élément à éditer
    this.conta=val;
  }
  AnnulerSupp(){
    //reajouter l'élément supprimé
  this.contact.push(this.a);
  //retour à l'état initiale
  this.etat=1;

  }


}
