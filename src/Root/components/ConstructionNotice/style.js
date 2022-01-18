import styled from '@emotion/styled';

import { COLOR } from '../../../contants';

export const Notice = styled.div`
  align-self: center;
  text-align: center;
  h1 {
    font-family: StickNoBills, sans-serif;
    color: ${COLOR.RED};
    font-size: 64px;
    margin: 0;
  }
  p {
    font-family: NTR, sans-serif;
    color: ${COLOR.GRAY};
    font-size: 22px;
  }
`;
