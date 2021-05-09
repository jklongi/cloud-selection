import { useState } from 'react'
import MuiSelect, { SelectProps } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

type Item<V> = {
    name: string
    value: V
}

type Props<V> = Omit<SelectProps, 'onChange'> & {
    id: string
    label: string
    items: Item<V>[]
    onChange: (selected: V[]) => void
}

const Select = <V extends string>({ items, onChange, id, label, ...rest }: Props<V>) => {
    const [value, setValue] = useState<V[]>([])
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as V[]
        setValue(value)
        onChange(value)
    }
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <MuiSelect
                multiple
                value={value}
                onChange={handleChange}
                fullWidth
                input={<Input />}
                inputProps={{ id }}
                {...rest}
            >
                {items.map(({ name, value }) => (
                    <MenuItem key={value} value={value}>
                        {name}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    )
}

export default Select
