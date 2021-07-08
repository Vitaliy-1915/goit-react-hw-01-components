import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 100px;
  list-style: none;

  margin: 0;
  padding: 0;
`;

const dynamicStyle = props =>
  css`
    .docx {
      background-color: grey ${props.className};
    }
    .pdf {
      background-color: #a72f2f;
    }

    .mp3 {
      background-color: #3133aa;
    }
  `;

export const StatListItem = styled.li`
  background-color: ${dynamicStyle};

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  :first-of-type {
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const StatListItemLabel = styled.span`
  font-weight: normal;
  font-size: 12px;
  color: #000;
`;

export const StatListItemPercentage = styled.span`
  font-weight: bold;
  color: #000;
`;
