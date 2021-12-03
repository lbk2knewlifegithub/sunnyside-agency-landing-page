import { Component, Input } from '@angular/core';

type AlignItems = 'start' | 'center';

/**
 * - Create modal with ng-content
 * -. When want item align center should assign alignItems=center
 * -. When want set zIndex should assign zIndex
 *
 * Example:
 * <lbk-modal-ng-content *ngIf='isModalCompleted' [zIndex]='2000' alignItems='center'>
 * <lbk-completed-dialog (gotIt)='isModalCompleted = false'></lbk-completed-dialog>
 * </lbk-modal-ng-content>
 */
@Component({
  selector: 'lbk-modal-ng-content',
  templateUrl: './modal-ng-content.component.html',
  styleUrls: ['./modal-ng-content.component.scss'],
})
export class ModalNgContentComponent {
  @Input('alignItems') alignItems: AlignItems = 'start';
  @Input('zIndex') zIndex = 1000;
}

