/// <reference types="react" />
import { Mode } from '@ionic/core';
import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtomSelect {
  selectEl: HTMLIonSelectElement;
  color?: 'primary' | 'secondary';
  name: string;
  interface?: 'popover' | 'action-sheet';
  placeholder: string;
  cancelText?: string;
  okText?: string;
  disabled?: boolean;
  multiple?: boolean;
  size?: 'small' | 'large';
  mode: Mode;
  overlayDismiss?: boolean;
  label?: string;
  labelPlacement?: 'fixed' | 'stacked';
  options: Array<{
    value: string;
    selected?: boolean;
    disabled?: boolean;
  }>;
  atomBlur: EventEmitter<void>;
  atomCancel: EventEmitter<void>;
  atomChange: EventEmitter<string>;
  atomDimiss: EventEmitter<void>;
  atomFocus: EventEmitter<void>;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private handleChange;
  private handleCancel;
  private handleBlur;
  private handleFocus;
  private handleDimiss;
  render(): JSX.Element;
}
