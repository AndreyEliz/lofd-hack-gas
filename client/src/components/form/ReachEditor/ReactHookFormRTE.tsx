import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import { Controller } from "react-hook-form";
import ReachEditor from "./ReachEditor";

interface IReactHookFormRTE extends FormControlProps {
    name: string,
    label: string,
    control: any,
    defaultValue: any,
}

const ReactHookFormRTE: React.FC<IReactHookFormRTE> = ({
    name,
    label,
    control,
    defaultValue,
    ...props
}) => {
    return (
    <FormControl {...props}>
        <Controller
            render={
                (props:any) => 
                <ReachEditor
                    onChange={props.onChange}
                    label={label}
                />
            }
            name={name}
            control={control}
            defaultValue={defaultValue}
        />
    </FormControl>
    );
};
export default ReactHookFormRTE;