import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string =
    'Use Multi-Factor Authentication (MFA) for all critical systems'
  @Input()
  subHeading: string =
    'MFA adds an extra layer of security by requiring multiple forms of verification. This reduces the risk of unauthorized access even if credentials are compromised. (References: NIST Special Publication 800-63B on Digital Authentication Guidelines)'
  constructor() {}
}
