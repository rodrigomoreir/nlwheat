import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS } from '../../theme';

export const StyledContainer = styled.View`
  width: 100%;
  height: 184;
  background-color: ${COLORS.BLACK_TERTIARY};
  padding-bottom: ${getBottomSpace() + 16}px;
  padding-top: 16px;
  padding-horizontal: 24px;
`
export const StyledInput = styled.TextInput`
  width: 100%;
  height: 88px;
  text-align-vertical: top;
  color: ${COLORS.WHITE};
`
