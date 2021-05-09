import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import MuiSwitch, { SwitchProps } from '@material-ui/core/Switch'
import React from 'react'

type Props = Omit<SwitchProps, 'onChange'> & {
    label: string
    onChange: (selected: boolean) => void
    helperText?: string
}

const Switch = ({ label, helperText, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked)
    }
    return (
        <FormControl>
            <FormControlLabel control={<MuiSwitch onChange={handleChange} color="primary" {...rest} />} label={label} />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default Switch
