import React from "react"
import { Input } from "@/components/ui/input"

interface FileUploadProps {
  onChange: (file: File | null) => void
  accept?: string
  error?: string
}

export function FileUpload({ onChange, accept = "image/*", error }: FileUploadProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    onChange(file)
  }

  return (
    <div className="space-y-2">
      <Input
        type="file"
        onChange={handleChange}
        accept={accept}
        aria-invalid={!!error}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
