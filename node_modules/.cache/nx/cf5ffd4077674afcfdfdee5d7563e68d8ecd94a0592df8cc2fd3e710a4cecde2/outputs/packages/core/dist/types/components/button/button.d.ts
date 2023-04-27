import { Mode } from '@ionic/core';
import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtomButton {
  color: 'primary' | 'secondary';
  fill: 'clear' | 'outline' | 'solid';
  size: 'small' | 'default' | 'large';
  expand?: 'block' | 'full';
  shape?: 'round';
  disabled?: boolean;
  type: 'submit' | 'reset' | 'button';
  mode: Mode;
  atomClick: EventEmitter;
  private handleClick;
  render(): any;
}
