import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, collection, collectionData, doc, addDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'polyhacks';

  messages$: Observable<any[]> = new Observable<any[]>();
  newMessage = {content: ''};
  messagesRef: any;
  

  roomId: string = '';

  constructor(private firestore: Firestore) {

  }

  joinRoom() {
    this.messagesRef = collection(this.firestore, `rooms/${this.roomId}/messages`)
    this.messages$ = collectionData(this.messagesRef, {idField: 'id'});
  }

  sendMessage() {
    addDoc(this.messagesRef, this.newMessage);
    this.newMessage.content = '';
  }

}
