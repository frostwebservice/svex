import React, { useState, useEffect, useRef } from 'react';
import isEqual from 'lodash/isEqual';
import debounce from 'lodash/debounce';

import {
  Autocomplete,
  Checkbox,
  Grid,
  FormGroup,
  FormControlLabel,
  TextField,
  Button
} from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import './multiselect.css';
const MultiSelectAll = ({
  items,
  selectAllLabel,
  onChange,
  title = 'Social Media Types',
  value
}) => {
  const [selectedOptions, setSelectedOptions] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(null);
  const multiSelectRef = useRef(null);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  const handleToggleOption = (selectedOptions) =>
    setSelectedOptions(selectedOptions);
  const handleClearOptions = () => setSelectedOptions([]);
  const getOptionLabel = (option) => `${option.label}`;

  const allItemsSelected = () => {
    // if options are filtered, check to see if all filtered options are in selected items
    // if yes, selectAll - true, else selectAll - false
    // if options are not filtered, check to see if all items are selected or not
    if (filteredOptions?.length !== items.length) {
      const excludedFilteredOptions = filteredOptions?.filter(
        (opt) => !selectedOptions.find((selOpt) => selOpt.label === opt.label)
      );
      if (excludedFilteredOptions?.length > 0) {
        return false;
      }
      return true;
    }
    const allSelected =
      items.length > 0 && items.length === selectedOptions.length;
    return allSelected;
  };

  const clearSelected = (selOptions) => {
    // filter out the selOptions
    if (selOptions.length > 0) {
      setSelectedOptions(
        selectedOptions.filter(
          (item) =>
            !selOptions.find((selOption) => selOption.label === item.label)
        )
      );
    } else {
      setSelectedOptions([]);
    }
  };

  const handleSelectAll = (isSelected) => {
    let selectedList = [];
    if (
      filteredOptions?.length > 0 &&
      filteredOptions.length !== items.length
    ) {
      selectedList = items.filter((item) =>
        filteredOptions.find(
          (filteredOption) => filteredOption.label === item.label
        )
      );
    }
    if (isSelected) {
      if (selectedList.length > 0) {
        setSelectedOptions([...selectedOptions, ...selectedList]);
      } else {
        setSelectedOptions(items);
      }
    } else {
      clearSelected(selectedList);
    }
  };

  const handleToggleSelectAll = () => {
    handleSelectAll(!allItemsSelected());
  };

  const handleChange = (event, selectedOptions, reason) => {
    let result = null;
    if (reason === 'clear') {
      handleClearOptions();
    } else if (reason === 'selectOption' || reason === 'removeOption') {
      if (selectedOptions.find((option) => option.value === 'select-all')) {
        handleToggleSelectAll();
        // let result = [];
        result = items.filter((el) => el.value !== 'select-all');
        // onChange(result);
      } else {
        handleToggleOption(selectedOptions);
        result = selectedOptions;
        // onChange(selectedOptions);
      }
    }
  };
  const onOKClicked = () => {
    document
      .getElementsByClassName('MuiAutocomplete-popupIndicator')[0]
      .click();
  };
  const handleCheckboxChange = (e, option) => {
    if (option.value === 'select-all') {
      handleToggleSelectAll();
      // if (e.target.checked) {
      //     // onChange(items);
      // } else {
      //     // onChange([]);
      // }
    } else if (e.target.checked) {
      const result = [...selectedOptions, option];
      setSelectedOptions(result);
      // onChange(result);
    } else {
      const result = selectedOptions.filter(
        (selOption) => selOption.value !== option.value
      );
      setSelectedOptions(result);
      // onChange(result);
    }
  };
  const handleClickLabel = (e, option) => {
    if (option.value === 'select-all') {
      handleToggleSelectAll();
      // if (e.target.checked) {
      //     // onChange(items);
      // } else {
      //     // onChange([]);
      // }
    } else {
      let exist = selectedOptions.filter(
        (selOption) => selOption.value == option.value
      ).length;
      if (exist == 0) {
        const result = [...selectedOptions, option];
        setSelectedOptions(result);
      } else {
        const result = selectedOptions.filter(
          (selOption) => selOption.value !== option.value
        );
        setSelectedOptions(result);
      }
    }
  };
  const optionRenderer = (props, option, { selected }) => {
    const selectAllProps =
      option.value === 'select-all' // To control the state of 'select-all' checkbox
        ? { checked: allItemsSelected() }
        : {};
    if (option.value === 'OK') {
      return (
        <Grid container key={option.label}>
          <Grid item xs={12} sx={{ pl: 1, pr: 1 }}>
            <div className="justify-content-end">
              <Button
                className="text-center mx-8  multiselect-ok"
                variant="contained"
                onClick={onOKClicked}
                type="submit"
              >
                <span className="ml-2"> {option.value} </span>
              </Button>
            </div>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container key={option.label}>
        <Grid item xs={12} sx={{ pl: 1, pr: 1 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id={option.label}
                  key={option.label}
                  checked={selected}
                  onChange={(e) => handleCheckboxChange(e, option)}
                  {...selectAllProps}
                  sx={{ mr: 1 }}
                />
              }
              onClick={(e) => handleClickLabel(e, option)}
              htmlFor={option.label}
              label={getOptionLabel(option)}
              key={option.label}
            />
          </FormGroup>
        </Grid>
      </Grid>
    );
  };

  const debouncedStateValue = debounce((newVal) => {
    // console.log(isEqual(newVal, filteredOptions));
    if (newVal && !isEqual(newVal, filteredOptions)) {
      // console.log('setting filtered options');
      setFilteredOptions(newVal);
    }
  }, 1000);

  const updateFilteredOptions = (filtered) => {
    debouncedStateValue(filtered);
  };

  const inputRenderer = (params) => <TextField {...params} label={title} />;

  const filter = createFilterOptions();

  return (
    <>
      <Autocomplete
        ref={multiSelectRef}
        sx={{
          // width: "350px",
          maxHeight: '120px',
          overflowY: 'auto',
          p: 2
        }}
        multiple
        size="small"
        options={items}
        value={selectedOptions}
        disableCloseOnSelect
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          updateFilteredOptions(filtered);
          return [{ label: selectAllLabel, value: 'select-all' }, ...filtered];
        }}
        onChange={handleChange}
        renderOption={optionRenderer}
        renderInput={inputRenderer}
      />
    </>
  );
};

export default MultiSelectAll;
