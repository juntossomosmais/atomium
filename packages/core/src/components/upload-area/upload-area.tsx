import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core'
import { validateAcceptOnDrop } from './helper'

@Component({
  tag: 'atom-upload-area',
  styleUrl: 'upload-area.scss',
  shadow: true,
})
export class AtomUploadArea {
  @Element() host: HTMLElement

  @Prop() itemToUpload: string = 'o arquivo'
  @Prop() multiple = false
  @Prop() disabled = false
  @Prop() accept?: string

  @Event({
    eventName: 'invalid',
  })
  invalidEmitter: EventEmitter

  private _inputEl!: HTMLInputElement

  private draggingFile = false

  get inputEl(): HTMLInputElement {
    return this._inputEl
  }
  get id(): string {
    return this.host.getAttribute('id')
  }

  set inputEl(value: HTMLInputElement) {
    this._inputEl = value
  }

  async setInputEl(inputEl: HTMLInputElement) {
    this._inputEl = inputEl
  }

  fireEvents(files: File[]) {
    const changeEvent = new CustomEvent('change')
    Object.defineProperty(changeEvent, 'target', {
      writable: false,
      value: this.host,
    })
    Object.defineProperty(changeEvent.target, 'files', {
      writable: false,
      value: files,
    })

    this.host.dispatchEvent(changeEvent)
    this.inputEl.value = null
  }

  checkValidity(files) {
    const validatedFiles = validateAcceptOnDrop(files, this.accept)

    if (validatedFiles.invalid?.length) {
      this.invalidEmitter.emit(validatedFiles.invalid)
    }

    return validatedFiles.valid
  }

  onChange(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    const files = Array.from((event.target as HTMLInputElement).files)
    const acceptedFiles = this.checkValidity(files)
    if (!acceptedFiles?.length) return
    this.fireEvents(files)
  }

  private handleDrop = (event: DragEvent) => {
    if (this.disabled) return
    event.stopPropagation()
    event.preventDefault()
    this.draggingFile = false
    const files = Array.from(event.dataTransfer.files)
    const acceptedFiles = this.checkValidity(files)
    if (!acceptedFiles?.length) return
    this.fireEvents(acceptedFiles)
  }
  private handleDragOver = (event: DragEvent) => {
    if (this.disabled) return

    event.stopPropagation()
    event.preventDefault()
    this.draggingFile = true
  }
  render(): JSX.Element {
    return (
      <Host
        class={{
          'atom-upload-area': true,
          'atom-upload-area--disabled': this.disabled,
        }}
      >
        <label
          class={{
            'atom-upload-area__wrapper': true,
            'atom-upload-area__wrapper--dragging': this.draggingFile,
            'atom-upload-area__wrapper--disabled': this.disabled,
          }}
          htmlFor={this.id}
          onDrop={this.handleDrop.bind(this)}
          onDragOver={this.handleDragOver.bind(this)}
        >
          <input
            class="atom-upload-area__input"
            ref={(el) => (this.inputEl = el)}
            type="file"
            id={this.id}
            name={this.id}
            onChange={this.onChange.bind(this)}
            multiple={this.multiple}
            disabled={this.disabled}
            accept={this.accept}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="atom-upload-area__icon"
          >
            <path d="M9,10V16H15V10H19L12,3L5,10H9M12,5.8L14.2,8H13V14H11V8H9.8L12,5.8M19,18H5V20H19V18Z" />
          </svg>

          <slot name="description">
            <p class="atom-upload-area__message">
              Arraste {this.itemToUpload} para cá ou
            </p>
            <span class="atom-upload-area__fake-clicker">
              selecione {this.itemToUpload} no seu computador
            </span>
          </slot>
        </label>
      </Host>
    )
  }
}
