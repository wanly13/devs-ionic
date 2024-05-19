import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public pdfModules = [
    { title: 'Pdf Viewer', url: '/folder/pdfviewer', icon: 'mail' },
    { title: 'Pdf Make', url: '/folder/pdfviewer2', icon: 'mail' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
