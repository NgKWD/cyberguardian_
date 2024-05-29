import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question1',
  templateUrl: 'question1.component.html',
  styleUrls: ['question1.component.css'],
})
export class Question1 {
  @Input()
  question: string =
    'Use Multi-Factor Authentication (MFA) for all critical systems and services. MFA adds an extra layer of security by requiring multiple forms of verification. This reduces the risk of unauthorized access even if credentials are compromised.'
  @Input()
  answer: string =
    'NIST Special Publication 800-63B on Digital Authentication Guidelines'
  constructor() {}
}
