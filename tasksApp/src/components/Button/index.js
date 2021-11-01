import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../common/colors';
import {Container, Icon, ButtonText} from './styles';

const Button = ({style, loading, icon, children, ...rest}) => {
  return (
    <>
      <Container style={style} {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          icon && <Icon name={icon} size={20} color={colors.white} />
        )}
        <ButtonText>{children}</ButtonText>
      </Container>
    </>
  );
};

export default Button;
