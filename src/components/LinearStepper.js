import React, { useState } from "react";

import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stepper } from "@mui/material";
import { StepLabel } from "@mui/material";
import { Step } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { MenuItem } from "@mui/material";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";


function getSteps() {
    return [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Payment",
    ];
}



const PersonalInfoForm = () => {
    const { control, setValue, watch, formState: { errors } } = useFormContext();
    const [countries] = useState(['India', 'USA', 'UK']); // Add your country list here

    const selectedCountry = watch('country');



    return (
        <>
        <div className="text-white mb-0">
            <div className="text-white">
                <h2 className="text-lg text-white ">Book an Appointment for</h2>
                <span className="text-xl md:text-xl font-bold text-teal-500 line-through">Rs 1000</span>
                <span className="text-xl md:text-xl font-bold text-white ">FREE</span>
                <p className="text-sm md:text-base text-gray-400 -mb-4">60+ Expert Physiotherapists for 200+ Conditions</p>
            </div>
            <div className="px-5 ">
                <Controller
                    control={control}
                    name="fullName"
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                        <TextField
                            id="full-name"
                            label={<span style={{ color: 'white' }}>FullName</span>}
                            InputProps={{
                                inputProps: {
                                    style: {
                                        borderBottom: '1px solid white',
                                        color: 'white',
                                        ...(field.error ? { borderColor: 'red' } : {}),
                                    },
                                },
                            }}
                            variant="standard"
                            placeholder="Enter Your Full Name"
                            fullWidth
                            margin="normal"
                            value={field.value || ''}
                            onChange={(e) => setValue('fullName', e.target.value)}
                            error={Boolean(errors?.fullName)}
                            helperText={errors.fullName?.message}
                        />
                    )}
                />
            </div>
        </div>

        <div className="flex flex-row text-white px-5 mb-5 -mt-4 ">
            <div className="w-16">
                <Controller
                    control={control}
                    name="country"
                    rules={{ required: "This field is required." }}
                    defaultValue={countries[0]}
                    render={({ field }) => (
                        <TextField
                            id="country"
                            label={<span style={{ color: 'white' }}>Country</span>}
                            variant="standard"
                            className="text-white"
                            select
                            InputProps={{
                                inputProps: {
                                    style: {
                                        borderBottom: '1px solid white',
                                        color: 'white',
                                        ...(field.error ? { borderColor: 'red' } : {}),
                                    },
                                },
                            }}
                            fullWidth
                            margin="normal"
                            {...field}
                            error={Boolean(errors?.country)}
                            helperText={errors.country?.message}
                        >
                            {countries.map((country) => (
                                <MenuItem key={country} value={country}>
                                    {country}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
            </div>

            <Controller
                control={control}
                name="phoneNumber"
                rules={{ required: "This field is required." }}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        InputProps={{
                            inputProps: {
                                style: {
                                    borderBottom: '1px solid white',
                                    color: 'white',
                                    ...(field.error ? { borderColor: 'red' } : {}),
                                },
                            },
                        }}
                        label={<span style={{ color: 'white' }}>Phone</span>}
                        variant="standard"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.phoneNumber)}
                        helperText={errors.phoneNumber?.message || 'Incorrect phone number'}
                    />
                )}
            />
        </div>

        {/* Image at the end of the form */}
        <div className="flex justify-center items-center  ">
            <img src="physiotherapy_form_trust_image_2.webp" alt="Your Image" className="rounded" />
        </div>
    </>
    );
};


const AgeOccupationForm = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <Controller
                control={control}
                name="age"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                        id="age"
                        label={<span style={{ color: 'white' }}>Age</span>}
                        variant="standard"
                        InputProps={{
                            inputProps: {
                                style: {
                                    borderBottom: '1px solid white',
                                    color: 'white',
                                    ...(field.error ? { borderColor: 'red' } : {}),
                                },
                            },
                        }}
                        placeholder="Enter Your Age"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.age)}
                        helperText={errors.age?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="occupation"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                        id="occupation"
                        label={<span style={{ color: 'white' }}>Occupation</span>}
                        variant="standard"
                        InputProps={{
                            inputProps: {
                                style: {
                                    borderBottom: '1px solid white',
                                    color: 'white',
                                    ...(field.error ? { borderColor: 'red' } : {}),
                                },
                            },
                        }}
                        placeholder="Enter Your Occupation"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.occupation)}
                        helperText={errors.occupation?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="problemDescription"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <TextField
                        id="problem-description"
                        label={<span style={{ color: 'white' }}>Whats your problem</span>}
                        variant="standard"
                        InputProps={{
                            inputProps: {
                                style: {
                                    borderBottom: '1px solid white',
                                    color: 'white',
                                    ...(field.error ? { borderColor: 'red' } : {}),
                                },
                            },
                        }}
                        placeholder="Describe your problem"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.problemDescription)}
                        helperText={errors.problemDescription?.message}
                    />
                )}
            />
        </>
    );
};



const PainIntensityForm = () => {
    const { control, formState: { errors } } = useFormContext();
    
    return (
        <>
            <Typography variant="h6" style={{ color: 'white' }}>
                On a scale of 1 - 5, What is the intensity of your pain?
            </Typography>
            <Controller
                control={control}
                name="painIntensity"
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                    <RadioGroup {...field} row>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <FormControlLabel
                                key={value}
                                value={value.toString()}
                                control={<Radio style={{ color: 'white' }} />}
                                label={value.toString()}
                            />
                        ))}
                    </RadioGroup>
                )}
            />
            {errors.painIntensity && (
                <Typography variant="body2" color="error" gutterBottom>
                    {errors.painIntensity.message}
                </Typography>
            )}
        </>
    );
};



