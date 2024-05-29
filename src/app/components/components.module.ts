import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { FeatureCard } from './feature-card/feature-card.component'
import { Question1 } from './question1/question1.component'

@NgModule({
  declarations: [FeatureCard, Question1],
  imports: [CommonModule, RouterModule],
  exports: [FeatureCard, Question1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
