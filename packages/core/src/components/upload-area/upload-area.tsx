import { InputChangeEventDetail } from '@ionic/core'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-upload-area',
  styleUrl: 'upload-area.scss',
  shadow: true,
})
export class AtomUploadArea {
  @Element() host: HTMLElement

  @Prop() itemToUpload: string = 'o arquivo'
  @Prop() icon?: string
  @Prop() multiple = false
  @Prop() disabled = false
  @Prop() accept?: string

  @Event() atomChange!: EventEmitter<InputChangeEventDetail>
  @Event() atomInput!: EventEmitter<InputEvent>

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

  @Method()
  async setInputEl(inputEl: HTMLInputElement) {
    this._inputEl = inputEl
  }

  onChange(event) {
    event.preventDefault()
    event.stopPropagation()
    console.dir((event.target as HTMLInputElement).files)
    console.dir(this.inputEl)
    // this.atomInput.emit(event as unknown as InputEvent)
    // this.atomChange.emit(event)
  }
  onClick() {
    console.dir(this.inputEl)
  }

  private handleDrop = (event: DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    this.draggingFile = false
    this.inputEl.files = event.dataTransfer.files
  }
  private handleDragOver = (event: DragEvent) => {
    event.stopPropagation()
    event.preventDefault()
    this.draggingFile = true
  }
  render(): JSX.Element {
    return (
      <Host class="atom-upload-area">
        <label
          class={{
            [`atom-upload-area__wrapper`]: true,
            [`atom-upload-area__wrapper--dragging`]: this.draggingFile,
          }}
          htmlFor={this.id}
          onDrop={this.handleDrop}
          onDragOver={this.handleDragOver}
        >
          <input
            class="atom-upload-area__input"
            ref={(el) => (this.inputEl = el as HTMLInputElement)}
            type="file"
            id={this.id}
            name={this.id}
            onChange={this.onChange}
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
          <p class="atom-upload-area__message">
            Arraste {this.itemToUpload} para cá ou
          </p>
          <atom-button
            fill="clear"
            class="atom-upload-area__button"
            onAtomClick={this.onClick}
          >
            selecione {this.itemToUpload} no seu computador
          </atom-button>
        </label>
      </Host>
    )
  }
}
