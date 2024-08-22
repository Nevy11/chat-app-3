import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';

@Component({
  selector: 'nevy11-part-f-tablet',
  templateUrl: './part-f-tablet.component.html',
  styleUrl: './part-f-tablet.component.scss',
})
export class PartFTabletComponent {
  @ViewChild('faq', { static: true }) faq!: ElementRef;
  renderer = inject(Renderer2);
  items = [
    'is LCP for student free?',
    'when was Laikipia University started',
    'Is the chatting platform an AI?',
    'Can you use the AI for businesses',
    'How accurate is the AI',
  ];
  answers = [
    'Yes, LCP is always free as there are no charging',
    'It was started in 1949',
    'The entire transformer is built on a transformer with decoders',
    'Thanks to God, The ai can help people who have little or no experience to start a business',
    'The AI is 99.0% accurate in terms of answering the questions',
  ];
  expandedIndex = 0;
}
