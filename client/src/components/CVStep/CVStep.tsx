import React, { useState, useEffect, ChangeEvent } from 'react';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewCandidate } from 'actions/candidates.actions';
import { useStyles } from './styles';
import CardCustom from "components/CardCustom/CardCustom";
import { CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import RHFSelectAutocomplete from 'components/form/Select/RHFSelectAutocomplete';
import Button from '@material-ui/core/Button';
import { SKILLS } from "constants/constants";

enum INPUT_NAMES {
    Fio = 'fio',
    Label = 'label',
    Area = 'area',
    // DateOfBirth = 'DateOfBirth',
    Email = 'email',
    Phone = 'phone',
    Skype = 'skype',
    Site = 'site',
    Skills = 'skills',
}

const INPUT_LABELS: { [key: string]: string } = {
    [INPUT_NAMES.Fio]: 'ФИО',
    [INPUT_NAMES.Label]: 'Должность',
    [INPUT_NAMES.Area]: 'Сфера',
    // [INPUT_NAMES.DateOfBirth]: 'Дата рождения',
    [INPUT_NAMES.Email]: 'E-mail',
    [INPUT_NAMES.Phone]: 'Номер телефона',
    [INPUT_NAMES.Skype]: 'Skype',
    [INPUT_NAMES.Site]: 'Aдрес веб-сайта',
    [INPUT_NAMES.Skills]: 'Ключевые навыки',
};

type Inputs = {
    [INPUT_NAMES.Fio]: string;
    [INPUT_NAMES.Label]: string; // Programmer, Designer, etc.
    [INPUT_NAMES.Area]: string; // web, desktop, ar/vr, ui/ux, etc
    // [INPUT_NAMES.DateOfBirth]: string | Date
    // contacts: IContacts
    [INPUT_NAMES.Email]: string;
    [INPUT_NAMES.Phone]: string;
    [INPUT_NAMES.Skype]: string;
    [INPUT_NAMES.Site]: string;
    // education: IEducation[]
    // awards?: IAwards[]
    // publications?: IPublication[]
    // publication?: IPublication[]
    // languages: ILanguage[]
    // salary?: ISalaryRate
    [INPUT_NAMES.Skills]: string[],
    // id: number | string
    // internal: boolean
    // status: string
    // source: string
    // quality: number
    // type?: any
};

interface ICVStepProps {
    defaultOpen?: boolean;
    onSubmit: () => void;
    initialData: any;
}

const CVStep = ({defaultOpen = true, onSubmit, initialData={} }: ICVStepProps) => {
    const { register, handleSubmit, setValue, control,} = useForm<Inputs>();
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        setValue('fio', initialData.fio)
        setValue('phone', initialData.phone)
        
        
    }, [initialData])

    const doSendCV = (data: Inputs) => {

        dispatch(addNewCandidate({
            fio: data.fio,
            label: data.label,
            area: data.area,
            skills: data.skills,
            contacts: {
                email: data[INPUT_NAMES.Email],
                phone: data[INPUT_NAMES.Phone],
                skype: data[INPUT_NAMES.Skype],
                site: data[INPUT_NAMES.Site]
            },

            internal: false,
            status: "New",
            source: "HH",
            quality: 10,
            type: null,
            education: [
            ],
            languages: [
                {
                    id: 1,
                    language: "Русский",
                    level: "родной"
                },
            ],
            publication: [],
            dateOfBirth: new Date()
        }));
        onSubmit();
    };

    return (
        <div className={classes.wrapper}>
            <CardCustom title="Личные данные" defaultOpen={defaultOpen}>
                <CardContent>
                    <form onSubmit={handleSubmit(doSendCV)}>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Fio]}
                                inputRef={register({ required: true })}
                                name={INPUT_NAMES.Fio}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Label]}
                                inputRef={register({ required: true })}
                                name={INPUT_NAMES.Label}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Area]}
                                name={INPUT_NAMES.Area}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Email]}
                                inputRef={register({ required: true })}
                                name={INPUT_NAMES.Email}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Phone]}
                                inputRef={register({ required: true })}
                                name={INPUT_NAMES.Phone}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Skype]}
                                name={INPUT_NAMES.Skype}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl className={classes.input}>
                            <TextField
                                label={INPUT_LABELS[INPUT_NAMES.Site]}
                                name={INPUT_NAMES.Site}
                                variant="outlined"
                                fullWidth
                            />
                        </FormControl>
                        <RHFSelectAutocomplete
                            className={classes.input}
                            name={INPUT_NAMES.Skills}
                            label={INPUT_LABELS[INPUT_NAMES.Skills]}
                            defaultValue={[]}
                            variant="outlined"
                            options={SKILLS}
                            control={control}
                        />
                        <Button
                            className={classes.submitBtn}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Подтвердить
                        </Button>
                    </form>
                </CardContent>
            </CardCustom>
        </div>
    );
};

export default CVStep;
