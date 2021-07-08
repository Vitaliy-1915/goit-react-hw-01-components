import styled from '@emotion/styled';

export const FriendLists = styled.ul`
  width: 250px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

export const FriendItems = styled.li`
  display: flex;
  border-color: gray;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  padding: 5px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const FriendItemsStatus = styled.span`
  background-color: ${props => (props.className ? 'green' : 'red')};

  width: 15px;
  height: 15px;
  border: solid 1px;
  border-radius: 50%;
  margin: auto;
  margin-left: 25px;
  margin-right: 0;
`;

export const FriendItemsAvatar = styled.img`
  border: solid 1px;
  border-radius: 5px;
  margin-left: 10px;
`;

export const FriendItemsName = styled.p`
  margin-left: 10px;
`;
