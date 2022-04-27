import { useState } from 'react'

export default function useField(type) {
  const [value, setValue] = useState("")

  function handleChange(e) {
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value

    setValue(value)
  }

  const bind = {
    type,
    value,
    onChange: handleChange,
  }

  return bind
}