const SlotSelectionForm = () => {
    const { control, formState: { errors }, getValues } = useFormContext();

    const days = ['23 Jan (today)', '24 Jan (tomorrow)'];
    const slots = [
        ['8:00 AM', '8:30 AM', '8:45 AM', '9:00 AM', '9:15 AM', '9:30 AM', '9:45 AM'],
        ['9:00 AM', '9:30 AM', '8:45 AM', '8:00 AM', '9:15 AM', '9:30 AM', '9:45 AM'],
    ];

    const isAnySlotSelectedInCurrentArray = (currentArrayIndex) => {
        for (let slotIndex = 0; slotIndex < slots[currentArrayIndex].length; slotIndex++) {
            if (getValues(`selectedSlot[${currentArrayIndex}][${slotIndex}]`)) {
                return true; // At least one slot is selected in the current array
            }
        }
        return false; // No slot is selected in the current array
    };

    return (
        <>
            <Typography variant="h6" style={{ color: 'white' }}>
                Pick Your Consultation Slot
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {days.map((day, index) => (
                    <div key={index} style={{ marginRight: '20px' }}>
                        <Typography variant="subtitle1" style={{ color: 'white' }}>
                            {day}
                        </Typography>
                        <Controller
                            control={control}
                            name={`selectedSlot[${index}]`}
                            rules={{
                                validate: () => {
                                    if (isAnySlotSelectedInCurrentArray(index)) {
                                        return true; // Validation passed for the current array
                                    }

                                    // Check if any slot is selected in the other array
                                    const otherArrayIndex = index === 0 ? 1 : 0;
                                    for (let slotIndex = 0; slotIndex < slots[otherArrayIndex].length; slotIndex++) {
                                        if (getValues(`selectedSlot[${otherArrayIndex}][${slotIndex}]`)) {
                                            return true; // Validation passed for the other array
                                        }
                                    }

                                    return 'Please select at least one slot'; // Validation failed
                                },
                            }}
                            render={({ field }) => (
                                <RadioGroup {...field} className="overflowX: 'scroll'">
                                    {slots[index].map((slot, slotIndex) => (
                                        <FormControlLabel
                                            key={slotIndex}
                                            value={slot}
                                            control={<Radio style={{ color: 'white' }} />}
                                            label={slot}
                                        />
                                    ))}
                                </RadioGroup>
                            )}
                        />
                        {errors.selectedSlot && errors.selectedSlot[index] && (
                            <Typography variant="body2" color="error" gutterBottom>
                                {errors.selectedSlot[index].message}
                            </Typography>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};


const ConfirmationForm = ({ fullName }) => {
    return (
        <>
            <Typography variant="h3" align="center" style={{ color: 'white' }}>
                Thank You {fullName}!
            </Typography>
            <Typography align="center" style={{ color: 'white' }}>
                Your Appointment is Booked. You will receive details about your appointment on the number
                provided via WhatsApp.
            </Typography>
        </>
    );
};


const getStepContent = (step, control, setValue, watch) => {
    switch (step) {
        case 0:
            return <PersonalInfoForm control={control} setValue={setValue} watch={watch} />;
        case 1:
            return <AgeOccupationForm />;
        case 2:
            return <PainIntensityForm control={control} />;
        case 3:
            return <SlotSelectionForm  full/>;
        default:
            return null; // Return null for unrecognized steps
    }
};


const LinearStepper = () => {
    const methods = useForm({
        defaultValues: {
            // Your default values here
        },
    });

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const [fullName, setFullName] = useState('');
    

    const steps = ['Contact', 'Problem', 'Concerns', 'Consultation', 'booked'];

    const isStepOptional = (step) => {
        return step === 0; // You can modify this based on your requirements
    };

    const isStepFalied = () => {
        return Boolean(Object.keys(methods.formState.errors).length);
      };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        if (activeStep === steps.length - 1) {
            // Handle submission logic here
            console.log(data);
            setFullName(data.fullName); // Save fullName for ConfirmationForm
            // You may want to make an API call or navigate to the next step based on your requirements
        } else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <section className="flex justify-center items-center px-8 py-6 bg-transparent text-white">
            <div className="lg:w-[400px] bg-gray-800 rounded-lg px-8 py-8 text-white">
                <Stepper alternativeLabel activeStep={activeStep} style={{ color: 'white' }}>
                    {steps.map((label, index) => {
                        const labelProps = {};
                        const stepProps = {};

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                          if (isStepFalied() && activeStep == index) {
            labelProps.error = true;
          }
                        return (
                            index !== steps.length - 1 && ( // Exclude ConfirmationForm from stepper
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            )
                        );
                    })}
                </Stepper>
                {activeStep === steps.length - 1 ? (
                    <ConfirmationForm fullName={fullName} />
                ) : (
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)} >
                            <div className="flex flex-col  text-white">
                                {activeStep === 0 && <PersonalInfoForm />}
                                {activeStep > 0 && getStepContent(activeStep)}

                                <div className="flex justify-between pt-4">
                                    <Button
                                        className="bg-teal-500 px-4 space-y-1 cursor-pointer rounded"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        className="bg-teal-500 px-4 cursor-pointer rounded"
                                        variant="contained"
                                        type="submit"
                                    >
                                        {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                )}
            </div>
        </section>
    );
};

export default LinearStepper;