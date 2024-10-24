import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nevy11-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatWidgetComponent {
  messages = [{ user: 'Bot', text: 'Hello! How can I assist you today?' }];

  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Add user's message to chat
      this.messages.push({ user: 'Me', text: this.newMessage });

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ user: 'Bot', text: 'This is a bot response.' });
      }, 1000);

      // Clear input
      this.newMessage = '';
    }
  }
}
