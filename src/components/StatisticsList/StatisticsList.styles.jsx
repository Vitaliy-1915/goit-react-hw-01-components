import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;
  height: 100px;
  list-style: none;

  margin: 0;
  padding: 0;
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

const dynamicStyle = ({ className }) => {
  switch (className) {
    case '.docx':
      return '#af71a2';
    case '.pdf':
      return '#b17070';
    case '.mp3':
      return '#7879b1';
    case '.psd':
      return '#7cb1ae';
    default:
      return '#000';
  }
};

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
