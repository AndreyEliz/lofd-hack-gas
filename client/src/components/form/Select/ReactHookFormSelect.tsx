import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import { Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { SelectProps } from "@material-ui/core/Select";

interface IReactHookFormSelect extends FormControlProps {
    name: string,
    label: string,
    control: any,
    defaultValue: any,
    selectProps?: SelectProps
}

const ReactHookFormSelect: React.FC<IReactHookFormSelect> = ({
    name,
    label,
    control,
    defaultValue,
    variant,
    children,
    selectProps,
    ...props
}) => {
    return (
    <FormControl {...props}>
        <Controller
            as={
                <TextField 
                    label={label}
                    select
                    SelectProps={selectProps}
                    defaultValue={defaultValue}
                    variant={variant}
                    fullWidth
                >
                    {children}
                </TextField>
                }
            name={name}
            control={control}
            defaultValue={defaultValue}
        />
    </FormControl>
    );
};
export default ReactHookFormSelect;