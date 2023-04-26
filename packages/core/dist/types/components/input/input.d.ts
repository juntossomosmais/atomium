/// <reference types="react" />
import { Mode, TextFieldTypes } from '@ionic/core';
import { EventEmitter } from '../../stencil-public-runtime';
export declare class AtomInput {
  inputEl: HTMLInputElement;
  color?: 'primary' | 'secondary';
  value: string;
  type: TextFieldTypes;
  placeholder?: string;
  name?: string;
  minlength?: number;
  maxlength?: number;
  disabled: boolean;
  required: boolean;
  mode: Mode;
  fill: 'solid' | 'outline';
  autofocus: boolean;
  pattern?: string;
  accept?: string;
  multiple: boolean;
  clearOnEdit: boolean;
  clearInput: boolean;
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  labelPlacement?: 'fixed' | 'stacked' | 'floating';
  label?: string;
  atomFocus: EventEmitter<void>;
  atomBlur: EventEmitter<void>;
  atomChange: EventEmitter<string>;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private handleChange;
  private handleBlur;
  private handleFocus;
  render(): JSX.Element;
}
