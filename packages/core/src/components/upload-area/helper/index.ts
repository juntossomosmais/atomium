interface FileValidation {
  valid: File[]
  invalid?: File[]
}
export function validateAcceptFile(file: File, accept: string): boolean {
  const acceptList = accept.split(',')
  return acceptList.some((acceptType) => {
    const isExtensions = acceptType.startsWith('.')

    if (isExtensions) {
      const fileExtension = file.name.split('.').pop()
      return fileExtension === acceptType
    }

    return file.type === acceptType
  })
}

export function validateAcceptOnDrop(
  files: File[],
  accept: string
): FileValidation {
  if (!accept) return { valid: files }
  const validation = {
    valid: [],
    invalid: [],
  }
  files.forEach((file) => {
    const isFileValid = validateAcceptFile(file, accept)
    if (isFileValid) {
      validation.valid.push(file)
    } else {
      validation.invalid.push(file)
    }
  })

  return validation
}
