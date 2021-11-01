import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import {useField} from '@unform/core';
import {maskHours, maskCep, maskCurrency, maskPhone} from '../../utils/mask';
import {Container, ErrorValue, Icon, TextInput} from './styles';

import {colors} from '../../common/colors';

const InputMask = (
  {name, width, mask, inputMaskChange, icon, ...rest},
  ref,
) => {
  const inputElementRef = useRef(null);
  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef({value: ''});

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!inputValueRef.current.value);
    if (inputValueRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  function handleChange(text) {
    if (mask === 'hours') {
      const value = maskHours(text);
      inputMaskChange(value);
    }
  }

  return (
    <>
      <Container isFocused={isFocused} isErrored={!!error}>
        <Icon
          name={icon}
          size={20}
          color={isFocused || isFilled ? colors.blue : colors.black}
        />
        <TextInput
          ref={inputElementRef}
          placeholderTextColor={colors.text}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            handleChange((inputValueRef.current.value = value));
          }}
          {...rest}
        />
      </Container>
      {error && <ErrorValue>{error}</ErrorValue>}
    </>
  );
};

export default forwardRef(InputMask);
