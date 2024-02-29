import { useCallback, useMemo, useState, useEffect } from 'react';
import CheckIcon from '@untitled-ui/icons-react/build/esm/Check';
import {
  Avatar,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  SvgIcon,
  Stack,
  Button,
  Typography
} from '@mui/material';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';

import { JobFinalStep } from './job-final-step';
import { JobPreview } from './job-preview';
import JobBriefSummeryStep from './job-briefsummery-step';
import JobSocialDetailStep from './job-social-detail-step';
import JobCompensationStep from './job-compensation-step';
import JobShotoutStep from './job-shotout-step';
import JobExclusionStep from './job-exclusions-step';
import JobShareStep from './job-share-step';
import axios from 'axios';
import { updateJob } from '@/actions';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './create.css';
const StepIcon = (props) => {
  const { active, completed, icon } = props;

  const highlight = active || completed;

  return (
    <Avatar
      sx={{
        height: 40,
        width: 40,
        ...(highlight && {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText'
        })
      }}
      variant="rounded"
    >
      {completed ? (
        <SvgIcon>
          <CheckIcon />
        </SvgIcon>
      ) : (
        icon
      )}
    </Avatar>
  );
};
const JobCreateForm = (props) => {
  const { job, isEdit, jobID } = props;
  const [activeStep, setActiveStep] = useState(0);
  const [review, setReview] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [lasthidden, setlasthidden] = useState('span');
  const email = JSON.parse(localStorage.getItem('email'));
  const [socialtypes, setSocialTypes] = useState([]);
  const [checkEdit, setCheckEdit] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  if (!checkEdit && isEdit) {
    setReview(isEdit);
    setCheckEdit(true);
  }
  const updateValue = (which, value) => {
    dispatch(updateJob(which, value));
  };

  const handleNext = useCallback(() => {
    setActiveStep((prevState) => prevState + 1);
  }, []);
  useEffect(() => {
    if (activeStep == 6 || review) {
      setReview(true);
      setlasthidden('none');
    }
    updateValue('email', email);
  }, [activeStep]);
  const handleBack = useCallback(() => {
    setActiveStep((prevState) => prevState - 1);
  }, []);
  const handleReview = useCallback(() => {
    setReview(true);
    setlasthidden('none');
  });
  const handleUpdate = () => {
    axios
      .post('/api/update_job', { job: job, jobID: jobID }, {})
      .then((res) => {
        updateValue('email', '');
        updateValue('title', '');
        updateValue('brief', '');
        updateValue('niche', 'Acne and Skin Care');
        updateValue('shoutoutonly', 'shoutoutonly');
        updateValue('typesarray', []);
        updateValue('favarray', []);
        updateValue('socialtypes', '');
        updateValue('ig', '');
        updateValue('tt', '');
        updateValue('yt', '');
        updateValue('tw', '');
        updateValue('pt', '');
        updateValue('li', '');
        updateValue('bw', '');
        updateValue('payselected', 'paid');
        updateValue('paid', 'Under 10USD');
        updateValue('barter', '');
        updateValue('revenue', '');
        updateValue('custom', '');
        updateValue('businessurl', '');
        updateValue('socialhandle', '');
        updateValue('images', '');
        updateValue('videos', '');
        updateValue('articles', '');
        updateValue('totalreach', 'all');
        updateValue('location', 'all');
        updateValue('gender', 'all');
        updateValue('agerange', 'all');
        updateValue('engagementrate', 'all');
        updateValue('favorites', '');
        updateValue('outreachgroups', '');
        navigate('/dashboard/jobs');
      });
  };
  const handleComplete = () => {
    axios.post('/api/create_job', { job }, {}).then((res) => {
      updateValue('email', '');
      updateValue('title', '');
      updateValue('brief', '');
      updateValue('niche', 'Acne and Skin Care');
      updateValue('shoutoutonly', 'shoutoutonly');
      updateValue('favarray', []);
      updateValue('typesarray', []);
      updateValue('socialtypes', '');
      updateValue('ig', '');
      updateValue('tt', '');
      updateValue('yt', '');
      updateValue('tw', '');
      updateValue('pt', '');
      updateValue('li', '');
      updateValue('bw', '');
      updateValue('payselected', 'paid');
      updateValue('paid', 'Under 10USD');
      updateValue('barter', '');
      updateValue('revenue', '');
      updateValue('custom', '');
      updateValue('businessurl', '');
      updateValue('socialhandle', '');
      updateValue('images', '');
      updateValue('videos', '');
      updateValue('articles', '');
      updateValue('totalreach', 'all');
      updateValue('location', 'all');
      updateValue('gender', 'all');
      updateValue('agerange', 'all');
      updateValue('engagementrate', 'all');
      updateValue('favorites', '');
      updateValue('outreachgroups', '');
      navigate('/dashboard/jobs');
    });
  };
  const steps = useMemo(() => {
    return [
      {
        label: 'Brief Summery',
        content: (
          <JobBriefSummeryStep
            onBack={handleBack}
            onNext={handleNext}
            updateValue={updateValue}
            isReview={review}
          />
        )
      },
      {
        label: 'Social Details',
        content: (
          <JobSocialDetailStep
            onBack={handleBack}
            onNext={handleNext}
            isReview={review}
            updateValue={updateValue}
            socialtypes={socialtypes}
            setSocialTypes={setSocialTypes}
          />
        )
      },
      {
        label: 'Compensation Details',
        content: (
          <JobCompensationStep
            onBack={handleBack}
            isReview={review}
            onNext={handleNext}
            updateValue={updateValue}
          />
        )
      },
      {
        label: 'Shoutout Instructions',
        content: (
          <JobShotoutStep
            isReview={review}
            onBack={handleBack}
            onNext={handleNext}
            updateValue={updateValue}
          />
        )
      },
      {
        label: 'Exclusions',
        content: (
          <JobExclusionStep
            isReview={review}
            onBack={handleBack}
            onNext={handleNext}
            updateValue={updateValue}
          />
        )
      },
      {
        label: 'Share',
        content: (
          <JobShareStep
            isReview={review}
            onBack={handleBack}
            onNext={handleNext}
            updateValue={updateValue}
          />
        )
      },
      {
        label: 'Review',
        content: (
          <JobFinalStep
            isReview={review}
            onBack={handleBack}
            onNext={handleComplete}
            onUpdate={handleUpdate}
            isEdit={isEdit}
          />
        )
      }
    ];
  }, [handleBack, handleNext, handleComplete]);

  if (isComplete) {
    return <JobPreview />;
  }

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      sx={{
        '& .MuiStepConnector-line': {
          borderLeftColor: 'divider',
          borderLeftWidth: 2,
          ml: 1
        }
      }}
    >
      {steps.map((step, index) => {
        const isCurrentStep = activeStep === index;

        return index < 6 ? (
          <Step key={step.label} expanded={review}>
            <StepLabel StepIconComponent={StepIcon}>
              <Typography sx={{ ml: 2 }} variant="overline">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent
              sx={{
                borderLeftColor: 'divider',
                borderLeftWidth: 2,
                ml: '20px',
                ...(isCurrentStep && {
                  py: 4
                })
              }}
            >
              {step.content}
            </StepContent>
          </Step>
        ) : (
          <Step key={step.label} expanded={review}>
            <StepLabel
              StepIconComponent={StepIcon}
              sx={{ display: lasthidden }}
            >
              <Typography sx={{ ml: 2 }} variant="overline">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent
              sx={{
                borderLeftColor: 'divider',
                borderLeftWidth: 2,
                ml: '20px',
                ...(isCurrentStep && {
                  py: 4
                })
              }}
            >
              {step.content}
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};
const mapStateToProps = (state) => ({
  job: state.job
});

export default connect(mapStateToProps)(JobCreateForm);
